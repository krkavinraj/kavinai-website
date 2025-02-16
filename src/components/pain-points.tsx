"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClockIcon, ComputerIcon, PersonStandingIcon, PuzzleIcon } from "lucide-react";
import Image from "next/image";

export const PainPoints = () => {
  // Ref for the pain points section
  const containerRef = useRef<HTMLDivElement>(null);

  /* 
    useScroll with a target ref gives us a scrollYProgress value (0 to 1) for the container.
    We set the offset so that progress is 0 when the section is just off‑screen at the bottom,
    and 1 when it’s fully scrolled past (i.e. at the top of the viewport).
  */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /* 
    Map scroll progress to plane’s x-position:
      - When progress is 0 (no pain points seen) → x = 900 (right corner)
      - When progress is 1 (all pain points visible) → x = -900 (left corner)
    This means the plane continuously moves from right to left as the user scrolls.
  */
  const planeX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  // Data for pain points
  const painPoints = [
    {
      title: "Complicated Interfaces",
      description:
        "Using computers can feel overwhelming, especially for non-technical users. Managing files, apps, and online services is often confusing and time-consuming.",
      icon: <ComputerIcon className="text-blue-600" />,
    },
    {
      title: "Lack of Personalization",
      description:
        "Most personal assistants don't really get you. They're generic and don't adapt to your unique needs, preferences, or daily workflows, making them less helpful.",
      icon: <PersonStandingIcon className="text-blue-600" />,
    },
    {
      title: "Wasted Time",
      description:
        "Switching between multiple apps and doing the same repetitive tasks over and over wastes a lot of your valuable time. It's frustrating and inefficient.",
      icon: <ClockIcon className="text-blue-600" />,
    },
    {
      title: "Inconsistent Experiences",
      description:
        "Apps and systems often don't work well together. Each one has its own interface and way of doing things, leading to a clunky and disjointed experience.",
      icon: <PuzzleIcon className="text-blue-600" />,
    },
  ];

  // Animation variants for each pain point card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={containerRef}
      className="bg-white flex flex-col items-center w-full pt-5 rounded-lg lg:px-20 overflow-hidden text-black pb-20 px-10"
    >
      {/* The plane's horizontal position is bound to "planeX" (from scroll progress).
          When scrolling stops, the scrollYProgress stops changing, so the plane “freezes” at that position. */}
      <motion.div style={{ x: planeX }} className="w-full flex justify-center mb-5">
        <Image src="/plane.png" alt="plane" width={100} height={100} />
      </motion.div>

      <h1 className="text-4xl text-center font-bold mb-8">Pain Points</h1>

      {/* Pain points are laid out vertically. Each card animates in (and reverses when scrolling out)
          so that one card is revealed at a time. */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            className="p-6 bg-blue-100 rounded-md shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center">
              <div className="bg-blue-200 rounded-full p-2">{point.icon}</div>
              <h2 className="ml-2 text-xl font-bold">{point.title}</h2>
            </div>
            <p className="mt-2 text-gray-700">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
