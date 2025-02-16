"use client";
import { BrainIcon, ComputerIcon, HandIcon, LockIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const WhyUs = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setAnimationKey((prevKey) => prevKey + 1); // Force animation reset
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-gray-900 flex justify-center w-full pt-20 pb-20">
            <div>
                <motion.h1
                    key={animationKey}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="text-4xl text-center font-bold mb-10 text-white"
                >
                    Why Us
                </motion.h1>

                <div className="cards flex flex-wrap justify-center mx-auto md:px-28 text-white">
                    {[{
                        icon: <ComputerIcon />,
                        title: "One Interface",
                        description: "Control your whole pc without switching between multiple interfaces."
                    }, {
                        icon: <HandIcon />,
                        title: "Simple Interface",
                        description: "Kavi offers a lot of features in a simple interface."
                    }, {
                        icon: <BrainIcon />,
                        title: "Powerful LLMs",
                        description: "Kavi uses powerful LLMs like GPT-4o, LLaMA 3.3, and DeepSeek."
                    }, {
                        icon: <LockIcon />,
                        title: "Privacy-focused",
                        description: "Your data and preferences are stored locally, ensuring privacy and security."
                    }].map((item, index) => (
                        <motion.div
                            key={`${animationKey}-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.2 }}
                            className="md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                                <div className="title flex items-center space-x-3">
                                    <div className="icon hover:rotate-12 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <motion.h2
                                        key={`${animationKey}-title-${index}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="text-xl font-bold overflow-hidden whitespace-nowrap text-white"
                                    >
                                        {item.title}
                                    </motion.h2>
                                </div>
                                <motion.p
                                    key={`${animationKey}-desc-${index}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                    className="mt-2 text-gray-300 overflow-hidden whitespace-nowrap"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
