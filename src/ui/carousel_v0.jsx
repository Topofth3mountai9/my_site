import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OurContainer from "../components/OurContainer.component";

// Assuming these are imported from your project
// import OurContainer from "./our-container";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

// Sample images data (replace with your actual data)
const images = [
  {
    id: 1,
    img: "/placeholder.svg?height=800&width=1200",
    title: "Creative Design",
    description: "Innovative solutions for modern challenges",
  },
  {
    id: 2,
    img: "/placeholder.svg?height=800&width=1200",
    title: "Digital Experience",
    description: "Engaging interfaces that captivate users",
  },
  {
    id: 3,
    img: "/placeholder.svg?height=800&width=1200",
    title: "Brand Strategy",
    description: "Cohesive identity across all touchpoints",
  },
  {
    id: 4,
    img: "/placeholder.svg?height=800&width=1200",
    title: "Web Development",
    description: "Cutting-edge technology for seamless experiences",
  },
];

const CarouselSliderWithVignette = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // "up" or "down"

  // Refs for animation targets
  const mainSliderRef = useRef(null);
  const currentSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const currentVignetteRef = useRef(null);
  const nextVignetteRef = useRef(null);
  const currentTitleRef = useRef(null);
  const nextTitleRef = useRef(null);
  const currentDescRef = useRef(null);
  const nextDescRef = useRef(null);
  const currentCounterRef = useRef(null);
  const nextCounterRef = useRef(null);

  // Calculate next slide index based on direction
  const getNextSlideIndex = (direction) => {
    if (direction === "down") {
      return (currentSlide + 1) % images.length;
    } else {
      return (currentSlide - 1 + images.length) % images.length;
    }
  };

  // Handle wheel events for navigation
  const handleWheel = React.useCallback(
    (event) => {
      event.preventDefault();
      if (isAnimating) return;

      const direction = event.deltaY > 0 ? "down" : "up";
      setDirection(direction);
      setIsAnimating(true);
    },
    [isAnimating]
  );

  // Handle touch events for navigation
  const touchStartY = useRef(0);

  const handleTouchStart = React.useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchMove = React.useCallback(
    (event) => {
      if (isAnimating) return;
      event.preventDefault();

      const touchCurrentY = event.touches[0].clientY;
      const difference = touchStartY.current - touchCurrentY;

      if (Math.abs(difference) > 50) {
        const direction = difference > 0 ? "down" : "up";
        setDirection(direction);
        setIsAnimating(true);
      }
    },
    [isAnimating]
  );

  // Set up event listeners
  useEffect(() => {
    const wheelOptions = { passive: false };
    window.addEventListener("wheel", handleWheel, wheelOptions);
    window.addEventListener("touchstart", handleTouchStart, wheelOptions);
    window.addEventListener("touchmove", handleTouchMove, wheelOptions);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  // Handle manual navigation
  const navigateSlide = (direction) => {
    if (isAnimating) return;
    setDirection(direction);
    setIsAnimating(true);
  };

  // Animation effect
  useEffect(() => {
    if (!direction || !isAnimating) return;

    const nextSlideIndex = getNextSlideIndex(direction);

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(nextSlideIndex);
        setIsAnimating(false);
        setDirection(null);
      },
    });

    const customEase = CustomEase.create("custom", ".87,0,.13,1");

    // Initial setup for next slide elements
    if (nextSlideRef.current && nextVignetteRef.current) {
      // Set initial clip paths based on direction
      gsap.set(nextSlideRef.current, {
        clipPath:
          direction === "down"
            ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });

      // FIXED: Set proper initial clip path for vignette
      gsap.set(nextVignetteRef.current, {
        clipPath:
          direction === "down"
            ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });

      // FIXED: Set initial positions for vignette images
      gsap.set(nextVignetteRef.current.querySelector("img"), {
        y: direction === "down" ? "50%" : "-50%",
      });
    }

    // Set initial positions for text elements
    if (nextTitleRef.current) {
      gsap.set(nextTitleRef.current, { y: direction === "down" ? 50 : -50 });
    }

    if (nextDescRef.current) {
      gsap.set(nextDescRef.current, { y: direction === "down" ? 20 : -20 });
    }

    if (nextCounterRef.current) {
      gsap.set(nextCounterRef.current, { y: direction === "down" ? 18 : -18 });
    }

    // Animate main slide clip path
    if (nextSlideRef.current) {
      tl.to(
        nextSlideRef.current,
        {
          clipPath:
            direction === "down"
              ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    // Animate current slide image scale
    if (currentSlideRef.current) {
      tl.to(
        currentSlideRef.current.querySelector("img"),
        {
          scale: 1.5,
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    // FIXED: Animate vignette clip paths with correct values
    if (nextVignetteRef.current) {
      tl.to(
        nextVignetteRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    // Animate vignette images
    if (currentVignetteRef.current) {
      tl.to(
        currentVignetteRef.current.querySelector("img"),
        {
          y: direction === "down" ? "50%" : "-50%",
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    if (nextVignetteRef.current) {
      tl.to(
        nextVignetteRef.current.querySelector("img"),
        {
          y: "0%",
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    // Animate text elements
    if (currentTitleRef.current && nextTitleRef.current) {
      tl.to(
        currentTitleRef.current,
        {
          y: direction === "down" ? -50 : 50,
          duration: 1.25,
          ease: customEase,
        },
        0
      );

      tl.to(
        nextTitleRef.current,
        {
          y: 0,
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    if (currentDescRef.current && nextDescRef.current) {
      tl.to(
        currentDescRef.current,
        {
          y: direction === "down" ? -20 : 20,
          duration: 1.25,
          ease: customEase,
        },
        0
      );

      tl.to(
        nextDescRef.current,
        {
          y: 0,
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    if (currentCounterRef.current && nextCounterRef.current) {
      tl.to(
        currentCounterRef.current,
        {
          y: direction === "down" ? -18 : 18,
          duration: 1.25,
          ease: customEase,
        },
        0
      );

      tl.to(
        nextCounterRef.current,
        {
          y: 0,
          duration: 1.25,
          ease: customEase,
        },
        0
      );
    }

    // Play the timeline
    tl.play();
  }, [direction, isAnimating, currentSlide]);

  // Get current and next slide data
  const currentSlideData = images[currentSlide];
  const nextSlideData = direction ? images[getNextSlideIndex(direction)] : null;

  return (
    <CarouselWrapper>
      <OurContainer>
        <CarouselContent>
          {/* Main slider container */}
          <FullscreenImageSlidesWrapper ref={mainSliderRef} className="slider">
            {/* Current slide */}
            <StyledSlide ref={currentSlideRef} className="slide current-slide">
              <FullScreenImageWrapper>
                <img
                  src={currentSlideData.img || "/placeholder.svg"}
                  alt={`Slide ${currentSlideData.id}`}
                />
              </FullScreenImageWrapper>
            </StyledSlide>

            {/* Next slide (only rendered during animation) */}
            {direction && nextSlideData && (
              <StyledSlide ref={nextSlideRef} className="slide next-slide">
                <FullScreenImageWrapper>
                  <img
                    src={nextSlideData.img || "/placeholder.svg"}
                    alt={`Slide ${nextSlideData.id}`}
                  />
                </FullScreenImageWrapper>
              </StyledSlide>
            )}

            {/* Vignette container */}
            <VignetteContainer className="vignette-container">
              {/* Current vignette */}
              <div
                ref={currentVignetteRef}
                className="vignette-img-wrapper current-vignette"
              >
                <img src={currentSlideData.img || "/placeholder.svg"} alt="" />
              </div>

              {/* Next vignette (only rendered during animation) */}
              {direction && nextSlideData && (
                <div
                  ref={nextVignetteRef}
                  className="vignette-img-wrapper next-vignette"
                >
                  <img src={nextSlideData.img || "/placeholder.svg"} alt="" />
                </div>
              )}
            </VignetteContainer>

            {/* Slide text content */}
            <div className="slide-text">
              {/* Title */}
              <div className="slide-title">
                <h2 ref={currentTitleRef} className="heading current-title">
                  {currentSlideData.title}
                </h2>

                {direction && nextSlideData && (
                  <h2 ref={nextTitleRef} className="heading next-title">
                    {nextSlideData.title}
                  </h2>
                )}
              </div>

              {/* Description */}
              <div className="slide-description text-small">
                <p ref={currentDescRef} className="current-description">
                  {currentSlideData.description}
                </p>

                {direction && nextSlideData && (
                  <p ref={nextDescRef} className="next-description">
                    {nextSlideData.description}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation buttons */}
            <NavigationButtons>
              <button
                onClick={() => navigateSlide("up")}
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateSlide("down")}
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </NavigationButtons>
          </FullscreenImageSlidesWrapper>

          {/* Footer with counter */}
          <StyledFooter>
            <p className="all-projects text-medium">All projects</p>
            <div className="slider-counter">
              {/* Current count */}
              <div className="current-count">
                <p ref={currentCounterRef} className="current-counter">
                  {currentSlide + 1}
                </p>

                {direction && nextSlideData && (
                  <p ref={nextCounterRef} className="next-counter">
                    {getNextSlideIndex(direction) + 1}
                  </p>
                )}
              </div>
              <p>/</p>
              <p>{images.length}</p>
            </div>
          </StyledFooter>
        </CarouselContent>
      </OurContainer>
    </CarouselWrapper>
  );
};

// Styled components
const CarouselWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  color: #fff;
  background-color: #121212;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CarouselContent = styled.div`
  width: 100%;
  height: 100vh;
`;

const FullscreenImageSlidesWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slide-text {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 2;

    .slide-title {
      position: relative;
      width: 50rem;
      height: 50px;
      margin-bottom: 0.75em;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      overflow: hidden;

      h2 {
        position: absolute;
        font-size: 48px;
        font-weight: 400;
        line-height: 1;
        transform: translateY(0px);
        will-change: transform;
        white-space: nowrap;
      }
    }

    .slide-description {
      position: relative;
      width: 50rem;
      height: 20px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      overflow: hidden;

      p {
        position: absolute;
        font-size: 18px;
        font-weight: lighter;
        line-height: 1;
        transform: translateY(0px);
        will-change: transform;
      }
    }
  }

  @media (max-width: 768px) {
    .vignette-container {
      width: 65%;
    }

    .slide-text {
      top: 60%;
      left: 60%;
    }
  }

  @media (max-width: 700px) {
    .vignette-container {
      width: 60%;
    }

    .slide-text {
      width: 80%;

      .slide-title,
      .slide-description {
        width: 100%;
      }
    }
  }
`;

const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FullScreenImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  will-change: clip-path;

  // Overlay
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.125);
  }
`;

const VignetteContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 50%;
  z-index: 2;

  .vignette-img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    will-change: clip-path;
    overflow: hidden;
  }

  .next-vignette {
    z-index: 1;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  display: flex;
  gap: 1rem;
  z-index: 10;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    bottom: 3rem;
    right: 3rem;
  }
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;

  p {
    font-family: inherit;
    color: #fff;
    opacity: 0.4;
  }

  .slider-counter {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .current-count {
    position: relative;
    height: 18px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 2rem;
    overflow: hidden;
    display: grid;
    place-items: center;

    p {
      position: absolute;
      transform: translateY(0px);
      font-size: 16px;
      will-change: transform;
      opacity: 1;
    }
  }
`;

export default CarouselSliderWithVignette;
