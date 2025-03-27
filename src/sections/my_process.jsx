import React from 'react';
import OurContainer from '../components/OurContainer.component';
import styled from 'styled-components';
import Steps from '../components/steps.component';
import Section_header from '../ui/section_header';
import Section_heading_bg from '../components/section_heading_bg.component';

function MyProcess() {
  return (
    <MyProcessContainer className="mt-96">
      <OurContainer>
        {/* <Section_header h2="THE PROCESS" /> */}
        {/* <Section_heading_bg heading="HOW I HELP" /> */}
        <ProcessContent>
          <Steps heading="THE PROCESS" />
        </ProcessContent>
      </OurContainer>
    </MyProcessContainer>
  );
}

const MyProcessContainer = styled.section`
  min-height: 100vh;
  width: 100%;
`;
const ProcessContent = styled.div``;

export default MyProcess;
