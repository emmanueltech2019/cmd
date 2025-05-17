import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

export const AnimateOnScroll = forwardRef(({offset = 0, children}, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
            setIsVisible(true);
            observer
        }
      },
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
        className={`transition-all duration-[2s] ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50%]'
        }`}
    >
        {children}
    </div>
  )
});