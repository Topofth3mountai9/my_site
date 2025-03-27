"use client";

import { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useDimension } from "./hooks/use-dimension";

// Using all 12 testimonials from your data
const testimonials = [
  {
    id: 1,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 2,
    date: "2023-12-04",
    testimony:
      "I loved the experience so much and the team was always there for me.Would recommend it to anyone.",
    name: "Ali",
    image: "/images/testimonials/dave.jpg",
    occupation: "some student",
    rating: 5.0,
  },
  {
    id: 3,
    date: "2024-09-09",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure ipsum enim magni voluptatem! Sed molestiae velit vel neque in eveniet. Quaerat, quidem accusantium.",
    name: "Charlie Conrad",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 4,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 5,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 6,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 7,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 8,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 9,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 10,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 11,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
  {
    id: 12,
    date: "2024-15-09",
    testimony:
      "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
    name: "Inderpaul Birdi",
    image: "/images/testimonials/dave.jpg",
    occupation: "CEO some company",
    rating: 4.8,
  },
];

function Rating({ rating }) {
  return (
    <RatingWrapper>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < Math.floor(rating)}>
          <svg viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </StarIcon>
      ))}
      <RatingText>{rating.toFixed(1)}</RatingText>
    </RatingWrapper>
  );
}

function TestimonialCard({ testimony, name, image, occupation, rating }) {
  return (
    <CardWrapper>
      <Rating rating={rating} />
      <TestimonyText>{testimony}</TestimonyText>
      <ProfileWrapper>
        <ImageWrapper>
          <img src={image || "/placeholder.svg"} alt={name} />
        </ImageWrapper>
        <NameOccupationWrapper>
          <NameText>{name}</NameText>
          <OccupationText>{occupation}</OccupationText>
        </NameOccupationWrapper>
      </ProfileWrapper>
      <QuoteIconWrapper>
        <Quote size={48} />
      </QuoteIconWrapper>
    </CardWrapper>
  );
}

function TestimonialColumn({ testimonials, y }) {
  return (
    <ColumnWrapper style={{ y }}>
      {testimonials.map((testimony) => (
        <TestimonialCard key={testimony.id} {...testimony} />
      ))}
    </ColumnWrapper>
  );
}

function TestimonialsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { height } = useDimension();

  // Create different speeds for each column with more pronounced differences
  // Using different multipliers for smoother and more distinct parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.5]);

  // Split testimonials into 4 columns, 3 testimonials per column
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 9);
  const column4 = testimonials.slice(9, 12);

  return (
    <SectionWrapper>
      <Container>
        <HeaderWrapper>
          <SectionTitle>HEAR FROM MY CLIENTS</SectionTitle>
        </HeaderWrapper>

        <ContentWrapper ref={containerRef}>
          <BackgroundHeading>Clients Say</BackgroundHeading>

          {/* Mobile view - single column */}
          <MobileColumnWrapper>
            {testimonials.slice(0, 4).map((testimony) => (
              <TestimonialCard key={testimony.id} {...testimony} />
            ))}
          </MobileColumnWrapper>

          {/* Desktop view - parallax columns */}
          <TestimonialColumn testimonials={column1} y={y1} />
          <TestimonialColumn testimonials={column2} y={y2} />
          <TestimonialColumn testimonials={column3} y={y3} />
          <TestimonialColumn testimonials={column4} y={y4} />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
}

// Styled Components
const SectionWrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
`;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 200vh; /* Increased height to accommodate all testimonials */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const BackgroundHeading = styled.h2`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0.2;
  z-index: 0;
  font-size: 5rem;
  font-weight: 700;
  font-family: serif;

  @media (min-width: 768px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
  }
`;

const MobileColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ColumnWrapper = styled(motion.div)`
  display: none;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 0.75rem);
  }

  @media (min-width: 1024px) {
    display: flex;
    width: calc(25% - 1.125rem);
  }

  &:nth-child(3) {
    position: relative;
    top: -20%;
  }

  &:nth-child(4) {
    position: relative;
    top: -40%;
  }

  &:nth-child(5) {
    position: relative;
    top: -15%;
  }

  &:nth-child(6) {
    position: relative;
    top: -30%;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem 1.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  /* Limit the height of cards to prevent them from being too tall */
  max-height: 400px;
  overflow-y: auto;

  /* Customize scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TestimonyText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  color: #374151;

  /* Limit text to 4 lines with ellipsis for very long testimonials */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  /* Show full text on hover */
  &:hover {
    -webkit-line-clamp: unset;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;
  margin-right: 0.75rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameOccupationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
`;

const OccupationText = styled.span`
  font-size: 0.75rem;
  color: #4b5563;
`;

const QuoteIconWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 15%;
  opacity: 0.1;
  color: #3b82f6;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;

  svg {
    fill: ${(props) => (props.filled ? "#FBBF24" : "#D1D5DB")};
    color: ${(props) => (props.filled ? "#FBBF24" : "#D1D5DB")};
  }
`;

const RatingText = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.25rem;
`;

export default TestimonialsSection;
