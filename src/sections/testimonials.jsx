import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import OurContainer from "../components/OurContainer.component";
import Section_heading_bg from "../components/section_heading_bg.component";
import Testimonial from "../components/testimonial";
import { testimonials } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDimension } from "../hooks/useDimension";
import Section_header from "../ui/section_header";
import { respond_to } from "../helpers/breakpoints";

const Testimonials = () => {
  const container_ref = useRef(null);
  const [dimension, set_dimension] = useState({
    width: 0,
    height: 0,
  });
  const { scrollYProgress } = useScroll({
    target: container_ref,
    offset: ["start end ", "end start"],
  });

  const { height } = dimension;

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      set_dimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <TestimonialsContainer className="relativ mb-96">
      <OurContainer>
        <div className="spacer"></div>
        <Section_header h2="HEAR FROM MY CLIENTS" />
        <TestimonialsContent
          ref={container_ref}
          className="flex_items gap-[2vw] align_middle align_horizontal"
        >
          <Section_heading_bg
            other_class="section_bg_heading"
            heading="Clients Say"
          />

          {/* desktop view - parallax columns  */}
          <TestimonialColumn
            testimonials={[testimonials[0], testimonials[1], testimonials[2]]}
            y={y1}
          />
          <TestimonialColumn
            testimonials={[testimonials[3], testimonials[4], testimonials[5]]}
            y={y2}
          />
          <TestimonialColumn
            testimonials={[testimonials[6], testimonials[7], testimonials[8]]}
            y={y3}
          />
          <TestimonialColumn
            testimonials={[testimonials[9], testimonials[10], testimonials[11]]}
            y={y4}
          />
        </TestimonialsContent>
        {/* <div className="spacer"></div> */}
      </OurContainer>
    </TestimonialsContainer>
  );
};

function TestimonialColumn({ testimonials, y }) {
  const testimonial_elements = testimonials.map((testimony) => (
    <Testimonial key={testimony.id} {...testimony} />
  ));
  return (
    <ColumnWrapper
      style={{ y }}
      className="testimonial_col flex_item flex-col gap-[2vw]"
    >
      {testimonial_elements}
    </ColumnWrapper>
  );
}

const TestimonialsContainer = styled.section`
  min-height: 90vh;
  width: 100%;

  .spacer {
    height: 50vh;
  }
`;
const TestimonialsContent = styled.div`
  height: 200vh;
  padding-inline: 2vw;
  display: flex;
  gap: 2vw;
  overflow: hidden;
  position: relative;

  .section_bg_heading {
    bottom: 11.5%;
  }
`;

const ColumnWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  position: relative;
  width: 25%;
  min-width: 250px;
  height: 100%;

  &:nth-of-type(1) {
    top: -45%;
  }
  &:nth-of-type(2) {
    top: -95%;
  }
  &:nth-of-type(3) {
    top: -45%;
  }
  &:nth-of-type(4) {
    top: -75%;
  }
`;

export default Testimonials;
