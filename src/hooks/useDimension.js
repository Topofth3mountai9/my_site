import { useEffect, useState } from 'react';

export function useDimension() {
  const [dimension, set_dimension] = useState({
    width: 0,
    height: 0,
  });

  function update_dimensions() {
    const { innerWidth, innerHeight } = window;
    set_dimension({
      width: innerWidth,
      height: innerHeight,
    });
  }

  useEffect(() => {
    update_dimensions();
    window.addEventListener('resize', update_dimensions);

    return () => {
      window.removeEventListener('resize', update_dimensions);
    };
  }, []);

  return dimension;
}
