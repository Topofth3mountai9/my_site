import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";
import styled from "styled-components";
import { respond_to } from "../helpers/breakpoints";
import AppLayout from "./app_layout.component";

const PreloaderAndAppLayout = () => {
  //to animate the counter
  function animate(digit, duration, delay = 1) {
    // calculates the height a digit needs to move by getting the single digit  height and multiplying it by the num of digits in the div
    const num_height = digit.querySelector(".num").clientHeight;

    const total_distance =
      (digit.querySelectorAll(".num").length - 1) * num_height;
    gsap.to(digit, {
      y: -total_distance,
      duration,
      delay,
      ease: "power2.inOut",
    });
  }

  useGSAP(() => {
    const digit_3 = document.querySelector(".digit_3");
    const digit_2 = document.querySelector(".digit_2");
    const digit_1 = document.querySelector(".digit_1");
    //initially hiding the whole app
    //populating the third digit of our counter with 0 to 9
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        digit_3.appendChild(div);
      }
    }

    //adding a final 0 at the end
    const final_zero = document.createElement("div");
    final_zero.className = "num";
    final_zero.textContent = "0";
    digit_3.appendChild(final_zero);

    animate(digit_3, 5);
    animate(digit_2, 6);
    animate(digit_1, 2, 5);

    //next we animate the progress bar
    gsap.to(".progress_bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7,
    });

    //we animate it to 100% and fade it out over another 2 seconds
    gsap.to(".progress_bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
      //once the progress bar animation is complete, we hide the preloader
      onComplete: () => {
        gsap.set(".pre_loader", {
          display: "none",
        });
      },
    });
    //we then animate the hero images clip-path to reveal them one by one with a slight stagger
    gsap.to(".hero_images img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      // clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 9,
      onComplete: () => {
        const outro_tl = gsap.timeline();
        // gsap.set(
        //   ".hero_images",
        //   {
        //     display: "none",
        //   },
        //   "+=1"
        // );
        outro_tl.set(".hero_wrapper", {
          display: "none",
          duration: 0.5,
          ease: "power3.inOut",
        });
        outro_tl.set(
          ".app_layout_wrapper",
          {
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        );

        outro_tl.to(
          ".app_layout_wrapper",
          {
            marginTop: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0
        );
      },
    });
  }, []);

  return (
    <>
      <StyledHero className="hero_wrapper">
        <StyledPreloader className="pre_loader">
          <p>Loading</p>

          <StyledCounter className="counter">
            <div className="digit_1">
              {/* only 0 and 1 */}
              <div className="num">0</div>
              <div className="num offset">1</div>
            </div>
            <div className="digit_2">
              {/* 0 to 9 then another 0 */}
              <div className="num ">0</div>
              <div className="num offset">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>

              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="digit_3">
              {/* 0 to 9 but we'll add more after each increment of 10 using js */}
              <div className="num">0</div>
              <div className="num ">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>

              <div className="num">9</div>
            </div>
            <div className="digit_4">%</div>
          </StyledCounter>

          <div className="progress_bar"></div>
        </StyledPreloader>
        <div className="hero_images">
          <img src="/images/projects/architecture.png" alt="" />
          <img src="/images/projects/coffee.png" alt="" />
          <img src="/images/projects/comforta.png" alt="" />
          <img src="/images/projects/school.png" alt="" />
        </div>
      </StyledHero>

      <AppLayout />
    </>
  );
};

const StyledHero = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 100vh;

  //the images have position absolute and cover the entire width and height of the viewport and are  also hidden initially via a clip-path
  img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }

  .hero_images {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }

  ${respond_to("900")} {
    .pre_loader {
      padding: 1em;
      gap: 0.5em;
      p {
        font-size: 40px;
        line-height: 64px;
      }
    }
    .counter {
      font-size: 70px;
    }

    .offset {
      position: relative;
      right: -5px;
    }
  }
`;

const StyledPreloader = styled.div`
  //twice the viewport's width
  width: 200%;
  height: 100%;
  //position fixed to the top right of the screen
  padding: 2em;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.5em;
  overflow: hidden;
  z-index: 2;

  p {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.fonts.tertiary};
    font-size: ${({ theme }) => theme.typography.heading.one};
    // line-height: 60px;
  }

  .progress_bar {
    position: relative;
    top: -15px;
    //initially not showing
    width: 10%;
    height: 4px;
    background: ${({ theme }) => theme.colors.black.dark};
  }
`;

const StyledCounter = styled.div`
  height: 100px;
  display: flex;
  font-family: ${({ theme }) => theme.typography.fonts.tertiary};
  // font-size: ${({ theme }) => theme.typography.heading.title};
  font-size: 100px;
  font-weight: 400;
  line-height: 150px;
  //to ensure the digits fit within the designated area
  clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);

  //each digit is positioned relatively with the first and second digit slightly offset
  .digit_1,
  .digit_2,
  .digit_3,
  .digit_4 {
    position: relative;
    top: -15px;
  }

  .offset {
    position: relative;
    right: -7.5px;
  }
`;

export default PreloaderAndAppLayout;
