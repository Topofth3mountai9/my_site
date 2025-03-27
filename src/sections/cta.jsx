import React from 'react';
import OurContainer from '../components/OurContainer.component';
import styled from 'styled-components';
// import Button from '../ui/button';

import Button from '../ui/button';

function CTA() {
  return (
    <CtaContainer>
      <OurContainer>
        <CtaContent className="cta_content">
          <CtaCard className="cta_card">
            <h4>Let's Talk</h4>
            <h2 className="cta_text heading_biggest">
              Let's Work on <br /> your next project <br /> together
            </h2>
            <Button size="large">Contact me</Button>
          </CtaCard>
        </CtaContent>
      </OurContainer>
    </CtaContainer>
  );
}

const CtaContainer = styled.section`
  min-height: 60vh;
  width: 100%;
`;
const CtaContent = styled.div`
  /* display: grid; */
  /* place-items: center; */
  padding-block: 4rem;
  padding-inline: 3rem;
`;

const CtaCard = styled.div`
  width: 90%;

  margin-inline: auto;
  height: 60rem;
  padding-block: 3rem;
  background: ${({ theme }) => theme.colors.grey.h};
  color: ${({ theme }) => theme.colors.grey[50]};
  display: grid;
  place-items: center;
  text-align: center;
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 90% 100%, 50% 100%, 0 100%, 0 0);

  h4 {
    letter-spacing: 0.2rem;
    font-size: ${({ theme }) => theme.typography.text.tiny};
    text-transform: uppercase;
    font-weight: 600;
  }

  .cta_text {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.fonts.tertiary};
    font-size: ${({ theme }) => theme.typography.heading.biggest};
    margin-block: 2rem;
  }
`;

export default CTA;
