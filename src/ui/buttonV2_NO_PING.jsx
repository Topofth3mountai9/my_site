import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";

const slider = {
  initial: {
    top: 0,
    scale: 1,
  },
  enter: {
    top: "-100%",
    // scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 0.1],
    },
  },
  exit: {
    top: "-200%",
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
    transitionEnd: {
      top: "0%",
    },
  },
};

const sizes = {
  small: css`
    height: 2rem /* 32px */;
    min-height: 2rem /* 32px */;
    padding-left: 0.75rem /* 12px */;
    padding-right: 0.75rem /* 12px */;
    font-size: 0.875rem;
  `,

  medium: css`
    height: 3rem /* 48px */;
    min-height: 3rem /* 48px */;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    font-size: 0.875rem;
  `,

  large: css`
    height: 4rem /* 64px */;
    min-height: 4rem /* 64px */;
    padding-left: 1.5rem /* 24px */;
    padding-right: 1.5rem /* 24px */;
    font-size: 1.125rem;
  `,
};

const variations = {
  dark: css`
    color: ${theme.colors.grey[0]};
    background: ${theme.colors.black[700]};
    box-shadow: 2.4px 2.4px 0.5px ${theme.colors.grey[50]};
    border-top: 1px solid ${theme.colors.grey[0]};
    border-left: 1px solid ${theme.colors.grey[0]};
    transition: all 0.3s ease-in;

    /* &:hover,
    &:active {
      transform: scale(0.98);
      box-shadow: none;
      color: ${theme.colors.black[700]};
      background: ${theme.colors.grey[0]};
    } */
  `,
  primary: css`
    color: ${theme.colors.grey[0]};
    background: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.grey[0]};
      color: ${theme.colors.primary};
    }
  `,
};

const shapes = {
  circle: css``,
};

const widths = {
  normal: css`
    width: unset;
  `,
  full: css`
    width: 100%;
  `,
};

//helper height dict
const heights = {
  small: "2rem",
  medium: "3rem",
  large: "4rem",
};

function Button({ children, other_class, ...props }) {
  const [is_hovered, set_is_hovered] = useState(false);

  return (
    <OverallWrapper
      size={props.size}
      {...props}
      className={`overall_wrapper relative ${other_class}`}
    >
      <Slider
        size={props.size}
        variants={slider}
        initial={"initial"}
        animate={is_hovered ? "enter" : "exit"}
        onMouseEnter={() => set_is_hovered(true)}
        onMouseLeave={() => set_is_hovered(false)}
        className="slider absolute"
      >
        <StyledButton {...props} className={`btn_container`}>
          <Ping />
          {children}
        </StyledButton>
        <StyledButton {...props} className={`btn_container`}>
          <Ping />
          {children}
        </StyledButton>
        <StyledButton {...props} className={`btn_container`}>
          <Ping />
          {children}
        </StyledButton>
      </Slider>
    </OverallWrapper>
  );
}

const StyledButton = styled.button`
  /* display: inline-block; */
  height: ${(props) => heights[props.size]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 1.2em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  width: 100%;
  /* ${(props) => props.width}
  width: unset */

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  .btn {
    border-radius: 0 !important;
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  //circle shape
  ${(props) =>
    props.size === "small" &&
    props.shape === "circle" &&
    css`
      height: 2rem /* 32px */;
      width: 2rem /* 32px */;
      border-radius: 9999px;
      padding: 0px;
    `}

  ${(props) =>
    props.size === "medium" &&
    props.shape === "circle" &&
    css`
      height: 3rem /* 48px */;
      width: 3rem /* 48px */;
      border-radius: 9999px;
      padding: 0px;
    `}

  ${(props) =>
    props.size === "large" &&
    props.shape === "circle" &&
    css`
      height: 4rem /* 64px */;
      width: 4rem /* 64px */;
      border-radius: 9999px;
      padding: 0px;
    `}

  //square shape
  ${(props) =>
    props.size === "small" &&
    props.shape === "square" &&
    css`
      height: 2rem /* 32px */;
      width: 2rem /* 32px */;

      padding: 0px;
    `}

  ${(props) =>
    props.size === "medium" &&
    props.shape === "square" &&
    css`
      height: 3rem /* 48px */;
      width: 3rem /* 48px */;

      padding: 0px;
    `}

  ${(props) =>
    props.size === "large" &&
    props.shape === "square" &&
    css`
      height: 6rem /* 64px */;
      width: 6rem /* 64px */;

      padding: 0px;
    `}
`;

Button.defaultProps = {
  variation: "dark",
  size: "medium",
  // width: normal,
  //   shape: 'square',
};

const Ping = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: ${theme.colors.primary};
  margin-right: 1rem;
`;

const OverallWrapper = styled.div`
  position: relative;
  height: ${(props) => heights[props.size]};
  ${(props) => {
    console.log(props);
  }};
  width: 20rem;
  overflow: hidden;

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  .btn_container:nth-child(2) {
    background: ${({ theme }) => theme.colors.grey[0]};
    color: ${({ theme }) => theme.colors.primary};
  }
  .btn_container:nth-child(3) {
    color: ${theme.colors.grey[0]};
    background: ${theme.colors.black[700]};
    box-shadow: 2.4px 2.4px 64.5px ${theme.colors.grey[50]};
    border-top: 1px solid ${theme.colors.grey[0]};
    border-left: 1px solid ${theme.colors.grey[0]};
  }

  ${(props) =>
    props.responsive &&
    css`
      @media screen and (width <= 640px) {
        width: 100%;
      }
    `}
`;

const Slider = styled(motion.div)`
  position: absolute;
  /* height: ${(props) => `${heights[props.size] * 3}rem`}; */
  height: ${(props) => {
    let num_regex = /\d+/g;
    let num_found = heights[props.size].match(num_regex);
    // console.log(num_found);
    // console.log(heights[props.size]);
    // console.log(`${num_found * 3}rem`);
    return `${num_found * 3}rem`;
  }};
  width: 100%;
  top: 0;
`;

export default Button;
