"use client"

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Lenis from "@studio-freight/lenis"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    testimony: "Working with this team was an absolute pleasure. They delivered beyond our expectations and on time.",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    occupation: "CEO, Tech Solutions",
    rating: 5,
    date: "2023-05-15",
  },
  {
    id: 2,
    testimony: "The attention to detail was impressive. Our project was handled with care and professionalism.",
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    occupation: "Marketing Director",
    rating: 5,
    date: "2023-06-20",
  },
  {
    id: 3,
    testimony:
      "Exceptional service from start to finish. I highly recommend their services to anyone looking for quality work.",
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    occupation: "Project Manager",
    rating: 4,
    date: "2023-07-10",
  },
  {
    id: 4,
    testimony: "They transformed our vision into reality. The results exceeded our expectations in every way.",
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    occupation: "Creative Director",
    rating: 5,
    date: "2023-08-05",
  },
  {
    id: 5,
    testimony: "Professional, responsive, and incredibly talented. It was a joy to collaborate with this team.",
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    occupation: "Startup Founder",
    rating: 5,
    date: "2023-09-12",
  },
  {
    id: 6,
    testimony:
      "Their expertise and guidance throughout the project were invaluable. We couldn't be happier with the outcome.",
    name: "Jennifer Taylor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    occupation: "Product Owner",
    rating: 4,
    date: "2023-10-18",
  },
  {
    id: 7,
    testimony:
      "A truly collaborative experience. They listened to our needs and delivered a solution that perfectly matched our requirements.",
    name: "Robert Martinez",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    occupation: "IT Director",
    rating: 5,
    date: "2023-11-22",
  },
  {
    id: 8,
    testimony: "Outstanding work! The team's creativity and technical skills are top-notch.",
    name: "Lisa Anderson",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    occupation: "UX Designer",
    rating: 5,
    date: "2023-12-15",
  },
  {
    id: 9,
    testimony: "From concept to completion, the process was smooth and the results were exceptional.",
    name: "Thomas Clark",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    occupation: "Business Analyst",
    rating: 4,
    date: "2024-01-08",
  },
  {
    id: 10,
    testimony: "Their innovative approach to problem-solving made all the difference in our project.",
    name: "Amanda White",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    occupation: "Operations Manager",
    rating: 5,
    date: "2024-02-14",
  },
  {
    id: 11,
    testimony: "Reliable, efficient, and incredibly skilled. I wouldn't hesitate to work with them again.",
    name: "Kevin Lee",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    occupation: "Software Engineer",
    rating: 5,
    date: "2024-03-20",
  },
  {
    id: 12,
    testimony: "The level of communication and transparency throughout our project was refreshing and appreciated.",
    name: "Olivia Harris",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    occupation: "Content Strategist",
    rating: 4,
    date: "2024-04-25",
  },
]

// Rating component
const Rating = ({ rating }) => {
  return (
    <RatingWrapper>
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </RatingWrapper>
  )
}

const RatingWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const Star = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.filled ? "#ef5539" : "#ddd")};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`

// Testimonial component
const Testimonial = ({ testimony, name, image, occupation, rating }) => {
  return (
    <TestimonialWrapper>
      <Rating rating={rating} />
      <p>{testimony}</p>
      <div className="profile">
        <ImgWrapper>
          <img src={image || "/placeholder.svg"} alt={name} />
        </ImgWrapper>
        <div className="info">
          <span className="name">{name}</span>
          <span className="occupation">{occupation}</span>
        </div>
      </div>
      <QuoteIcon>
        <Quote color="#ef5539" fill="#ef5539" />
      </QuoteIcon>
    </TestimonialWrapper>
  )
}

const TestimonialWrapper = styled.div`
  position: relative;
  padding: 2rem 1.5rem;
  background: #2b2b2b;
  color: #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  p {
    font-size: 0.95rem;
    font-weight: 500;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .info {
    display: flex;
    flex-direction: column;
  }
  
  .name {
    color: #9ca3af;
    font-size: 0.85rem;
  }
  
  .occupation {
    color: #6b7280;
    font-size: 0.85rem;
  }
`

const ImgWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const QuoteIcon = styled.div`
  position: absolute;
  top: 30%;
  right: 20%;
  z-index: 0;
  opacity: 0.2;
  
  svg {
    width: 6rem;
    height: 6rem;
  }
`

// TestimonialColumn component
function TestimonialColumn({ testimonials, y }) {
  return (
    <ColumnWrapper style={{ y }}>
      {testimonials.map((testimony) => (
        <Testimonial key={testimony.id} {...testimony} />
      ))}
    </ColumnWrapper>
  )
}

const ColumnWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  position: relative;
  width: 25%;
  min-width: 250px;
  height: 100%;
  
  &:nth-of-type(1) {
    top: -45%;
  }
  &:nth-of-type(2) {
    top: -95%;
  }
  &:nth-of-type(3) {
    top: -45%;
  }
  &:nth-of-type(4) {
    top: -75%;
  }
`

// Section header components
const Section_header = ({ h2 }) => {
  return (
    <SectionHeaderWrapper>
      <StyledHeader>{h2}</StyledHeader>
    </SectionHeaderWrapper>
  )
}

const SectionHeaderWrapper = styled.div`
  text-align: left;
  margin-bottom: 8rem;
`

const StyledHeader = styled.h2`
  font-size: clamp(3.13rem, 0.82vi + 2.86rem, 3.91rem);
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 7rem;
  color: #fdfdfd;
`

const Section_heading_bg = ({ heading }) => {
  return <SectionHeadingBg>{heading}</SectionHeadingBg>
}

const SectionHeadingBg = styled.h2`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-family: 'Caveat', cursive;
  font-size: clamp(9.54rem, 7.2vi + 7.23rem, 16.45rem);
  color: #454545;
  opacity: 0.5;
  line-height: 1.1;
  z-index: 0;
`

// Container component
const OurContainer = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  max-width: 140rem;
  margin-inline: auto;
  height: 100%;
`

// Main Testimonials component
const Testimonials = () => {
  const container_ref = useRef(null)
  const [dimension, set_dimension] = useState({
    width: 0,
    height: 0,
  })

  const { scrollYProgress } = useScroll({
    target: container_ref,
    offset: ["start end", "end start"],
  })

  const { height } = dimension

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle resize
    const resize = () => {
      set_dimension({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", resize)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <TestimonialsContainer>
      <OurContainer>
        <Spacer />
        <Section_header h2="HEAR FROM MY CLIENTS" />
        <TestimonialsContent ref={container_ref}>
          <Section_heading_bg heading="Clients Say" />

          <TestimonialColumn testimonials={[testimonials[0], testimonials[1], testimonials[2]]} y={y1} />
          <TestimonialColumn testimonials={[testimonials[3], testimonials[4], testimonials[5]]} y={y2} />
          <TestimonialColumn testimonials={[testimonials[6], testimonials[7], testimonials[8]]} y={y3} />
          <TestimonialColumn testimonials={[testimonials[9], testimonials[10], testimonials[11]]} y={y4} />
        </TestimonialsContent>
      </OurContainer>
    </TestimonialsContainer>
  )
}

const TestimonialsContainer = styled.section`
  min-height: 90vh;
  width: 100%;
  background-color: #020202;
  color: #fdfdfd;
`

const Spacer = styled.div`
  height: 50vh;
`

const TestimonialsContent = styled.div`
  height: 200vh;
  padding-inline: 2vw;
  display: flex;
  gap: 2vw;
  overflow: hidden;
  position: relative;
`

// Export the main component
export default Testimonials

