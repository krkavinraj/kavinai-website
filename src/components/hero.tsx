"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fade out on scroll
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(opacity, "change", (latest) => {
    setIsHidden(latest === 0);
  });

  return (
    <main className="w-full h-screen">
      {!isHidden && (
        <motion.section
          className="tag_line text-center flex flex-col justify-center items-center h-screen fixed top-0 left-0 right-0"
          style={{ opacity, pointerEvents: isHidden ? "none" : "auto" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto leading-tight text-white"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            <span className="text-purple-500">Kavi</span> Made To Understand You
          </motion.h1>

          <motion.p
            className="my-4 mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-gray-200 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            Turn your ideas into reality with a smart assistant that writes code, sends perfectly timed emails, and
            commands your PC—all while navigating the web, managing chats, organizing files, and automating daily
            tasks. Experience a seamless, secure digital life where precision meets privacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          >
            <Link href={"/waitlist"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Button className="mt-4 text-lg sm:text-xl px-6 py-6 sm:px-7 sm:py-7 bg-white text-black">
                  Join the waitlist
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>
      )}
    </main>
  );
};
