import { useEffect, useState } from 'react';

export function useOnscreen(ref, threshold = 0.3) {
  //state and setter for storing when element is visible
  const [is_intersecting, set_is_intersecting] = useState(false);
  //   console.log(is_intersecting);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //update our state when observer callback fires
        set_is_intersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: '0px',
        threshold,
      }
    );

    const current_ref = ref.current;
    if (current_ref) {
      observer.observe(current_ref);
    }
    return () => {
      if (current_ref) {
        observer.unobserve(current_ref);
      }
    };
  }, [ref, threshold]);

  return is_intersecting;
}
