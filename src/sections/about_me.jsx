import React, { useState } from "react";
import OurContainer from "../components/OurContainer.component";
import styled, { css } from "styled-components";
import { about_me_info } from "../data";
import Button from "../ui/button";
import Section_heading_bg from "../components/section_heading_bg.component";
import { respond_to } from "../helpers/breakpoints";
import { Check } from "lucide-react";
import { theme } from "../styles/theme";
import Section_header from "../ui/section_header";

const Card = ({ data }) => {
  const [has_copied, set_has_copied] = useState(false);
  const {
    id,
    label,
    image,
    original_grid_span,
    heading = "",
    paragraph = "",
    icon = "",
    email_address = "",
    button = {},
    background_svg = null,
  } = data;

  function handle_copy() {
    navigator.clipboard.writeText(email_address);
    set_has_copied(true);

    //after like 2seconds we set it back to false so that it can be copied again
    setTimeout(() => {
      set_has_copied(false);
    }, 2000);
  }

  let background_svg_style = background_svg
    ? { background: background_svg }
    : {};
  return (
    <CardWrapper
      original_grid_span={original_grid_span}
      className="flex_items "
    >
      <ImgWrapper
        style={background_svg ? { background: background_svg } : {}}
        className="h-fit sm:h-[276px]"
      >
        {!background_svg && <img src={image} alt={label} />}
      </ImgWrapper>
      {heading && paragraph && (
        <TextWrapper className="px-28 md:px-12">
          <h3 className="heading">{heading}</h3>
          <p className="paragraph">{paragraph}</p>
        </TextWrapper>
      )}
      {Object.keys(button).length > 0 && (
        <ButtonLinkWrapper href="#contact">
          <ButtonWrapper className="w-full px-28 md:px-12">
            <Button block={true} toPing>
              {button.button_text}
            </Button>
          </ButtonWrapper>
        </ButtonLinkWrapper>
      )}
      {icon && email_address && (
        <ContactMeWrapper className="px-28 md:px-12" onClick={handle_copy}>
          <h4 className="text_small mb-4">{heading}</h4>
          <div className="copy_icon_and_email flex_items gap-6">
            {has_copied ? <Check color={theme.colors.primary} /> : icon}
            {email_address}
          </div>
        </ContactMeWrapper>
      )}
    </CardWrapper>
  );
};

const About_me = () => {
  const about_me_card_elements = about_me_info.map((one) => (
    <Card key={one.id} data={one} />
  ));
  return (
    <AboutMeContainer id="about_me" className="mt-80 mb-96 relative">
      <OurContainer>
        <AboutMeContentContainer className="">
          <Section_header h2="ABOUT ME" />
          <Section_heading_bg
            heading="About Me"
            other_class="section_heading"
          />
          <AboutMeContent className="relative stuff_about_me grid">
            {about_me_card_elements}
          </AboutMeContent>
        </AboutMeContentContainer>
      </OurContainer>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.section`
  min-height: 90vh;
  width: 100%;
`;

const AboutMeContentContainer = styled.div`
  .section_heading {
    bottom: -8%;
  }
`;
const AboutMeContent = styled.div`
  width: 80%;
  margin-inline: auto;
  //6 rows and 3 columns
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;

  ${respond_to("768")} {
    /* grid-template-columns: 1fr; */
    grid-template-columns: 1fr 1fr;
  }
  ${respond_to("640")} {
    /* grid-template-columns: 1fr; */
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.black[600]};
  padding-block-end: 2rem;
  color: ${({ theme }) => theme.colors.grey[0]};
  border-radius: ${({ theme }) => theme.border_radius.md};

  ${({ original_grid_span }) => css`
    grid-column: span ${original_grid_span.col} / span ${original_grid_span.col};
    grid-row: span ${original_grid_span.row} / span ${original_grid_span.row};
  `}

  ${respond_to(768)} {
    grid-column: span 1;
    width: 90%;
    margin-inline: auto;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 25rem;
  min-height: 25rem;
  border-top-left-radius: ${({ theme }) => theme.border_radius.md};
  border-top-right-radius: ${({ theme }) => theme.border_radius.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: ${({ theme }) => theme.border_radius.md};
    border-top-right-radius: ${({ theme }) => theme.border_radius.md};
  }

  ${respond_to("768")} {
    height: 27.6rem;
  }
`;

const TextWrapper = styled.div`
  padding-top: 1.5rem;
  padding-inline: 3rem;
  .heading {
    margin-bottom: 1.5rem;
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.grey.e};
  }
`;

const ButtonLinkWrapper = styled.a``;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  padding-block-end: 2rem;
  padding-inline: 3rem;
`;

const ContactMeWrapper = styled.div`
  padding-block-end: 2rem;
  padding-inline: 3rem;
  cursor: pointer;
`;

export default About_me;
