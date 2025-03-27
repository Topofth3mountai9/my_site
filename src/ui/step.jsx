import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { respond_to } from "../helpers/breakpoints";
import { useOnscreen } from "../hooks/useOnScreen";
import gsap from "gsap";

function Step({
  step: action,
  paragraph,
  icon,
  set_current_card_in_view_num,
  index,
  count_container_ref,
  current_card_in_view_num,
}) {
  const ref = useRef(null);

  const is_on_screen = useOnscreen(ref, 0.4);

  useEffect(() => {
    if (is_on_screen) {
      // console.log(is_on_screen);
      set_current_card_in_view_num(index);
      // console.log(index, current_card_in_view_num);
      let target_y = 90 - (index + 1) * 90;
      // console.log(target_y);
      gsap.to(count_container_ref.current, {
        // y: target_y,
        top: `${(index + 1) * -100}%`,
        duration: 0.3,
        ease: "power4.inOut",
        overwrite: true,
      });
    }
  }, [is_on_screen, index]);
  return (
    <StepCardWrapper ref={ref} className="card_wrapper">
      <div className="card_content flex_items flex_column gap-8">
        {icon}
        <div className="step_text">
          <h3 className="action mt-8">{action}</h3>
          <p className="paragraph">{paragraph}</p>
        </div>
      </div>
    </StepCardWrapper>
  );
}

const StepCardWrapper = styled.div`
  //we give each card a fixed size and center it using transform origin and margins to animate that later and position the card properly while its moving in a circular motion
  display: grid;
  justify-content: center;
  /* place-items: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  margin-left: -25rem;
  background: ${({ theme }) =>
    `linear-gradient(to right,  ${theme.colors.primary}, ${theme.colors.black.dark})`};

  height: 55rem;
  width: 30rem;
  padding-inline: 3rem;
  border-radius: ${({ theme }) => theme.border_radius.sm};
  will-change: transform;

  .card_content {
    width: 100%;
    /* height: 6rem; */
    margin-top: 3rem;
  }

  .action {
    font-size: ${({ theme }) => theme.typography.text.medium};
    font-family: ${({ theme }) => theme.typography.fonts.accent};
    /* font-weight: 800; */
    /* color: ${({ theme }) => theme.colors.grey[50]}; */
    color: ${({ theme }) => theme.colors.light_primary};
    /* text-align: left; */
    line-height: 1.3;
    font-weight: 900;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.grey.d};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  //ensuring the first card is in view
  &:nth-of-type(1) {
    // transform-origin: 50% 50% 0px;
    transform: translate(823.018px, 107.648px) rotate(14.9036deg);
  }

  ${respond_to("900")} {
    height: 50rem;
  }
`;

export default Step;
