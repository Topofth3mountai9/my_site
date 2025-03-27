import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { services_offered } from "../data";
import { respond_to } from "../helpers/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTransform } from "framer-motion";
import { mapper } from "../helpers/progress_mapper";

gsap.registerPlugin(ScrollTrigger);

function ImageAndParagraph({ image, paragraph, label, active, current_index }) {
  return (
    <ImageAndParagraphWrapper active={active} className="w-full h-full">
      <ImgWrapper>
        <img src={image} alt={label} />
      </ImgWrapper>
      <p className="paragraph text_regular">{paragraph}</p>
    </ImageAndParagraphWrapper>
  );
}

/* 
we want to get the scrollY progress and based on that, we show how far we have scrolled on the progress bar while moving between the different services 
We also want to animate the paragraph as soon as it comes into view
*/

const AllServices = () => {
  const [info, set_info] = useState({
    index: 0,
    is_active: false,
  });

  const [current_progress, set_current_progress] = useState(0.0);
  // console.log(current_progress);

  // useEffect(() => {
  //   // console.log(mapper(1, current_progress, 4));
  //   let top = useTransform(current_progress, [0, 1], [0, 4]);
  //   console.log(top);
  // }, [current_progress]);
  // console.log(top);

  // let top = useTransform(current_progress, [0, 1], [0, 3]);

  /* 
0 -> 0
1 -> 3

  */

  useGSAP(() => {
    function move_through_services(progress = 0, set_info) {
      // set_current_progress(progress.toFixed(2));
      let mapped_progress_top = mapper(1, progress, 4);
      // console.log(mapped_progress_top);

      gsap.set(".info_slider", {
        translateY: `${mapped_progress_top * -450}px`,
        ease: "power3.inOut",
      });
      set_info({
        index: mapped_progress_top,
      });
    }

    //syncing the progress bar
    let tl = gsap.timeline({});
    tl.to(".progress", {
      scaleY: 1,
      scrollTrigger: {
        trigger: ".services_container",
        start: "top 10%",
        end: window.innerHeight * 4,
        pin: true,
        scrub: 2,
        // markers: true,
        onUpdate: (self) => move_through_services(self.progress, set_info),
        // onUpdate: (self) => set_current_progress(self.progress.toFixed(2)),
        // onUpdate: (self, event) => {
        //   console.log(self.progress);
        //   console.log(event);
        //   let top = useTransform(self.progress, [0, 1], [0, 3]);
        //   console.log(top);
        // },
      },
    });

    move_through_services(0, set_info);

    /* the current index is a number between 0 and 3 */ 0, 1, 2, 3;
    /* I'd like to map it based on the scrollYProgress */ 0, 1;
  }, [current_progress]);

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

  const all_images_and_info_elements = services_offered.map(
    (service, index) => (
      <ImageAndParagraph
        current_index={info.index}
        key={service.id}
        active={index === info.index}
        {...service}
      />
    )
  );
  return (
    <AllServicesWrapper className="all_services_wrapper relative">
      <div className="col service_labels">{service_label_elements}</div>
      <div className="col more_info relative">
        <div
          style={
            {
              // top: `${current_index * -100}%`,
              // transform: `translateY(${current_index * -450}px)`,
              // transform: `translateY(${current_index * -450}px)`,
            }
          }
          className="info_slider"
        >
          {all_images_and_info_elements}
        </div>
      </div>
      <div className="progress_bar">
        <div className="progress"></div>
      </div>

      <div className="index">
        <span className="current_count">{current_index + 1}</span>
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
    top: 12%;
    width: 60%;
    height: 450px;

    //hiding the rest
    /* overflow: hidden; */
    pointer-events: none;

    .info_slider {
      position: absolute;
      width: 100%;
      /* height: 100%; */
      /* height: 450px; */
      height: 2000px;
      /* overflow-y: hidden; */
      transform: translateY(0);
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
    background: ${({ theme }) => theme.colors.grey.d};
    color: ${({ theme }) => theme.colors.black.dark};

    span {
      font-family: ${({ theme }) => theme.typography.fonts.accent};
      font-size: ${({ theme }) => theme.typography.text.tiny};
      width: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      // color: ${({ theme }) => theme.colors.black.dark};
    }

    .separator {
      position: relative;
      top: -1px;
      width: 20px;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  ${respond_to("768")} {
    flex-direction: column;

    .more_info {
      width: 80%;
      margin-inline: auto;
    }

    .progress_bar {
      top: -90%;
      height: 40rem;
      /* width: 50rem; */
      transform: rotate(-90deg);
    }

    .index {
      top: -45%;
      bottom: unset;
    }
  }
  ${respond_to("640")} {
    .more_info {
      width: 100%;
    }
  }
`;

const ServiceLabel = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.colors.grey.f};
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  /* cursor: pointer; */
  pointer-events: none;

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
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  /* height: 100%; */
  height: 450px;
  /* opacity: 0; */
  visibility: hidden;
  /* display: none; */
  /* opacity: 1; */
  /* visibility: visible; */
  /* display: none; */

  ${({ active }) =>
    active &&
    css`
      /* opacity: 1; */
      visibility: visible;
      /* display: block; */
    `}
  /* top: 0; */

  .paragraph {
    color: ${({ theme }) => theme.colors.grey[0]};
    line-height: 1.8;
  }

  ${respond_to("768")} {
    flex-direction: row;
    align-items: flex-start;
    .paragraph {
      margin-left: 2rem;
      width: 160%;
    }
  }
`;

const ImgWrapper = styled.div`
  /* width: 25rem; */
  width: 100%;
  height: 25rem;
  /* height: 450px; */
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 90% 100%, 50% 100%, 0 100%, 0 0);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* aspect-ratio: 16/9; */
  }
`;

export default AllServices;
