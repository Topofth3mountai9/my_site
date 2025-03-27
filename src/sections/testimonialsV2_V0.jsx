import React, { useRef } from "react";
import styled from "styled-components";
import OurContainer from "../components/OurContainer.component";
import Section_heading_bg from "../components/section_heading_bg.component";
import Testimonial from "../components/testimonial";
import { testimonials } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDimension } from "../hooks/useDimension";
import Section_header from "../ui/section_header";
import { respond_to } from "../helpers/breakpoints";

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

const Testimonials = () => {
  const container_ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container_ref,
    offset: ["start end ", "end start"],
  });

  const { height } = useDimension();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  return (
    <TestimonialsContainer className="relative mb-96">
      <OurContainer>
        {/* <div className="spacer"></div> */}
        <Section_header h2="HEAR FROM MY CLIENTS" />
        <TestimonialsContent
          ref={container_ref}
          className="flex_items gap-[2vw] align_middle align_horizontal"
        >
          <Section_heading_bg
            other_class="section_bg_heading"
            heading="Clients Say"
          />

          {/* mobile view single column */}
          <MobileColumnWrapper>
            {testimonials.slice(0, 4).map((testimony) => (
              <Testimonial key={testimony.id} {...testimony} />
            ))}
          </MobileColumnWrapper>
          {/* <div className="testimonial_col"></div> */}

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

const TestimonialsContainer = styled.section`
  min-height: 90vh;
  width: 100%;
  position: relative;

  .spacer {
    height: 50vh;
  }
`;
const TestimonialsContent = styled.div`
  height: 200vh;
  padding-inline: 2vw;
  //added
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  overflow: hidden;
  /* background: maroon; */

  .section_bg_heading {
    bottom: 11.5%;
  }

  ${respond_to("1250")} {
    flex-wrap: wrap;
    justify-content: center;
  }

  ${respond_to("600")} {
    height: 120vh;
  }
`;

const MobileColumnWrapper = styled.div`
  width: 80%;
  width: calc(50% - 0.75rem);
  margin-inline: auto;
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: none;
  }

  ${respond_to("768")} {
    display: flex;
    margin-top: -6rem;
  }
`;

const ColumnWrapper = styled(motion.div)`
  display: none;
  /* display: flex; */
  flex-direction: column;

  /* width: 25%; */
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 300px;
  min-width: 250px;

  //removing the big blank space at first when we change the y value
  /* &:nth-of-type(1) {
    top: -45%;
    top: -30%;
  }
  &:nth-of-type(2) {
    top: -95%;
    top: -75%;
  }
  &:nth-of-type(3) {
    top: -45%;
    top: -20%;
  }
  &:nth-of-type(4) {
    top: -75%;
  } */

  &:nth-child(3) {
    position: relative;
    top: -20%;
    /* background: maroon; */
  }

  &:nth-child(4) {
    position: relative;
    top: -40%;
    /* background: blue; */
  }

  &:nth-child(5) {
    position: relative;
    top: -15%;
    /* background: coral; */
  }

  &:nth-child(6) {
    position: relative;
    top: -30%;
    /* background: brown; */
  }

  @media (min-width: 768px) {
    display: flex;
    width: calc(50% - 0.75rem);
  }

  @media (min-width: 1024px) {
    display: flex;
    width: calc(25% - 1.125rem);
  }

  //dont show the columns on mobile view
  ${respond_to("768")} {
    display: none;
  }
`;

export default Testimonials;
