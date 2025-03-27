import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const slider = {
  initial: {
    top: 0,
    scale: 1,
  },
  enter: {
    top: '-200%',
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 0.1],
    },
  },
  exit: {
    top: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};
// const anim = (variants) => {
//   return {
//     initial: 'initial',
//     animate: 'enter',
//     exit: 'exit',
//     variants,
//   };
// };

function Del_btn({ children }) {
  const [is_hovered, set_is_hovered] = useState(false);
  return (
    <OverallWrapper className="overall_wrapper relative">
      <motion.div
        variants={slider}
        initial={'initial'}
        animate={is_hovered ? 'enter' : 'exit'}
        onMouseEnter={() => set_is_hovered(true)}
        onMouseLeave={() => set_is_hovered(false)}
        className="slider absolute"
      >
        <BtnContainer className="btn_container relative">
          <div className="btn_text">{children}</div>
        </BtnContainer>
        <BtnContainer className="btn_container relative">
          <div className="btn_text">{children}</div>
        </BtnContainer>
        <BtnContainer className="btn_container relative">
          <div className="btn_text">{children}</div>
        </BtnContainer>
      </motion.div>
    </OverallWrapper>
  );
}

const OverallWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 20rem;
  overflow: hidden;
  .btn_container:nth-child(2) {
    background: ${({ theme }) => theme.colors.grey[0]};
    color: ${({ theme }) => theme.colors.primary};
  }
  .btn_container:nth-child(3) {
    background: ${({ theme }) => theme.colors.grey[0]};
    color: ${({ theme }) => theme.colors.primary};
  }

  .slider {
    position: absolute;
    height: 8rem;
    width: 100%;
    top: 0;
  }
`;

const BtnContainer = styled.div`
  /* display: inline-block; */
  height: 4rem;
  width: 20rem;
  /* padding: 0.6rem 1.2rem; */
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey[0]};
  display: flex;
  align-items: center;
  justify-content: center;

  .btn_text {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
`;

export default Del_btn;
