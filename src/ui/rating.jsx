import { Star, StarHalf } from 'lucide-react';
import styled from 'styled-components';

function Rating({ rating }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} fill="currentColor" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="currentColor" />);
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
`;

export default Rating;
