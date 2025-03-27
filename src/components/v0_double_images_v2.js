"use client";

import { useRef, useEffect } from "react";

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
    <div
      className="flex mb-16 h-[40vw]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={firstImageRef}
        className="transition-width duration-100 ease-out"
      >
        <div className="relative pb-[66.66%]">
          <img
            src={first.project_image || "/placeholder.svg"}
            alt={first.description}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white/80 w-full">
            <h3 className="text-lg font-medium uppercase">{first.name}</h3>
            <p className="text-sm">{first.description}</p>
            <p className="text-xs mt-1">{first.year}</p>
          </div>
        </div>
      </div>
      <div
        ref={secondImageRef}
        className="transition-width duration-100 ease-out"
      >
        <div className="relative pb-[66.66%]">
          <img
            src={second.project_image || "/placeholder.svg"}
            alt={second.description}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white/80 w-full">
            <h4 className="text-lg font-medium uppercase">{second.name}</h4>
            <p className="text-sm">{second.description}</p>
            <p className="text-xs mt-1">{second.year}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {second.tech_stack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-black/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleImages;
