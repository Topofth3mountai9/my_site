import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import OurContainer from '../components/OurContainer.component';
import AllServices from '../components/all_services';
import { useScroll, useTransform } from 'framer-motion';
import Section_heading_bg from '../components/section_heading_bg.component';
import Section_header from '../ui/section_header';
import { respond_to } from '../helpers/breakpoints';

const Services = () => {
  // const scroll_ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: scroll_ref,
  //   offset: ['start .1', 'end start'],
  // });
  // console.log(scrollYProgress.current);

  // useEffect(() => {
  //   console.log(scrollYProgress.current);
  // }, [scrollYProgress]);

  // let top = useTransform(scroll);

  return (
    <ServicesContainer
      id="services"
      className="services_container mt-80 mb-96 relative"
    >
      <OurContainer>
        <Section_header h2="SERVICES" other_class="section_header" />
        <Section_heading_bg
          heading="services"
          other_class="section_heading_bg"
        />
        <ServicesContent className="">
          <AllServices />
        </ServicesContent>
      </OurContainer>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  /* margin-block-end: 24rem; */
  .section_heading_bg {
    bottom: 15%;
  }

  .section_header {
    margin-left: 7rem;
  }
`;
const ServicesContent = styled.div`
  display: grid;
  place-items: center;
  width: 80%;
  margin-inline: auto;

  ${respond_to('768')} {
    position: relative;
    top: 10%;
  }
`;

export default Services;
