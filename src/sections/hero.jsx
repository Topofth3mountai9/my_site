import React from "react";
import OurContainer from "../components/OurContainer.component";
import styled from "styled-components";
import Hero_with_figure_reverse from "../ui/hero_with_figure_reverse";
import { social_media_links } from "../data";

const Hero = () => {
  return (
    <Hero_with_figure_reverse
      name={["Some", "gentile"]}
      prof="Web developer"
      about_me="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi eos deleniti, animi natus neque?"
      social_media_links={social_media_links}
      dev_img={"/images/hero/developer.png"}
      years_of_experience={5}
      num_projects_completed={697}
    />

    // <HeroContainer>
    //   <OurContainer>
    //     <Herocontent>
    //       <h2>Hero goes here</h2>
    //     </Herocontent>
    //   </OurContainer>
    // </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  min-height: 90vh;
`;

const Herocontent = styled.div`
  mix-blend-mode: difference;
`;

export default Hero;
