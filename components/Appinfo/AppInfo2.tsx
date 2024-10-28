import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Iphone15Pro from '../ui/iphone-15-pro';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AppInfo1() {
  const textRef = useRef(null); // Reference for the text container
  const iphoneRef = useRef(null); // Reference for the iPhone component

  useEffect(() => {
    // GSAP animation setup for text
    gsap.from(textRef.current, {
      x: "100%", // Move from left to right
      opacity: 0, // Start as invisible
      duration: 1, // Duration of the animation
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // Start animation when top of text hits 80% of the viewport
        end: "center center",
        scrub: 1, // Smooth scrubbing
      }
    });

    // GSAP animation setup for iPhone component
    gsap.from(iphoneRef.current, {
      x: "-100%", // Move from right to left
      opacity: 0, // Start as invisible
      duration: 1, // Duration of the animation
      scrollTrigger: {
        trigger: iphoneRef.current,
        start: "top 80%", // Start animation when top of iPhone hits 80% of the viewport
        end: "center center",
        scrub: 1, // Smooth scrubbing
      }
    });
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex items-center justify-between h-screen w-full'>
        <div ref={iphoneRef} className='left items-center justify-start px-[8em] h-full w-[50%] flex'>
          <Iphone15Pro src="https://insightword.in/website/splash.png" />
        </div>
        <div className='left items-center justify-end px-[8em] h-full w-[50%] flex'>
          <div ref={textRef} className="flex flex-col">
            <h1 className='flex flex-col font-[Poppins] text-[3em] font-medium leading-[1em] text-white z-50'>Introducing Nityasha</h1>
            <h1 className='font-[Poppins] text-[1.5em] font-light w-[20rem] mt-2 leading-[1.5em] text-white z-50'>Your <span className='font-bold'>Consulting</span> Partner for Effective Advertising Solutions</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo1;
