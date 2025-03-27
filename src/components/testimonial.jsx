import React from "react";
import { theme } from "../styles/theme";
import Rating from "../ui/rating";
import { Quote } from "lucide-react";
import styled from "styled-components";

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
  );
};

export default Testimonial;

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
`;

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
`;

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
`;

// const Testimonial = ({ testimony, name, image, occupation, rating, date }) => {
//   return (
//     <TestimonialWrapper className={` relative z-10 py-10 px-8 bg-[#979797]`}>
//       <Rating rating={rating} />
//       <p className="text_small font-bold mt-8 mb-12">{testimony}</p>
//       <div className="img_name_and_occupation flex_items align_middle g_1">
//         <ImgWrapper>
//           <img src={image} alt={name} />
//         </ImgWrapper>
//         <div className="name_and_occupation flex_items flex-col">
//           <span className={` name text_tiny text_xs text-[#9ca3af]`}>
//             {name}
//           </span>
//           <span className={`occupation text_xs text-[#374151]`}>
//             {occupation}
//           </span>
//         </div>
//       </div>
//       <div className="quote absolute top-[30%] right-[20%]">
//         <Quote
//           color={`${theme.colors.primary}`}
//           fill={`${theme.colors.primary}`}
//         />
//       </div>
//     </TestimonialWrapper>
//   );
// };

// const TestimonialWrapper = styled.div`
//   position: relative;
//   padding: 2rem 1.5rem;

//   background: ${({ theme }) => theme.colors.grey.h};
//   color: ${({ theme }) => theme.colors.grey.d};

//   svg {
//     width: 3rem;
//     height: 3rem;
//   }

//   .quote {
//     z-index: -1;
//     svg {
//       width: 6rem;
//       height: 6rem;
//     }
//   }

//   .name {
//     color: ${({ theme }) => theme.colors.grey[400]};
//     font-size: 0.85rem;
//   }

//   .occupation {
//     color: ${({ theme }) => theme.colors.grey[500]};
//     font-size: 0.85rem;
//   }
//   p {
//     font-size: ${({ theme }) => theme.typography.text.tiny};
//     font-weight: 500;
//     margin-top: 1.5rem;
//     margin-bottom: 2rem;
//   }
// `;

// const ImgWrapper = styled.div`
//   /* width: 45px;
//   height: 45px; */
//   width: 3.5rem;
//   height: 3.5rem;
//   border-radius: 50%;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

// export default Testimonial;
