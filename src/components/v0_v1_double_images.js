"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";

const DoubleImages = ({ projects, reversed = false }) => {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const animationRef = useRef(null);

  const [first, second] = projects;

  // Set initial position based on reversed prop
  const initialXPercent = reversed ? 0 : 100;

  // Track current animation state
  const animationState = useRef({
    xPercent: initialXPercent,
    currentXPercent: initialXPercent,
    speed: 0.2,
  });

  // Set initial widths on component mount
  useEffect(() => {
    if (firstImageRef.current && secondImageRef.current) {
      const { currentXPercent } = animationState.current;

      // Apply initial widths based on reversed prop
      firstImageRef.current.style.width = `${66.66 - currentXPercent * 0.33}%`;
      secondImageRef.current.style.width = `${33.33 + currentXPercent * 0.33}%`;
    }

    // Clean up animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reversed]);

  function handleMouseMove(event) {
    const { clientX } = event;
    // Calculate mouse position as percentage of window width
    animationState.current.xPercent = (clientX / window.innerWidth) * 100;

    // Start animation if not already running
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }

  function animate() {
    const { xPercent, currentXPercent, speed } = animationState.current;

    // Calculate new position with easing
    const deltaXPercent = xPercent - currentXPercent;
    const newXPercent = currentXPercent + deltaXPercent * speed;
    animationState.current.currentXPercent = newXPercent;

    // Apply width calculations
    if (firstImageRef.current && secondImageRef.current) {
      firstImageRef.current.style.width = `${66.66 - newXPercent * 0.33}%`;
      secondImageRef.current.style.width = `${33.33 + newXPercent * 0.33}%`;
    }

    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  }

  function handleMouseLeave() {
    // Reset to initial state when mouse leaves
    animationState.current.xPercent = initialXPercent;
  }

  return (
    <DoubleWrapper
      href={first.url}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      reversed={reversed}
    >
      <div ref={firstImageRef} className="image_and_text_container">
        <div className="stretchy_container">
          <img
            src={first.project_image || "/placeholder.svg"}
            alt={first.description}
          />
          <div className="text">
            <h3 className="project_name text_medium">{first.name}</h3>
            <p className="description">{first.description}</p>
            <p className="year text_tiny">{first.year}</p>
          </div>
        </div>
      </div>
      <div ref={secondImageRef} className="image_and_text_container">
        <div className="stretchy_container">
          <img
            src={second.project_image || "/placeholder.svg"}
            alt={second.description}
          />
          <div className="text">
            <h4 className="project_name text_medium">{second.name}</h4>
            <p className="description">{second.description}</p>
            <p className="year text_tiny">{second.year}</p>
            <div className="tech-stack">
              {second.tech_stack.map((tech, index) => (
                <span key={index} className="tech-item">
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
    transition: width 0.1s ease-out; /* Fallback transition for smoother initial state */

    .stretchy_container {
      padding-bottom: 66.66%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .text {
    padding: 1rem;
    position: relative;
    z-index: 1;

    .project_name {
      text-transform: uppercase;
    }

    .description {
      margin: 0;
    }

    .year {
      font-family: inherit;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;

      .tech-item {
        font-size: 0.8rem;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
      }
    }
  }
`;

export default DoubleImages;
