import React from 'react'
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

function BentoDemo() {
  return (
  <div className='w-full flex items-center justify-center'>
   <VelocityScroll
      text="| Let's Connect |"
      default_velocity={1}
      className="font-display flex w-full items-center justify-center text-center text-4xl mt-5 font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    </div>
  )
}

export default BentoDemo