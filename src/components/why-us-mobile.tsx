"use client";
import { BrainIcon, ComputerIcon, HandIcon, LockIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const WhyUsMobile = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger animation earlier on small screens
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-gray-900 flex justify-center w-full pt-20 pb-20 px-6 sm:px-12 md:px-28">
            <div className="max-w-6xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="text-4xl text-center font-bold mb-10 text-white"
                >
                    Why Us
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto text-white">
                    {[
                        {
                            icon: <ComputerIcon className="w-8 h-8" />,
                            title: "One Interface",
                            description: "Control your whole PC without switching between multiple interfaces."
                        },
                        {
                            icon: <HandIcon className="w-8 h-8" />,
                            title: "Simple Interface",
                            description: "Kavi offers a lot of features in a simple interface."
                        },
                        {
                            icon: <BrainIcon className="w-8 h-8" />,
                            title: "Powerful LLMs",
                            description: "Kavi uses powerful LLMs like GPT-4o, LLaMA 3.3, and DeepSeek."
                        },
                        {
                            icon: <LockIcon className="w-8 h-8" />,
                            title: "Privacy-focused",
                            description: "Your data and preferences are stored locally, ensuring privacy and security."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.2 }}
                            className="p-4 transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                                <div className="title flex items-center space-x-3">
                                    <div className="icon hover:rotate-12 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <motion.h2
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="text-xl font-bold text-white break-words"
                                    >
                                        {item.title}
                                    </motion.h2>
                                </div>
                                <motion.p
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                    className="mt-2 text-gray-300 break-words"
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
