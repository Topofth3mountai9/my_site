import React from "react";
import styled from "styled-components";
import OurContainer from "../components/OurContainer.component";
import { statistics } from "../data";
import { respond_to } from "../helpers/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);

let custom_ease = CustomEase.create("", ".87,0,.13,1");

const Stat = ({ stat_text, num }) => {
  return (
    <StatWrapper className="stat_wrapper flex_items flex_column align_middle align_horizontal g_2">
      <h4 className="text_regular">{stat_text}</h4>
      <div className="vertical_line"></div>
      <h2 className="heading_xl actual_stat">{num}</h2>
    </StatWrapper>
  );
};

const Stats = () => {
  const statistic_elements = statistics.map((one_stat) => (
    <Stat key={one_stat.id} {...one_stat} />
  ));

  useGSAP(() => {
    gsap.to(".stat_wrapper", {
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      stagger: 0.3,
      ease: "power3",
      scrollTrigger: {
        trigger: ".stats_content",
        start: "top 85%",
        // end: () => `+=500rem`,
        end: "bottom 20%",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);
  return (
    <StatsContainer>
      <OurContainer>
        <StatsContent className="stats_content">
          {/* <h2>Statistics goes here!</h2> */}
          {statistic_elements}
        </StatsContent>
      </OurContainer>
    </StatsContainer>
  );
};

const StatsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
`;
const StatsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
  //HIDING IT INITIALLY
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
  /* clip-path: ; */
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%); */
  will-change: clip-path;
  ${respond_to()}

  &:nth-child(even) {
    /* background: red; */
    /* flex-direction: column-reverse; */
  }
`;

const StatWrapper = styled.div`
  width: 30rem;
  height: 40rem;
  //hiding it initially
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);

  .vertical_line {
    height: 17rem;
    width: 0.2rem;
    background: ${({ theme }) =>
      theme.colors.brand_primary_light[800]}; //light_primary
  }

  .actual_stat {
    letter-spacing: 0.2rem;
    font-family: ${({ theme }) => theme.typography.fonts.tertiary};
  }

  &:nth-of-type(2) {
    /* background: red; */
    flex-direction: column-reverse;

    @media all and (width <= 422px) {
      flex-direction: column;
    }
  }
`;

export default Stats;
