import { Star, StarHalf } from "lucide-react";
import styled from "styled-components";

function Rating({ rating }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          className="star_svg"
          // style={{
          //   width: "1.5rem",
          //   height: "1.5rem",
          // }}
          key={i}
          fill="currentColor"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          className="star_svg"
          // style={{
          //   width: "1.5rem",
          //   height: "1.5rem",
          // }}
          key="half"
          fill="currentColor"
        />
      );
    }

    return stars;
  };

  return <Stars>{renderStars(rating)}</Stars>;
}

const Stars = styled.div`
  display: flex;
  align-items: center;
  color: #fbbf24;
  gap: 0.25rem;

  .star_svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default Rating;
