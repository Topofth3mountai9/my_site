import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { services_offered } from '../data';
import { respond_to } from '../helpers/breakpoints';

function ImageAndParagraph({ image, paragraph, label }) {
  return (
    <ImageAndParagraphWrapper className="w-ful h-ful">
      <ImgWrapper>
        <img src={image} alt={label} />
      </ImgWrapper>
      <p className="paragraph text_regular">{paragraph}</p>
    </ImageAndParagraphWrapper>
  );
}

const AllServices = () => {
  const [info, set_info] = useState({
    index: 0,
    is_active: false,
  });

  const { index: current_index } = info;

  const service_labels = services_offered.map((service) => service.label);

  const service_label_elements = service_labels.map((label, index) => (
    <ServiceLabel
      key={index}
      className="text_large"
      active={info.index === index}
      onClick={() => {
        set_info({
          index,
        });
      }}
    >
      {label}
    </ServiceLabel>
  ));

  const all_images_and_info_elements = services_offered.map((service) => (
    <ImageAndParagraph
      current_index={info.index}
      key={service.id}
      {...service}
    />
  ));
  return (
    <AllServicesWrapper className=" all_services_wrapper relative">
      <div className="col service_labels">{service_label_elements}</div>
      <div className="col more_info relative">
        <div
          style={{
            top: `${current_index * -100}%`,
          }}
          className="info_slider"
        >
          {all_images_and_info_elements}
        </div>
      </div>
      <div className="progress_bar">
        <div className="progress"></div>
      </div>

      <div className="index">
        <span className="current_count">1</span>
        <span className="separator"></span>
        <span className="total_count">4</span>
      </div>
    </AllServicesWrapper>
  );
};

const AllServicesWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10rem;
  width: 100%;
  height: 100%;
  /* border: ${({ theme }) => `1px solid ${theme.colors.grey.h}`}; */

  //each column taking 50%
  //centering each column vertically and horizontally
  .col {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .service_labels {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
  }

  .more_info {
    position: relative;
    width: 60%;
    height: 450px;
    /* overflow: hidden; */
    top: 12%;
    background: maroon;

    .info_slider {
      position: absolute;
      width: 100%;
      height: 100%;

      transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }

  //positioning it in the center absolutely
  .progress_bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.5px;
    height: 80%;
    background: ${({ theme }) => theme.colors.grey.f};
  }
  //an indicator that scales from the top as we scroll
  .progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary}; //light_primary
    transform-origin: top;
    transform: scaleY(0);
    will-change: transform;
  }

  //positioning the counter at the bottom and centering it horizontally
  .index {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    padding: 4px 2px 2px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.grey.light};
    color: ${({ theme }) => theme.colors.grey[0]};

    span {
      font-family: ${({ theme }) => theme.typography.fonts.tertiary};
      font-size: ${({ theme }) => theme.typography.text.xs};
      width: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .separator {
      position: relative;
      top: -1px;
      width: 20px;
      height: 2px;
      background: ${({ theme }) => theme.colors.tertiary};
    }
  }

  ${respond_to('768')} {
    flex-direction: column;
  }
`;

const ServiceLabel = styled.div`
  width: max-content;
  color: ${({ theme }) => theme.colors.grey.f};
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  cursor: pointer;
  transition: color 0.3s;

  /* color:  */
  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.grey[400]};
      color: ${({ theme }) => theme.colors.black[700]};
    `}
`;

const ImageAndParagraphWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  /* top: 0; */

  .paragraph {
    color: ${({ theme }) => theme.colors.grey[0]};
    line-height: 1.8;
  }
`;
//giving th img wrapper a unique clip shape
const ImgWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 25rem;
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 90% 100%, 50% 100%, 0 100%, 0 0);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* aspect-ratio: 16/9; */
  }
`;

export default AllServices;
