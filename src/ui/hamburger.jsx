import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  position: absolute;
  height: 0.3rem;
  width: 3rem;
  background: ${({ theme }) => theme.colors.black.dark};
  transition: transform 0.3s;

  //this just to separate them initially give some spacing between the bars
  &.line_1 {
    transform: translateY(3px);
  }
  &.line_2 {
    transform: translateY(-3px);
  }
`;

const HamburgerContainer = styled.div`
  gap: 0.8rem;
  margin-left: auto;
  ${({ is_menu_open }) =>
    is_menu_open &&
    `
     .line_1 {
        transform: rotate(45deg) translateY(0) scaleX(1.05);
        }
        .line_2 {
            transform: rotate(-45deg) translateY(0) scaleX(1.05);
            }
            `}
`;

function Hamburger({ is_menu_open, other_class }) {
  // const { is_nav_open } = useNavContext();
  // console.log(is_menu_open);
  return (
    <HamburgerContainer
      className={`flex_items flex_column align_middle ${other_class}`}
      is_menu_open={is_menu_open}
    >
      <Bar className="line_1" />
      <Bar className="line_2" />
    </HamburgerContainer>
  );
}

export default Hamburger;

// transform: rotateZ(45deg) translate(0.7rem, -0.1rem);
// transform: rotateZ(-45deg) translate(0.7rem, -0.1rem);
