import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import gsap, { ScrollTrigger } from "gsap/all";
import CustomEase from "gsap/CustomEase";

import Button from "../ui/button";
import Row from "../ui/row";
import Input_field from "./input_field.component";

import { theme } from "../styles/theme";
import { respond_to } from "../helpers/breakpoints";
import { get_any_input_validation } from "../helpers/get_any_input_validation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

function Selenium_contact_form() {
  const methods = useForm();
  const { handleSubmit } = methods;

  function handle_submit(data) {
    console.log(data);
  }

  const full_name_validation = get_any_input_validation(
    "Full Name",
    "text",
    true
  );

  const email_validation = get_any_input_validation(
    "Email Address",
    "text",
    true
  );

  const message_validation = get_any_input_validation(
    "Your Message",
    "text",
    true
  );

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        // ease: "bounce.in",
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
    });
    tl.to(".horizontal_line span", {
      scaleX: 1,
      scrollTrigger: {
        trigger: ".name_and_email",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 2,
        // markers: true,
        // once: true,
      },
    });
    tl.to(
      ".vertical_line span",
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: ".name_and_email",
          start: "top 90%",
          end: "bottom 70%",
          scrub: 2,
          // markers: true,
          // once: true,
        },
      },
      0
    );
  }, []);

  return (
    <FormProvider {...methods}>
      <ContactFormWrapper onSubmit={handleSubmit(handle_submit)}>
        <div className="name_and_email">
          <Row type="horizontal">
            <div className="horizontal_line top">
              <span></span>
            </div>
            <div className="horizontal_line bottom">
              <span></span>
            </div>
            <Col className="cols cols01">
              <div className="vertical_line">
                <span></span>
              </div>
              <Input_field
                title="Full Name"
                label="Full Name"
                background={theme.colors.unknown_colors.transparent}
                border={false}
                placeholder_text={false}
                other_class="common_input"
                {...full_name_validation}
              />
            </Col>
            <Col className="cols cols02">
              <div class="horizontal_line">
                <span></span>
              </div>
              <div className="email_wrapper">
                <Input_field
                  title="Email Address"
                  label="Email Address"
                  background={theme.colors.unknown_colors.transparent}
                  border={false}
                  placeholder_text={false}
                  other_class="common_input"
                  {...email_validation}
                />
              </div>
            </Col>
          </Row>
        </div>
        <Row type="horizontal" className="rows rows100">
          <div class="horizontal_line bottom">
            <span></span>
          </div>
          <Col className="cols">
            <Input_field
              title="Your Message"
              label="Your Message"
              background={theme.colors.unknown_colors.transparent}
              border={false}
              placeholder_text={false}
              text_area={true}
              other_class="common_input"
              {...message_validation}
            />
          </Col>
          {/* <Row className="rows rows100">
            <div class="r_ln_bh ln_h">
              <span></span>
            </div>
            <StyledCols className="cols">
              <Input_field
                title="Your Message"
                label="Your Message"
                background={theme.colors.unknown_colors.transparent}
                border={false}
                placeholder_text={false}
                text_area={true}
                other_class="common_input"
                {...message_validation}
              />
            </StyledCols>
          </Row> */}
        </Row>
        {/* <Row class="rows rows_btn">
          <StyledCols class="cols">
            <button class="get_go">Send Message</button>
          </StyledCols>
        </Row> */}
        <Row type="horizontal" align="center_horizontal">
          {/* <Form_row center={true}> */}
          <Button
            size="large"
            other_class="send_btn"
            block={false}
            responsive={true}
            toPing
          >
            Send Message{" "}
            <span>
              <ArrowUpRight className="arrow_svg" />
            </span>
          </Button>
          {/* </Form_row> */}
        </Row>
      </ContactFormWrapper>
    </FormProvider>
  );
}

const ContactFormWrapper = styled.form`
  width: 100%;
  .horizontal_line {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 0.052vw;
    // background: ${({ theme }) => theme.colors.grey.e};

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: #515258;
      // background: yellow;
      transform: scaleX(0);
      transform-origin: 50% 50%;
    }
  }

  .vertical_line {
    position: absolute;
    top: 0;
    right: 0;
    margin: auto;
    width: 0.052vw;
    height: 100%;

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background: #515258;
      // background: yellow;
      transform: scaleY(0);
      transform-origin: 0 0;
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

  .send_btn {
    margin-top: 2rem;
  }

  ${respond_to("640")} {
    .vertical_line {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Col = styled.div`
  position: relative;
  width: 50%;
  height: 8.75vw;

  .email_wrapper {
    height: 100%;
    margin-left: 3rem;
  }

  ${respond_to("640")} {
    margin-bottom: 4rem;
    .email_wrapper {
      margin-left: 0;
    }
  }
`;

// const SeleniumFormRow = styled.div`
//   position: relative;
//   display: flex;

//   &.rows100 cols{
// width: 100%;
//   }

//   .r_ln_bh {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     margin: 0;
//     width: 100%;
//     height: 0.052vw;

//     span {
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: #515258;
//       transform: scaleX(0);
//       transform-origin: 50% 50%;
//     }
//   }

//   .r_ln_h{
//     position: absolute;
//   top: 0;
//   right: 0;
//   margin: auto;
//   width: .052vw;
//   height: 100%;

//   span{
//     position: absolute;
//   width: 100%;
//   height: 100%;
//   display: block;
//   background: #515258;
//   transform: scaleY(0);
//   transform-origin: 0 0;
//   }
// }
//   }
// `;

// const StyledCols = styled.div`
// position: relative:
// width: 50%;
// height: 8.75vw;

// &.cols02{
//   padding-left: 1.667vw;

//   &.r_ln_bh{
//     opacity: 0;
//   bottom: auto;
//   top: 0;
//   }
// }
// `;

export default Selenium_contact_form;
