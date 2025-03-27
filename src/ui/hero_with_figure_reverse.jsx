import React, { useRef } from "react";
import styled from "styled-components";
import Section_heading_bg from "../components/section_heading_bg.component";
import OurContainer from "../components/OurContainer.component";
import { respond_to } from "../helpers/breakpoints";
import Logo from "./logo";
// import { Button } from './buttonV1';
import Del_btn from "./del_btn";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { split_text_into_spans } from "../helpers/split_text_into_spans";
import gsap from "gsap";
import Button from "./button";
// import Button from './button';
// import { Link } from 'react-router-dom';

gsap.registerPlugin(CustomEase);

function Hero_with_figure_reverse({
  name,
  prof,
  about_me,
  social_media_links,
  dev_img,
  years_of_experience,
  num_projects_completed,
}) {
  const prof_ref = useRef(null);
  useGSAP(() => {
    //LET'S SPLIT THE HEADER TEXT INTO SPANS
    // split_text_into_spans(".name div");
    let tl = gsap.timeline();
    //as soon as the timeline begins
    tl.set(".hero_section", {
      opacity: 1,
      duration: 0,
    });

    tl.from(".greeting", {
      xPercent: -10,
    });
    tl.from(".name div", {
      opacity: 0,
      scale: 5,
      ease: "power4.in",
      delay: 0.3,
      stagger: 0.8,
    });
    // tl.to(".name div span", {
    //   top: "0px",
    //   stagger: 0.1,
    //   ease: "power4.out",
    //   delay: 0.3,
    // });

    tl.fromTo(
      ".dev_img",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(-50% -10%, 200% 0%, 100% 100%, 0% 100%)",
        duration: 0.85,
        ease: "power3.inOut",
      },
      "+=.1"
    );

    tl.from(
      prof_ref.current,
      {
        opacity: 0,
        xPercent: -10,
        duration: 0.85,
        ease: "power2.inOut",
      },
      ">"
    );
    tl.from(
      ".about",
      {
        opacity: 0,
        y: 30,
      },
      "+=.8"
    );
    tl.to(
      ".social_media a:nth-child(odd)",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 0.4,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      "+=.3"
    );
    tl.to(
      ".social_media a:nth-child(even)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
        duration: 0.4,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      "+=.3"
    );
    tl.from(
      ".cta_btn",
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
      },
      "+=1"
    );
  }, []);
  const social_media_elements = social_media_links.map((link) => (
    <IconLinkWrapper key={link.id} href={link.url} to={link.url}>
      {link.icon}
    </IconLinkWrapper>
  ));

  const [first_name, last_name] = name;
  return (
    <HeroSection className="hero_section">
      {/* <OurContainer> */}
      <Section_heading_bg heading="Web developer" />
      {/* <div className="logo"></div> */}
      {/* <Logo logo_text="me" logo_img_src={'/logo.png'} /> */}
      <Banner className="banner">
        <div className="developer_info">
          <h3 className="greeting">
            Hello, <span>my name is</span>
          </h3>
          {/* <header className="nam"> */}
          <h1 className="name">
            <div>{first_name} </div>
            <div>{last_name}</div>
          </h1>
          {/* <h1 className="name">
            {first_name}
            {last_name}
          </h1> */}
          {/* </header> */}
          <h3 ref={prof_ref} className="prof">
            I am a<span>{prof}</span>
          </h3>
          <p className="about">{about_me}</p>
          <div className="social_media flex_items">{social_media_elements}</div>
          <div className="cta_btn">
            {/* <div className="row-span-3 btn btn-primary flex_item align_middle">
              somn
            </div> */}
            <Button size="large" toPing>
              LET'S WORK TOGETHER
            </Button>
            {/* <Del_btn>work</Del_btn> */}
            {/* <Button */}
          </div>
        </div>
        <div className="dev_img">
          <div className="dev_img_wrapper">
            <img src={dev_img} alt="my image" />
          </div>
          <div className="dev_experience dev_work">
            <span>{years_of_experience}</span>
            <span>years of experience</span>
          </div>
          <div className="projects_completed dev_work">
            <span>{num_projects_completed}</span>
            <span>Completed projects</span>
          </div>
        </div>
      </Banner>
      {/* </OurContainer> */}
    </HeroSection>
  );
}

