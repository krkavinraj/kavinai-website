"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fade out as user scrolls
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(opacity, "change", (latest) => {
    setIsHidden(latest === 0); // Hide when opacity is 0
  });

  return (
    <main className="w-full h-screen">
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
