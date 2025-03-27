import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap plugins
gsap.registerPlugin(ScrollTrigger);

export function connectLenisToGSAP(lenis) {
  if (!lenis) return;

  //update scrolltrigger when lenis scrolls
  lenis.on("scroll", ScrollTrigger.update);

  //use lenis scroll values for gsap animations
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  //cleanup function to disconnect
  return () => {
    lenis.off("scroll", ScrollTrigger.update);
    gsap.ticker.remove(lenis.raf);
  };
}
