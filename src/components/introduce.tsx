"use client";
import React from 'react';
import { Hero } from './hero';
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroMobile } from './hero-mobile';

export const Introduce = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], [0, 100]); // Adjusted input range and reversed values
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); 

  return (
    <div className='bg-[url(/hero.png)] bg-cover bg-center bg-fixed min-h-screen relative'>
      {/* Hero Section - Ensure it stays on top */}
      <div className="relative z-30 md:block hidden">
        <Hero />
      </div>
      <div className="relative z-30 md:hidden block">
        <HeroMobile />
      </div>

      {/* Centered expanding white background */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <motion.div 
          className="bg-white shadow-[0px_0px_45px_10px_rgba(255,255,255,1)] h-full" 
          style={{ 
            width: width,
            opacity: opacity,
            maxWidth: '100vw', // Ensure it doesn't overflow horizontally
          }} 
        />
      </div>
    </div>
  )
}