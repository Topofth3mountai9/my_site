import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const DoubleImages = ({ projects, reversed = false }) => {
  // console.log(reversed);
  //in order to make the images scale when we hover, we need to extract the mouse position,
  //we essentially need to figure out where the mouse is in relation to our two images

  const first_image_ref = useRef(null);
  const second_image_ref = useRef(null);
  const animation_ref = useRef(null);

  const [first, second] = projects;

  //SET INITIAL POSITION BASED ON REVERSED PROP
  const initial_x_percent = reversed ? 0 : 100;

  //track current animation state
  const animation_state = useRef({
    x_percent: initial_x_percent,
    current_x_percent: initial_x_percent,
    speed: 0.2,
  });

  // console.log(first);
  // let x_percent = !reversed ? 100 : 0;
  // // let x_percent = 0;
  // // console.log(x_percent);
  // let current_x_percent = !reversed ? 100 : 0;
  // // let current_x_percent = 0;
  // let speed = 0.2;
  // let request_animation_frame_id = null;

  //setting initial widths on component mount
  useEffect(() => {
    if (first_image_ref.current && second_image_ref.current) {
      const { current_x_percent } = animation_state.current;

      //applying initial widths based on reversed prop
      first_image_ref.current.style.width = `${
        66.66 - current_x_percent * 0.33
      }%`;
      second_image_ref.current.style.width = `${
        33.33 + current_x_percent * 0.33
      }%`;
    }

    //clean up animatioon frame on mount
    return () => {
      if (animation_ref.current) {
        cancelAnimationFrame(animation_ref.current);
      }
    };
  }, [reversed]);

  function manage_mouse_move(event) {
    const { clientX } = event;
    //making the mouse position as a percentage relative to the window, depending on the mouse position on the x-axis
    animation_state.current.x_percent = (clientX / window.innerWidth) * 100;
    // console.log(x_percent);

    //start animation if not already running
    if (!animation_ref.current) {
      animation_ref.current = requestAnimationFrame(animate);
    }
  }

  function animate() {
    const { x_percent, current_x_percent, speed } = animation_state.current;

    //calculate new position with easing
    const delta_x_percent = x_percent - current_x_percent;

    const new_x_percent = current_x_percent + delta_x_percent * speed;
    animation_state.current.current_x_percent = new_x_percent;

    //applying width calculations
    if (first_image_ref.current && second_image_ref.current) {
      first_image_ref.current.style.width = `${66.66 - new_x_percent * 0.33}%`;
      second_image_ref.current.style.width = `${33.33 + new_x_percent * 0.33}%`;
    }

    //continue animmation
    animation_ref.current = requestAnimationFrame(animate);

    //scaling the images appropriately
    //for the first image we begin at 66% width then subtract a certain value based on the position of the mouse
    // first_image_ref.current.style.width =
    // 66.66 - current_x_percent * 0.33 + '%';
    //for the second image, we start at 33% width then add a certain value based on the mouse position
    // second_image_ref.current.style.width =
    // 33.33 + current_x_percent * 0.33 + '%';

    //if the easing is done, we cancel the animation frame
    // if (Math.round(current_x_percent) == Math.round(x_percent)) {
    //   cancelAnimationFrame(request_animation_frame_id);
    //   request_animation_frame_id = null;
    // } else {
    //   requestAnimationFrame(animate);
    // }
    // requestAnimationFrame(animate);
  }

  function handle_mouse_leave() {
    // animation_state.current.x_percent = initial_x_percent;
  }

  return (
    <DoubleWrapper
      href={first.url}
      onMouseMove={(event) => manage_mouse_move(event)}
      onMouseLeave={handle_mouse_leave}
      reversed={reversed}
    >
      <div ref={first_image_ref} className="image_and_text_container">
        <div className="stretchy_container">
          <img src={first.project_image} alt={first.description} />
          <div className="text">
            <h3 className="project_name text_medium">{first.name}</h3>
            <p className="description">{first.description}</p>
            <p className="year text_tiny">{first.year}</p>
          </div>
        </div>
      </div>
      <div ref={second_image_ref} className="image_and_text_container">
        <div className="stretchy_container">
          <img src={second.project_image} alt={second.description} />
          <div className="text">
            <h4 className="project_name text_medium">{second.name}</h4>
            <p className="description">{second.description}</p>
            <p className="year text_tiny">{second.year}</p>
            {/* <p className="">show the tech stack</p> */}
            <div className="tech_stack">
              {second.tech_stack.map((tech, index) => (
                <span key={index} className="tech_item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DoubleWrapper>
  );
};

const DoubleWrapper = styled.div`
  display: flex;
  height: 40vw;
  margin-block-end: 4rem;

  .image_and_text_container {
    transition: width 0.1s ease-out; //fallback transition for smoother initial state

    //the first image take 2/3rds

    /* &:nth-of-type(1) {
      width: 66.66%;
    }
    //the second image takes 1/3rd
    &:nth-of-type(2) {
      width: 33.33%;
    } */
    //to maintain the aspect ratio
    .stretchy_container {
      padding-bottom: 66.66%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* position: absolute;
        top: 0;
        left: 0; */
      }
    }
  }

  .text {
    padding: 1rem;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.grey[100]};

    .project_name {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.grey.c};
    }

    .description {
      color: ${({ theme }) => theme.colors.grey.e};
      /* margin-block: 0rem; */
      margin: 0;
    }

    .year {
      font-family: ${({ theme }) => theme.typography.fonts.secondary};
      color: ${({ theme }) => theme.colors.grey.f};
    }

    .tech_stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;

      .tech_item {
        font-size: 0.8rem;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
      }
    }
  }

  /* &:nth-child(even) {
    .image_and_text_container {
      &:nth-of-type(1) {
        width: 33.33%;
      }
      &:nth-of-type(2) {
        width: 66.66%;
      }
    }
  } */
`;

export default DoubleImages;
