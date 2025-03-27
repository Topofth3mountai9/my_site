import React from "react";
import styled from "styled-components";
import OurContainer from "../components/OurContainer.component";
import DoubleImages from "../components/double_images";
import { selected_projects } from "../data";
import Section_heading_bg from "../components/section_heading_bg.component";
import Section_header from "../ui/section_header";

const Work = () => {
  return (
    <WorkContainer id="work" className="relative mt-.2 mb-32">
      <OurContainer>
        <WorkContent>
          <Section_header h2="SELECT WORK" />
          <Section_heading_bg heading="select projects" />
          <DoubleImages
            projects={[selected_projects[0], selected_projects[1]]}
          />
          <DoubleImages
            projects={[selected_projects[2], selected_projects[3]]}
            reversed={true}
          />
        </WorkContent>
      </OurContainer>
    </WorkContainer>
  );
};

const WorkContainer = styled.section`
  min-height: 70vh;
  width: 100%;
  position: relative;
  margin-bottom: 8rem;
`;
const WorkContent = styled.div``;

export default Work;
