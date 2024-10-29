// components/CustomCursor.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => { // Specify the type for the event
      if (cursorRef.current) { // Check if cursorRef is not null
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3, // Smooth transition duration
          ease: "power3.out", // Easing function
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (cursorRef.current) { // Check if cursorRef is not null
        gsap.to(cursorRef.current, {
          scale: 9,
          filter: "blur(9px)",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (cursorRef.current) { // Check if cursorRef is not null
        gsap.to(cursorRef.current, {
          scale: 1,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    // Attach event listeners to various text elements
    const textElements = document.querySelectorAll("h1, p, span, .text, h2, h3, h4, h5, h6");
    textElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      textElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
    />
  );
};

export default CustomCursor;
