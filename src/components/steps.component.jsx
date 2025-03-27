import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { steps_info } from '../data';
import Step from '../ui/step';
import { respond_to } from '../helpers/breakpoints';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Steps({ heading = 'STEPS' }) {
  // const card_ref = useRef(null);
  // const is_on_screen = useOnscreen(card_ref, 0.5);
  const [num_of_cards, set_num_of_cards] = useState(0);
  const [current_card_in_view_num, set_current_card_in_view_num] = useState(0);
  //grabbing a reference to the sticky section
  const sticky_section_ref = useRef(null);
  //grabbing a reference to all the cards
  const cards_ref = useRef(null);
  //selecting all the cards
  // const all_cards = gsap.utils.toArray('.card_wrapper');

  // const total_cards = all_cards.length;
  // console.log(total_cards);
  //grabbing a reference to the counter_container
  const count_container_ref = useRef(null);

  //calculating the total height(how long the section will be pinned as we scroll till the animation ends)
  const sticky_section_height = window.innerHeight * 7;

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on('scroll', ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });

  //   gsap.ticker.lagSmoothing(0);
  // }, []);

  useGSAP(
    () => {
      // //selecting all the cards
      const all_cards = gsap.utils.toArray('.card_wrapper');
      // console.log(all_cards);
      const total_cards = all_cards.length;
      // console.log(total_cards);
      function get_radius() {
        //radius is larger for mobile screens and larger for desktops
        return window.innerWidth < 900
          ? window.innerWidth * 7.5
          : window.innerWidth * 2.5;
      }
      if (total_cards) set_num_of_cards(total_cards);

      //how wide the circular arc is
      const arc_angle = Math.PI * 0.35; //setting it to 40% of a full circle
      //where the arc begins
      const start_angle = Math.PI / 2 - arc_angle / 2; //centering it at the top of the circle

      function position_cards(progress = 0) {
        //we calculate the total travel distance which depends on the num of cards we have and the scroll progress
        const radius = get_radius();
        const total_travel_distance = 1 + total_cards / 7.5;
        //adjusting the scroll progress to map it ito the arc's total length
        const adjusted_progress = (progress * total_travel_distance - 1) * 0.75;
        //   console.log(adjusted_progress);
        //we then loop through each card and calculate its position along the arc
        all_cards.forEach((card, i) => {
          const normalized_progress = (total_cards - 1 - i) / total_cards;
          //the angle for each card is determined by adding its normalized progress based on its index to the adjusted scroll progress
          const card_progress = normalized_progress + adjusted_progress;
          const angle = start_angle + arc_angle * card_progress;

          //using trigonometry we define the x and y positions of each card on the circle
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          // console.log(x, y);
          //the rotation is calculated to ensure each card is correctly oriented along the arc
          const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

          //Finally, we use gsap's set method to update each card's position dynamically
          gsap.set(card, {
            x,
            y: -y + radius,
            rotation: -rotation,
            transformOrigin: 'center center',
          });
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sticky_section_ref.current,
          start: 'top 10%',
          end: () => `+=${total_cards * 100}%`,
          // end: `+${sticky_section_height}px`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => position_cards(self.progress),
          // markers: true,
        },
      });
      // ScrollTrigger.create({
      //   trigger: sticky_section_ref.current,
      //   start: 'top 10%',
      //   end: `+${sticky_section_height}px`,
      //   pin: true,
      //   pinSpacing: true,
      //   onUpdate: (self) => {
      //     position_cards(self.progress);
      //   },
      // });
      position_cards(0);

      // all_cards.forEach((card, index) => {
      //   if (index === current_card_in_view_num) {
      //     console.log(index, current_card_in_view_num);
      //     console.log(index === current_card_in_view_num);
      //     let target_y = 150 - current_card_in_view_num * 150;
      //     console.log(target_y);
      //     gsap.to(count_container_ref.current, {
      //       y: target_y,
      //       duration: 0.3,
      //       ease: 'power4.inOut',
      //       overwrite: true,
      //     });
      //   }
      // });
    },
    // { scope: sticky_section_ref, dependencies: [current_card_in_view_num] }
    { scope: sticky_section_ref, dependencies: [] }
  );
  //total num of cards

  // useInView()
  const card_step_elements = steps_info.map((action, index) => (
    <Step
      key={action.id}
      {...action}
      set_current_card_in_view_num={set_current_card_in_view_num}
      index={index}
      count_container_ref={count_container_ref}
      current_card_in_view_num={current_card_in_view_num}
    />
  ));

  const num_elements = steps_info.map((_, i) => <h2 key={i}>0{i + 1}</h2>);
  return (
    <StepsWrapper className="bg_black " ref={sticky_section_ref}>
      <Counter>
        <div className="counter_title mb-95">
          <h2>{heading}</h2>
        </div>

        <div className="number_count">
          <div ref={count_container_ref} className="count_container">
            {/* {current_card_in_view_num + 1} */}
            {num_elements}
          </div>
        </div>
      </Counter>
      <Cards ref={cards_ref} className="cards">
        {card_step_elements}
      </Cards>
      {/* to push the card fully out of view */}
      <div className="card_empty">
        <p>EMPTY</p>
      </div>
      <div className="card_empty">
        <p>EMPTY</p>
      </div>
    </StepsWrapper>
  );
}

const StepsWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden; //check what this do
  //to account for the fixed navbar
  margin-top: 3rem;

  .card_empty {
    //the helper cards are simply not shown
    opacity: 0;
  }

  ${respond_to('900')} {
    .counter_title {
      height: 30px;
    }

    .number_count {
      top: 0;
      left: -10px;
    }

    .cards {
      top: 27.5%;
    }
  }
`;
const Counter = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 2em; //what's this for?

  .counter_title,
  .number_count {
    position: relative;
    width: 1200px;
    height: 9rem;
    //hiding them initially
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
  }

  .counter_title h2 {
    /* margin-left: -2rem; */
    /* font-family: ${({ theme }) => theme.typography.fonts.tertiary}; */
  }

  .number_count {
    top: 30px;
  }

  .count_container {
    //the numbers are hidden initially setting the y value using transform
    position: relative;
    transform: translateY(9rem);
    /* transform: translateY(0px); */
    top: -100%;
    will-change: transform;
  }

  h2 {
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.colors.grey[50]};
    text-transform: uppercase;
    font-weight: 300;
    /* font-size: ${({ theme }) => theme.typography.heading.xl}; */
    font-size: 9rem;
    line-height: 1;
    letter-spacing: -0.04em;
    will-change: transform;
  }

  .dont_show {
    display: none;
  }
`;
const Cards = styled.div`
  //positioning the cards absolutely in the center with a wide with to allow the circular effect
  //we do this because we will be positioning the cards absolutely while they move around in a circle we cant use flex to position the cards
  position: absolute;
  /* top: 25%; */
  /* top: 0%; */
  /* left: 50%; */
  transform: translate(-50%, -50%);
  width: 150vw;
  height: 60rem;
  will-change: transform;
`;

export default Steps;
