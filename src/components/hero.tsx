"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fade out as user scrolls
  const [isHidden, setIsHidden] = useState(false);

  const texts = [
    "added all the items in the shopping list to the cart, should i order",
    "read all the emails and opened the most important ones for, want a quick summary",
    "successfully built the backend for the project xyz, ready for deployment?",
    'the research report for "market opportunities in the paint sector for a chemical supplier" is ready',
    "working on preparing the ppt for today's 5pm meet"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => {
        if (prevIndex < texts.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(timer);
        return prevIndex;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(opacity, "change", (latest) => {
    setIsHidden(latest === 0); // Hide when opacity is 0
  });

  return (
    <main className="w-full h-screen">
       <div className="details absolute top-20 left-5 right-0 z-10 p-5">
      {texts.map((text, index) => {
        // Only show texts that are at or before the active index.
        const isVisible = index <= activeIndex;
        // Determine the text shade based on how long ago it was activated.
        // Newest (active) text stays light (gray-300). As new texts appear, older ones darken.
        let textColor = "text-gray-400";
        const diff = activeIndex - index;
        if (diff === 1) {
          textColor = "text-gray-500";
        } else if (diff === 2) {
          textColor = "text-gray-700";
        } else if (diff > 2) {
          textColor = "text-gray-800";
        }
        
        return (
          <div 
            key={index} 
            className={`${textColor} transition-all duration-500`}
            style={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {text}
          </div>
        );
      })}
    </div>
      {!isHidden && (
        <motion.section
          className="tag_line text-center flex flex-col justify-center items-center h-screen fixed top-0 left-0 right-0"
          style={{ opacity, pointerEvents: isHidden ? "none" : "auto" }}
        >
          <motion.h1
            className="md:text-6xl text-4xl font-bold lg:w-[40%] md:w-[60%] w-[90%] mx-auto md:leading-[4rem] leading-[3rem] overflow-hidden whitespace-nowrap text-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <span className="text-purple-500">Kavi</span> Made To Understand You
          </motion.h1>
          <motion.p className="my-4 mx-auto lg:w-[40%] md:w-[60%] w-[90%] text-gray-200 text-xl">
            Turn your ideas into reality with a smart assistant that writes code, sends perfectly timed emails, and
            commands your PC—all while navigating the web, managing chats, organizing files, and automating daily
            tasks. Experience a seamless, secure digital life where precision meets privacy.
          </motion.p>
          <Link href={"/waitlist"}>
            <Button className="mt-1 md:text-xl text-lg px-7 py-7 motion-preset-focus bg-white text-black">
              Join the waitlist
            </Button>
          </Link>
        </motion.section>
      )}
    </main>
  );
};
