import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Logo from "../ui/logo";
import Hamburger from "../ui/hamburger";
import OurContainer from "../components/OurContainer.component";
import { useMenuContext } from "../context/MenuContext";
import { respond_to } from "../helpers/breakpoints";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import gsap from "gsap/all";
import { social_media_links } from "../data";
import { useState } from "react";
import { useEffect } from "react";

const split_text_into_spans = (selector) => {
  let elements = document.querySelectorAll(selector);
  // console.log(elements);
  elements.forEach((element) => {
    // console.log(element);
    let text = element.innerText;
    let split_text = text
      .split("")
      .map(function (char) {
        return `<span>${char === " " ? "&nbsp;nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = split_text;
  });
};

const NavBar = () => {
  const { is_menu_open, toggle_menu } = useMenuContext();
  const [is_animating, set_is_animating] = useState(false);

  //grabbing the menu toggle button
  const menu_toggle_ref = useRef(null);
  // console.log(menu_toggle_ref);
  //grabbing the full screen menu
  const navigation_ref = useRef(null);

  const nav_links_ref = useRef(null);

  const social_media_link_elements = social_media_links.map((link) => {
    const { link_text, id, url } = link;
    return (
      <p key={id}>
        <a href={url}>{link_text}</a>
      </p>
    );
  });
  gsap.registerPlugin(CustomEase);
  useGSAP(
    () => {
      //only run animations if not animating
      if (is_animating) return;
      split_text_into_spans(".header h2");
      //grabbing the individual links inside the menu
      const all_nav_links = document.querySelector(".nav_links");
      // const all_links_ref = gsap.utils.toArray(nav_links_ref.current.children);
      const all_links_ref = gsap.utils.toArray(all_nav_links.children);
      // console.log(all_links_ref);
      //grabbing the social links
      const all_social_links_ref = gsap.utils.toArray(".socials p");
      CustomEase.create(
        "hop",
        "M0,0 C0.354,0 0.464,0.133 0.498, 0.502 0.532, 0.872 0.651,1,1,1"
      );
      //setting animating flG TO TRUE AT THHE START
      set_is_animating(true);

      if (is_menu_open) {
        //we animate the full menu nav from hidden to show using the clip path property
        gsap.to(".navigation", {
          duration: 0,
          css: { display: "flex" },
          delay: -0.3,
        });

        const tl = gsap.timeline({
          onComplete: () => {
            //setting is_animating to false after all animations are complete
            set_is_animating(false);
          },
        });

        tl.to(".navigation", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "hop",
          duration: 1.5,
          //once the animation begins we enable pointer events so that it can be interactive
          onStart: () => {
            navigation_ref.current.style.pointerEvents = "all";
          },
        });

        //after a short delay we animate the links and social text making them slide up into view and fading in smoothly
        tl.to(
          ".our_link",
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            // delay: 0.85,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.85"
        );

        tl.to(
          ".socials p",
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            // delay: 0.85,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        );
        tl.to(
          ".socials p a",
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            // delay: 0.85,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        );

        //we also reveal the video background
        tl.to(
          ".video_wrapper",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "hop",
            duration: 1.5,
            // delay: 0.5,
          },
          "-=1.5"
        );

        //we finally reveal the header text, with each span rotating into view and scaling up
        tl.to(
          ".header h2 span",
          {
            rotateY: 0,
            stagger: 0.05,
            // delay: 0.75,
            duration: 1.5,
            ease: "power4.Out",
          },
          "-=0.85"
        );

        gsap.to(
          ".header h2 span",
          {
            y: 0,
            scale: 1,
            stagger: 0.05,
            // delay: 0.5,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=2"
        );
      } else {
        //creating a timeline for the closing animations
        const tl = gsap.timeline({
          onComplete: () => {
            set_is_animating(false);
          },
        });
        //we hide the navigation by setting its clip path back to its original state and put back the pointer events none
        //we also need to completely hide the navigation using display: none
        tl.to(".navigation", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "hop",
          duration: 1.5,
          onComplete: () => {
            if (navigation_ref.current) {
              navigation_ref.current.style.pointerEvents = "none";
            }
            gsap.set(".navigation", {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              css: { display: "none" },
            });
          },
        });

        //we then reset the links, social text, the video wrapper and the header back to their original position ready to be animated the next time the menu is opened
        gsap.set(".our_link", { y: 30, opacity: 0 });
        gsap.set(".socials p", { y: 30, opacity: 0 });
        gsap.set(".video_wrapper", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(".header h2 span", {
          y: 500,
          rotateY: 90,
          scale: 0.75,
        });
      }
    },
    // { scope: [], dependencies: [is_menu_open] }
    [is_menu_open]
  );

  return (
    <NavBarContainerHelper>
      <OurContainer other_class="container">
        <NenuWrapper>
          <Logo
            logo_img_src={`/logo.png`}
            logo_text="Me"
            other_class={`logo`}
          />
          <MenuButtonToggle
            ref={menu_toggle_ref}
            onClick={() => {
              !is_animating && toggle_menu();
              // set_is_animating(true);
            }}
            is_menu_open={is_menu_open}
            className="menu_toggle flex_item align_middl align_horizontal"
          >
            <MenuToggleIcon className="menu_toggle_icon flex_items align_middle align_horizontal">
              <Hamburger is_menu_open={is_menu_open} other_class="hamburger" />
            </MenuToggleIcon>
            <div className="menu_text">
              <p>Menu</p>
            </div>
          </MenuButtonToggle>

          {/* this is the menu */}
          <div ref={navigation_ref} className="navigation">
            <div className="col col_1">
              <Logo
                logo_img_src={`/logo.png`}
                logo_text="Me"
                other_class={`logo`}
              />
              <nav ref={nav_links_ref} className="nav_links">
                <li onClick={toggle_menu} className="our_link">
                  <a href="#home" className="">
                    Home
                  </a>
                </li>
                <li onClick={toggle_menu} className="our_link">
                  <a href="#about_me" className="">
                    About
                  </a>
                </li>
                <li onClick={toggle_menu} className="our_link">
                  <a href="#services" className="">
                    Services
                  </a>
                </li>
                <li onClick={toggle_menu} className="our_link">
                  <a href="#work" className="">
                    Work
                  </a>
                </li>
                <li onClick={toggle_menu} className="our_link">
                  <a href="#contact" className="">
                    Contact
                  </a>
                </li>
              </nav>
              <div className="video_wrapper">
                <video autoPlay muted loop>
                  <source src="/videos/nav/first-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col col_2">
              <div className="socials">
                <div className="sub_col">
                  <p>Company</p>
                  <p>9 quao Androe Rockfield</p>
                  <p>690001 Ontario</p>
                  <p>Canada</p>
                  <br />
                  <p>contact@bettersolutions.ru</p>
                  <p>job@bettersolutions.co</p>
                </div>
                <div className="sub_col">
                  {/* <p>instagram</p>
                  <p>Linkedin</p>
                  <p>twitter</p>
                  <p>facebook</p> */}
                  {social_media_link_elements}
                </div>
              </div>
              <div className="header">
                <h2>DAN.</h2>
              </div>
            </div>
          </div>
        </NenuWrapper>
      </OurContainer>
    </NavBarContainerHelper>
  );
};

const NavBarContainerHelper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NenuWrapper = styled.div`
  height: 10rem;
  width: 100%;
  position: relative;
  //the logo is positioned absolutely in the top left corner with a large font
  .logo {
    position: fixed;
    top: 2em;
    left: 2em;
    height: 60px;
    display: flex;
    align-items: center;
  }

  /* .menu_toggle {
    
  } */
  //the full screen menu
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    background: ${({ theme }) => theme.colors.black.light};
    pointer-events: none;
    transform-style: preserve-3d;
    perspective: 1000px;
    //hiding it initially so that we can animate it later
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    z-index: 1;
  }

  .col {
    flex: 1;
    position: relative;
    height: 100%;
    padding: 10em 2em 2em 2em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }

  .col_2 {
    flex: 2;
  }
  //links are styled with large bold text
  .our_link {
    position: relative;
    //hiding the links initially to be animated in later
    opacity: 0;
    transform: translateY(30px);
    cursor: pointer;
  }

  .our_link a {
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: ${({ theme }) => theme.typography.heading.two};
    font-weight: 400;
    letter-spacing: 0.3rem;
    line-height: 1.7;
    /* cursor: pointer; */
  }

  .video_wrapper {
    width: 100%;
    aspect-ratio: 16/9;
    /* background: #1d1d1d; */
    background: ${({ theme }) => theme.colors.black[600]};
    overflow: hidden;
    padding: 2em;
    //hiding it initially to be animated later
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .socials {
    width: 50%;
    display: flex;
    gap: 2em;
  }

  .socials .sub_col {
    flex: 1;
  }
  //each p is positioned off screen by translating the y value and also hidden using opacity
  .socials .sub_col p a {
    position: relative;
    color: ${({ theme }) => theme.colors.grey[300]};
    transform: translateY(30px);
    opacity: 0;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.fonts.accent};
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 500;
    cursor: pointer;
  }
  .socials .sub_col p {
    position: relative;
    color: ${({ theme }) => theme.colors.grey[400]};
    transform: translateY(30px);
    opacity: 0;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.fonts.accent};
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 500;
    cursor: pointer;
  }

  .header {
    h2 {
      color: ${({ theme }) => theme.colors.grey[50]};
      text-transform: uppercase;
      /* font-size: ${({ theme }) => theme.typography.heading.biggest}; */
      font-size: 25vw;
      /* font-size: ${({ theme }) => theme.typography.heading.xxl}; */
      font-family: ${({ theme }) => theme.typography.fonts.accent};
      line-height: 1;
      font-weight: 900;
      letter-spacing: -3.5px;
      /* height: 40rem; */
      //each letter will be animated individually by splitting the header into spans
      span {
        position: relative;
        display: inline-block;
        margin-right: 0.4rem;
        transform: scale(0.75) translateY(50rem) rotateY(90deg);
        transform-origin: bottom;
      }

      ${respond_to("830")} {
        /* font-size: ${({ theme }) => theme.typography.heading.xl}; */
      }
      ${respond_to("700")} {
        font-size: ${({ theme }) => theme.typography.heading.xxl};
      }
      ${respond_to("485")} {
        font-size: ${({ theme }) => theme.typography.heading.xl};
      }
      ${respond_to("640")} {
        /* font-size: ${({ theme }) => theme.typography.heading.xl}; */
      }
    }
  }

  ${respond_to("900")} {
    .col_2 {
      padding: 10em 2em 2em 0em;
    }

    .col_1 {
      flex: 2;
      align-items: flex-start;
      padding: 10em 1em 2em 2em;
    }

    .video_wrapper {
      padding: 0.4em;
    }

    .socials {
      width: 100%;
      flex-direction: column;
      gap: 8em;
    }
  }
`;

const MenuButtonToggle = styled.div`
  //we place the menu_toggle button in the top right corner, giving a pill like shape, with a smooth transition for when it collapses or expands
  position: fixed;
  top: 2em;
  right: 2em;
  width: 120px;
  height: 60px;
  background: ${({ theme }) => theme.colors.grey.h};
  border-radius: ${({ theme }) => theme.border_radius.pill};
  transition: width 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  transform-origin: right;
  cursor: pointer;

  z-index: 2; //ensure it is above everything else
  .menu_text {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.grey[50]};
    transition: left 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 1;

    p {
      text-transform: uppercase;
      font-weight: 500;
      font-size: ${({ theme }) => theme.typography.text.xs};
      margin: 0;
      padding: 0;
    }
  }
  ${({ is_menu_open }) =>
    is_menu_open &&
    css`
      width: 60px;
      .menu_text {
        opacity: 0;
      }
      .menu_toggle_icon {
        /* clip-path: circle(50% at 50% 50%); */
        clip-path: circle(35% at 50% 50%);
        transform: scale(1.125);
      }
    `}

  ${({ is_menu_open }) =>
    !is_menu_open &&
    css`
      .hamburger {
        opacity: 0;
      }
    `}

  &:hover {
    .menu_text {
      left: 20px;
    }
    //as we hover over the menu, the circle grows larger using the clippath property
    .menu_toggle_icon {
      clip-path: circle(35% at 50% 50%);
    }

    .hamburger {
      opacity: 1;
    }
  }
`;

const MenuToggleIcon = styled.div`
  //in here we have an icon that starts as a small circle
  position: absolute;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  clip-path: circle(10% at 50% 50%);
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 10;
  overflow: hidden;

  .hamburger {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    /* opacity: 0; */
  }
`;

export default NavBar;
