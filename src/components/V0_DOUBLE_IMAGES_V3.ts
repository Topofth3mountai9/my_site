"use client";
import styled from "styled-components";
import DoubleImages from "../components/double-images";

// Sample project data for the preview
const selected_projects = [
  {
    id: 1,
    name: "FurniflexFurniture",
    client: "some company",
    description: "A site to sell furniture ",
    url: "https://www.furniflexfurniture.co.ke",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/placeholder.svg?height=400&width=600",
    year: 2024,
  },
  {
    id: 2,
    name: "Architecture",
    client: "some company",
    description: "The online presence for high end architecture firms ",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/placeholder.svg?height=400&width=600",
    year: 2024,
  },
  {
    id: 3,
    name: "School site",
    client: "some company",
    description: "A school in Eldoret",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/placeholder.svg?height=400&width=600",
    year: 2024,
  },
  {
    id: 4,
    name: "COFFEE",
    client: "some company",
    description: "The home page of a coffee restaurant ",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/placeholder.svg?height=400&width=600",
    year: 2024,
  },
];

export default function Home() {
  return (
    <WorkContainer id="work">
      <WorkContent>
        <SectionHeader>SELECT WORK</SectionHeader>
        <SectionHeadingBg>select projects</SectionHeadingBg>
        <DoubleImages projects={[selected_projects[0], selected_projects[1]]} />
        <DoubleImages
          projects={[selected_projects[2], selected_projects[3]]}
          reversed={true}
        />
      </WorkContent>
    </WorkContainer>
  );
}

const WorkContainer = styled.section`
  min-height: 70vh;
  width: 100%;
  position: relative;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const WorkContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 4rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 7rem;
  margin-bottom: 8rem;
`;

const SectionHeadingBg = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-family: "Cursive", sans-serif;
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.05);
  opacity: 0.5;
  line-height: 1.1;
  z-index: 0;
`;
