import React from "react";
import styled from "styled-components";
import OurContainer from "../components/OurContainer.component";
import ContactForm from "../components/contact_form";
import Section_heading_bg from "../components/section_heading_bg.component";
import Better_contact_form from "../components/better_contact_form";
import Section_header from "../ui/section_header";
import Selenium_contact_form from "../components/selenium_contact_form";

const Contact = () => {
  return (
    <ContactContainer id="contact" className="relative">
      <OurContainer>
        <ContactContent className="mb_96">
          <Section_header h2="Let's work on your next project together" />
          <Section_heading_bg
            heading="CONTACT ME"
            other_class="section_heading"
          />
          {/* <ContactForm /> */}
          {/* <Better_contact_form /> */}
          <Selenium_contact_form />
        </ContactContent>
      </OurContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  min-height: 60vh;
  width: 100%;
`;
const ContactContent = styled.div`
  /* width: 40%; */
  width: 80%;
  margin-inline: auto;
  display: grid;
  place-items: center;

  .section_heading {
    bottom: 5%;
  }
`;

export default Contact;
