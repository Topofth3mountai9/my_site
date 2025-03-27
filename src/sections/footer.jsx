import React from "react";
import OurContainer from "../components/OurContainer.component";
import styled from "styled-components";
import Row from "../ui/row";
import { footer_messengers } from "../data";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { respond_to } from "../helpers/breakpoints";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const messenger_elements = footer_messengers.map((one) => {
    const { id, icon, text, url } = one;
    return (
      <MessengerWrapper key={id} href={url} className="flex_items gap-4">
        <IconRapper>{icon}</IconRapper>
        <p className="text text_regular">{text}</p>
      </MessengerWrapper>
    );
  });

  useGSAP(() => {
    gsap.to(".bottom_heading span", {
      top: "0%",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".first_col",
        start: "top 30%",
        end: "bottom 60%",
        // scrub: 2,
        // markers: true,
      },
    });
  }, []);
  return (
    <FooterContainer className="mt-96">
      <OurContainer>
        <FooterContent>
          <Info>
            <Row type="horizontal">
              <div className="horizontal_line bottom">
                <span></span>
              </div>
              <Col className="col first_col">
                <h3 className="header  heading_6">Agency</h3>

                <p className="email_address text_medium">info@danwesley.ru</p>
              </Col>
            </Row>
            <Row type="horizontal">
              <div className="horizontal_line bottom">
                <span></span>
              </div>
              <Col className="col second_col">
                <h3 className="header heading_6">Messengers</h3>
                <div className="messengers flex_items">
                  {messenger_elements}
                </div>
              </Col>
            </Row>
          </Info>
          <Bottom className="bottom">
            <p className="bottom_intro text_regular">
              More than 5 years <br /> of succeessful work.
            </p>
            <div className="big_text">
              {/* <div className="company_name"> */}
              <div className="bottom_heading">
                <span>D</span>
                <span>a</span>
                <span>n</span>
                <span>W</span>
                <span>e</span>
                <span>s</span>
                <span>l</span>
                <span>e</span>
                <span>y</span>
              </div>
              {/* </div> */}
            </div>
          </Bottom>
        </FooterContent>
      </OurContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.section`
  min-height: 90vh;
  width: 100%;
  margin-top: 14rem;

  ${respond_to("768")} {
    min-height: 80vh;

    .bottom {
      height: 40vh;
    }
  }
  ${respond_to("450")} {
    min-height: 70vh;

    .bottom {
      height: 35vh;
    }
  }
`;
const FooterContent = styled.div`
  width: 100%;
  // height: 80vh;
`;

const Info = styled.div`
  width: 100%;
  .first_col {
    // height: 14vw;
    height: 20rem;
  }

  .second_col {
    // height: 11vw;
    height: 18rem;
    // display: flex;
    // align-items: center;
  }

  .horizontal_line {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 0.092vw;
    // background: ${({ theme }) => theme.colors.grey.e};

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: #515258;
      // background: yellow;
      // transform: scaleX(0);
      transform-origin: 50% 50%;
    }
  }

  .top {
    top: 0;
    left: 0;
  }
  .bottom {
    bottom: 0;
    left: 0;
  }

  ${respond_to("375")} {
    .second_col {
      height: 40rem;
    }
    .messengers {
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start !important;
    }
  }
`;

const Col = styled.div`
  padding-block: 2rem;
  width: 100%;
  padding-inline: 6rem;
  // height: 14vw;
  background: linear-gradient(180deg, #151519 50.04%, #26262a 100%);

  .header {
    text-align: center;
    color: ${({ theme }) => theme.colors.grey.e};
  }

  .email_address {
    position: relative;
    width: fit-content;
    text-align: start;
    margin-top: 9rem;
    color: ${({ theme }) => theme.colors.grey.f};
    text-decoration: ${({ theme }) => `.1rem solid ${theme.colors.grey.f}`};
    cursor: pointer;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 6px;
      left: 0;
      width: 100%;
      height: 0.092vw;
      background: ${({ theme }) => theme.colors.grey.f};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.grey.e};
    }
  }

  .messengers {
    height: 90%;
    align-items: center;
    justify-content: space-between;
  }
`;

const MessengerWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  .text {
    color: ${({ theme }) => theme.colors.grey.f};
    letter-spacing: 0.1rem;
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;
const IconRapper = styled.div`
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey.f}`};
  height: 4rem;
  width: 4rem;
  display: grid;
  place-items: center;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    fill: ${({ theme }) => theme.colors.grey[50]};
  }
`;

const Bottom = styled.div`
  height: 50vh;
  position: relative;
  padding-inline: 3rem;
  padding-block-start: 3rem;
  .bottom_intro {
    text-align: left;
    max-width: 30%;
    color: ${({ theme }) => theme.colors.grey.e};
  }

  .big_text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 20vw;
    color: rgba(169, 171, 181, 0.2);
  }

  .company_name {
    width: 100%;
    height: 20vw;
  }

  //a specific height that matches the font size
  .bottom_heading {
    position: relative;
    overflow: hidden;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    font: ${({ theme }) =>
      `lighter 20vw/20vw ${theme.typography.fonts.accent}`};
    height: 20vw;
    // margin: 10.729vw 0 0 -3.958vw;
    margin-top: 5rem;
    // background: blue;
    //setting the initial position of each letter
    span {
      position: relative;
      top: -105%;
      will-change: top;
    }
  }

  ${respond_to("375")} {
    height: 40vh;

    .bottom_heading {
      margin-top: -5rem;
    }
  }
`;

export default Footer;
