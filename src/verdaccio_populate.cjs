const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const registry = "http://localhost:4873/";

function getPackagesFromLock(lockFile) {
  const lock = JSON.parse(fs.readFileSync(lockFile, "utf-8"));
  return Object.entries(lock.packages || {})
    .filter(([pkg]) => pkg && pkg !== "")
    .map(([pkg, data]) => {
      const name = pkg.startsWith("node_modules/")
        ? pkg.replace("node_modules/", "")
        : pkg;
      return { name, version: data.version };
    });
}

function publishTarballToVerdaccio(pkgName, version) {
  const tarballName = `${pkgName.replace("/", "-")}-${version}.tgz`;
  if (!fs.existsSync(tarballName)) {
    console.log(`Packing ${pkgName}@${version}...`);
    execSync(`npm pack ${pkgName}@${version}`);
  }

  console.log(`Publishing ${tarballName} to Verdaccio...`);
  execSync(`npm publish ${tarballName} --registry ${registry}`);
  fs.unlinkSync(tarballName); // Clean up
}

const packages = getPackagesFromLock("package-lock.json");

packages.forEach(({ name, version }) => {
  try {
    publishTarballToVerdaccio(name, version);
  } catch (error) {
    console.error(`Failed for ${name}@${version}:`, error.message);
  }
});

console.log("✅ All done!");
