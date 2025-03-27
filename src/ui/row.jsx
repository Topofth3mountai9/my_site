import styled, { css } from "styled-components";
import { respond_to } from "../helpers/breakpoints";

const Row = styled.div`
  display: flex;
  position: relative;
  // padding-inline-start: 10%;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.align === "center_horizontal" &&
    css`
      justify-content: center;
      // width: 100%;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    &:has(button) {
    align-items: center;
  }

  ${respond_to("640")} {
    // display: block;
    flex-direction: column;

    align-items: flex-start;
    // padding-inline-start: 10%;
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