const HeroSection = styled.section`
  width: 100%;
  min-height: 80vh;
  position: relative;
  //initially don't show anything
  opacity: 0;
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  .developer_info {
    margin-right: 15rem;
  }

  .greeting {
    font-size: ${({ theme }) => theme.typography.text.tiny};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey[0]};
    letter-spacing: 0.1rem;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .name {
    //hiding it initially to be animated later
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    font-size: ${({ theme }) => theme.typography.heading.xl};
    width: 60rem;
    margin: 4rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.grey[0]};
    text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    /* span {
      color: ${({ theme }) => theme.colors.primary};
    } */
    div {
      color: ${({ theme }) => theme.colors.primary};

      span {
        position: relative;
        //moving them down so that we can animate later
        top: 300px;
      }
    }
  }

  .prof {
    /* font-size: 1.8rem; */
    font-size: ${({ theme }) => theme.typography.text.small};
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey[0]};
    letter-spacing: 0.2rem;
    margin-bottom: 6rem;
    opacity: 1;
    transform: translateX(0%);

    span {
      font-family: ${({ theme }) => theme.typography.fonts.secondary};
      font-size: ${({ theme }) => theme.typography.text.large};

      font-weight: bold;
      text-transform: capitalize;
      margin-left: 1.2rem;
    }
  }

  .about {
    width: 60rem;
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
    font-size: ${({ theme }) => theme.typography.text.medium};
    /* font-size: ${({ theme }) => theme.typography.text.regular}; */
    line-height: 1;
    color: #a9abae;
    margin-bottom: 5rem;
    /* letter-spacing: 0.01rem; */
  }

  .social_media {
    margin-bottom: 5rem;
    display: flex;

    & a:nth-child(odd) {
      //from the bottom
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
      // background: red;
    }

    & a:nth-child(even) {
      //from the top
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
      // background: blue;
    }

    svg {
      color: ${({ theme }) => theme.colors.grey[0]};
      margin-right: 2rem;
      cursor: pointer;
    }
  }

  .dev_img_wrapper {
    width: 60rem;
    height: 60rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2rem 2rem 0 2rem;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .dev_work {
    position: absolute;
    width: 25rem;
    height: 9rem;
    background: ${({ theme }) => theme.colors.black.base};
    font-size: ${({ theme }) => theme.typography.text.tiny};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey[0]};
    /* border: ${({ theme }) => `.2rem solid ${theme.colors.grey[400]}`} ; */
    border: 0.2rem solid #bbb;
    border-radius: ${({ theme }) => theme.border_radius.pill};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }

  .dev_experience {
    bottom: 10rem;
    right: 40rem;
  }

  .projects_completed {
    bottom: 1rem;
    right: -2rem;
  }

  .dev_work span:nth-child(1) {
    font-size: ${({ theme }) => theme.typography.text.large};
    width: 40%;
    text-align: center;
  }

  .dev_work span:nth-child(2) {
    color: ${({ theme }) => theme.colors.primary};
    width: 50%;
  }

  ${respond_to("1500")} {
    .name {
      /* width: 40rem; */
      width: 45rem;
    }
    .about {
      width: 45rem;
    }

    .dev_img_wrapper {
      width: 40rem;
      height: 40rem;
    }

    .dev_work {
      width: 20rem;
      height: 7rem;
      padding: 0 1rem;
    }

    .dev_Work span:nth-child(1) {
      width: 35%;
    }

    .dev_experience {
      bottom: 22rem;
      right: 25rem;
    }

    .projects_completed {
      bottom: 14rem;
      right: -4rem;
    }
  }

  ${respond_to("700")} {
    .dev_img {
      display: none;
    }
  }
  ${respond_to("500")} {
    width: 70%;

    .about {
      width: 30rem;
    }
  }
`;

const IconLinkWrapper = styled.a`
  // clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  // background: red;
`;

export default Hero_with_figure_reverse;
