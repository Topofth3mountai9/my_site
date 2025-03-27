import React from 'react';
import styled, { css } from 'styled-components';

const backgrounds = {
  bg_white: css`
    color: ${({ theme }) => theme.colors.black[700]};
  `,
  bg_black: css`
    color: ${({ theme }) => theme.colors.grey.white_text};
  `,
  bg_dark_light: css`
    color: ${({ theme }) => theme.colors.grey.white_text};
  `,
  bg_metallic: css`
    color: ${({ theme }) => theme.colors.grey.white_text};
  `,
};

function Section_header({ h2, current_bg = 'bg_black', other_class }) {
  // console.log(current_bg);
  // let color_style =
  //   current_bg === 'bg_black' || 'bg_dark_light' || 'bg_metallic'
  //     ? { color: '#fdfdfd' }
  //     : { color: '#020202' };

  // console.log(color_style);

  return (
    <Wrapper>
      <StyledHeader
        className={`heading_title ${other_class}`}
        current_bg={current_bg}
      >
        {h2}
      </StyledHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  margin-block-end: 8rem;

  /* h2 {
    /* color: ${({ theme }) => theme.colors.grey[100]}; 
    text-transform: uppercase;
    font-weight: 700;
  } */
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.xl};
  /* font-family: ${({ theme }) => theme.typography.fonts.tertiary}; */
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 7rem;
  ${(props) => backgrounds[props.current_bg]}
`;

StyledHeader.defaultProps = {
  current_bg: 'bg_black',
};

export default Section_header;
