import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import styled from "styled-components";
// import { cool_menu_data, cool_menu_preview_imgs } from '../../src/data';

//the most important thing is that we need to position the 'links' absolutely hence we need a link wrapper that we'll position absolutely and also add overflow hidden so that we can pass text right through it

//that's why  info name and tag are positioned relatively so that our 'links that will change position when hovered on can be positioned absolutely

let first_p_animation = {
  initial: {
    top: "0%",
  },
  hover: {
    top: "-100%",
  },
  exit: {
    top: "0%",
  },
};

let second_p_animation = {
  initial: {
    top: "100%",
  },
  hover: {
    top: "0%",
  },
  exit: {
    top: "100%",
  },
};

let img_wrapper_animation = {
  initial: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  hover: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 0.1],
    },
  },
  exit: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 0.1],
    },
  },
};

const Cool_hover_effect = ({ menu_data, images }) => {
  const preview_images_wrapper_ref = useRef(null);

  const [hovered_info, set_hovered_info] = useState({
    current_index: null,
    is_hovered_on: false,
  });

  const { current_index, is_hovered_on } = hovered_info;

  useGSAP(() => {
    //functions to move the wrapper
    const move_container_y = gsap.quickTo(
      preview_images_wrapper_ref.current,
      "top",
      {
        duration: 0.2,
        ease: "power3",
      }
    );

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      move_container_y(clientY);
    });
  }, []);

  let menu_item_elements = menu_data.map((one, index) => {
    const { text, id } = one;

    return (
      <MenuItem
        key={id}
        onMouseOver={() =>
          set_hovered_info({
            current_index: index,
            is_hovered_on: true,
          })
        }
        onMouseLeave={() =>
          set_hovered_info({
            current_index: null,
            is_hovered_on: false,
          })
        }
        className="menu_item"
      >
        <div className="info">
          <motion.p
            variants={first_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[0]}
          </motion.p>
          <motion.p
            variants={second_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[0]}
          </motion.p>
        </div>
        <div className="name">
          <motion.p
            variants={first_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[1]}
          </motion.p>
          <motion.p
            variants={second_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[1]}
          </motion.p>
        </div>
        <div className="tag">
          <motion.p
            variants={first_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[2]}
          </motion.p>
          <motion.p
            variants={second_p_animation}
            initial="initial"
            animate={
              index === current_index && is_hovered_on ? "hover" : "exit"
            }
          >
            {text[2]}
          </motion.p>
        </div>
      </MenuItem>
    );
  });

  let preview_img_elements = images.map((image, index) => {
    const { id, image: img } = image;
    return (
      <TwoImagesWrapper
        key={id}
        variants={img_wrapper_animation}
        initial="initial"
        animate={is_hovered_on && current_index === index ? "hover" : "exit"}
      >
        <ImgWrapper key={id} className=" preview_img_1 img_wrapper">
          <img src={img} alt={`image ${index + 1}`} />
        </ImgWrapper>
        <ImgWrapper key={id} className="preview_img_2  img_wrapper">
          <img src={img} alt={`image ${index + 1}`} />
        </ImgWrapper>
      </TwoImagesWrapper>
    );
  });
  return (
    <Wrapper>
      <Menu className="menu">{menu_item_elements}</Menu>
      <div ref={preview_images_wrapper_ref} className="preview_imgs">
        <div
          style={{
            top: `${current_index * -100}%`,
          }}
          className="slider"
        >
          {preview_img_elements}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;

  .preview_imgs {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateY(-80%);
    width: 22.5rem;
    height: 27.5rem;
    height: 33.5rem;
    z-index: 2;
    //to prevent weird cursor  behavior of underlying elements
    pointer-events: none;
    //to hide the rest
    overflow: hidden;

    .slider {
      position: absolute;
      height: 147.5rem;
      width: 90%;
      top: 0;
      transition: all 0s cubic-bezier(0.76, 0, 0.24, 1);
    }

    .img_wrapper:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(20px, 20px);
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  //to center
  margin-block: 20em;

  .info,
  .tag,
  .name {
    position: relative;

    overflow: hidden;
  }

  .info,
  .tag {
    flex: 1;
    //we need to give them a specific height that matches the font-size
    height: 14px;
    font-size: 14px;
  }

  .tag {
    text-align: right;
  }

  .name {
    flex: 4;
    text-align: center;
    //it needs to have a height that matches the font size
    height: 60px;
    font-size: 60px;
  }

  //now the crucial part, we will have the exact same p tag containing the exact same text but positioned 100% away, then when we hover we bring it into view
  .info p:nth-child(2),
  .name p:nth-child(2),
  .tag p:nth-child(2) {
    color: ${({ theme }) => theme.colors.grey.h};
    top: 100%;
  }

  //changing the color of all text when we hover over the menu
  &:hover {
    .info p:nth-child(1),
    .name p:nth-child(1),
    .tag p:nth-child(1) {
      color: rgba(105, 105, 105);
    }
  }
`;

const MenuItem = styled.div`
  padding-inline: 2em;
  display: flex;

  p {
    //the core functionality
    position: absolute;
    top: 0%;
    width: 100%;
    font-family: ${({ theme }) => theme.typography.fonts.accent};
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.grey[0]};
    margin-bottom: 0;
    transition: color 0.25s;
  }
`;

const TwoImagesWrapper = styled(motion.div)`
  height: 27.5rem;
  height: 33.5rem;
  width: 100%;
  position: relative;
`;

const ImgWrapper = styled.div`
  //we will placing the images on top of each other
  position: absolute;

  height: 27.5rem;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  :nth-of-type(2) {
    position: absolute;
    top: 20%;
    left: 20px;
  }
`;

export default Cool_hover_effect;
