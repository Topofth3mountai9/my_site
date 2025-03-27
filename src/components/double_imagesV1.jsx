import React, { useRef } from 'react';
import styled from 'styled-components';

const DoubleImages = ({ projects, reversed = false }) => {
  // console.log(reversed);
  //in order to make the images scale when we hover, we need to extract the mouse position,
  //we essentially need to figure out where the mouse is in relation to our two images

  const first_image_ref = useRef(null);
  const second_image_ref = useRef(null);

  const [first, second] = projects;
  // console.log(first);
  let x_percent = !reversed ? 100 : 0;
  // let x_percent = 0;
  // console.log(x_percent);
  let current_x_percent = !reversed ? 100 : 0;
  // let current_x_percent = 0;
  let speed = 0.2;
  let request_animation_frame_id = null;

  function manage_mouse_move(event) {
    const { clientX } = event;
    //making the mouse position as a percentage relative to the window, depending on the mouse position on the x-axis
    x_percent = (clientX / window.innerWidth) * 100;
    // console.log(x_percent);

    if (!request_animation_frame_id) {
      request_animation_frame_id = requestAnimationFrame(animate);
    }
  }

  function animate() {
    const delta_x_percent = x_percent - current_x_percent;
    current_x_percent = current_x_percent + delta_x_percent * speed;

    //scaling the images appropriately
    //for the first image we begin at 66% width then subtract a certain value based on the position of the mouse
    first_image_ref.current.style.width =
      66.66 - current_x_percent * 0.33 + '%';
    //for the second image, we start at 33% width then add a certain value based on the mouse position
    second_image_ref.current.style.width =
      33.33 + current_x_percent * 0.33 + '%';

    //if the easing is done, we cancel the animation frame
    // if (Math.round(current_x_percent) == Math.round(x_percent)) {
    //   cancelAnimationFrame(request_animation_frame_id);
    //   request_animation_frame_id = null;
    // } else {
    //   requestAnimationFrame(animate);
    // }
    requestAnimationFrame(animate);
  }

  return (
    <DoubleWrapper
      href={first.url}
      onMouseMove={(event) => manage_mouse_move(event)}
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
            <p className="">show the tech stack</p>
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
    //the first image take 2/3rds

    &:nth-of-type(1) {
      width: 66.66%;
    }
    //the second image takes 1/3rd
    &:nth-of-type(2) {
      width: 33.33%;
    }
    //to maintain the aspect ratio
    .stretchy_container {
      padding-bottom: 66.66%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .text {
    padding: 1rem;
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
  }

  &:nth-child(even) {
    .image_and_text_container {
      &:nth-of-type(1) {
        width: 33.33%;
      }
      &:nth-of-type(2) {
        width: 66.66%;
      }
    }
  }
`;

export default DoubleImages;
