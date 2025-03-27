import { Sofa } from 'lucide-react';
import React from 'react';
import { FaCouch } from 'react-icons/fa6';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-flow: column nowrap; */
  gap: 1rem;

  .logo_text {
    /* margin-top: -1.6rem; */
    letter-spacing: 0.2rem;
    /* font-size: ${({ theme }) => theme.typography.text.xs}; */
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey.e};
    mix-blend-mode: difference;

    /* background: ${({ theme }) =>
      `linear-gradient(to right , ${theme.colors.primary}, ${theme.colors.tertiary}, ${theme.colors.secondary})`};
    background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  /* .logo_text {
      font-weight: 600;
      // margin-left: 2rem;
      font-size: 2.5rem;
      background: linear-gradient(
        to right,
        $primary_color,
        $tertiary_color,
        $secondary_color
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    } */
`;
const ImgWrapper = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Logo({
  color,
  fill,
  logo_text = 'furniture',
  other_class,
  text_size = 'large',
  logo_img_src,
  svg,
}) {
  return (
    <LogoWrapper className={`${other_class}`}>
      <ImgWrapper color={color} fill={fill}>
        {/* <Sofa /> */}
        <img src={logo_img_src} alt="logo image" />
      </ImgWrapper>
      {logo_text && (
        <span
          className={`logo_text ${
            text_size === 'large' ? 'heading_2' : 'text_tiny'
          }`}
        >
          {logo_text}
        </span>
      )}
    </LogoWrapper>
  );
}

export default Logo;
