import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

export const animateOnScroll = forwardRef(({offset = 0}, ref) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [offset]);

  return (
    <div
        ref={ref}
        className={`transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
        }`}
    >
        {children}
    </div>
  )
});