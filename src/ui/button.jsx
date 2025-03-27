import { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const slider = {
  initial: {
    top: 0,
    scale: 1,
  },
  enter: {
    top: "-100%",
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
    background: ${theme.colors.black.black_300};
    box-shadow: 2.4px 2.4px 0.5px ${theme.colors.grey[50]};
    border-top: 1px solid ${theme.colors.grey[0]};
    border-left: 1px solid ${theme.colors.grey[0]};
    transition: all 0.3s ease-in;
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

const PingDot = styled.span`
  position: relative;
  display: inline-flex;
  border-radius: 9999px;
  height: 0.75rem;
  width: 0.75rem;
  background-color: #10b981; /* green-500 */
  background: ${({ theme }) => theme.colors.brand_primary_light[900]};
`;

const PingAnimation = styled.span`
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  background-color: #34d399; /* green-400 */
  background: ${({ theme }) => theme.colors.brand_primary_light[800]};
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const PingContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 1rem;
`;

const Ping = () => (
  <PingContainer>
    <PingAnimation />
    <PingDot />
  </PingContainer>
);

const StyledButton = styled.button`
  height: ${(props) => heights[props.size] || "3rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 1.2em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  width: 100%;
  font-family: ${theme.typography.fonts.primary};

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

const OverallWrapper = styled.div`
  position: relative;
  height: ${(props) => heights[props.size] || "3rem"};
  width: 20rem;
  overflow: hidden;
  font-family: ${theme.typography.fonts.primary};

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  .btn_container:nth-child(2) {
    background: ${theme.colors.grey[0]};
    color: ${theme.colors.primary};
  }
  .btn_container:nth-child(3) {
    color: ${theme.colors.grey[0]};
    background: ${theme.colors.black.black_300};
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
  height: ${(props) => {
    // Default to medium size if size is undefined
    const size = props.size || "medium";
    // Default height if the size doesn't exist in heights
    const height = heights[size] || "3rem";

    // Safely extract the number
    const num_regex = /\d+/g;
    const matches = height.match(num_regex);
    const num_found = matches ? matches[0] : 3; // Default to 3 if no match

    return `${num_found * 3}rem`;
  }};
  width: 100%;
  top: 0;
`;

function Button({ children, other_class, toPing, ...props }) {
  const [is_hovered, set_is_hovered] = useState(false);

  return (
    <OverallWrapper
      size={props.size}
      {...props}
      className={`overall_wrapper relative ${other_class || ""}`}
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
          {toPing && <Ping />}
          {children}
        </StyledButton>
        <StyledButton {...props} className={`btn_container`}>
          {toPing && <Ping />}
          {children}
        </StyledButton>
        <StyledButton {...props} className={`btn_container`}>
          {toPing && <Ping />}
          {children}
        </StyledButton>
      </Slider>
    </OverallWrapper>
  );
}

Button.defaultProps = {
  variation: "dark",
  size: "medium",
  toPing: false,
};

export default Button;
