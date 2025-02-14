"use client";
import { BrainIcon, ComputerIcon, HandIcon, LockIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export const WhyUs = () => {
    const ref = useRef<HTMLDivElement | null>(null); // Explicitly define type
    const [hasLogged, setHasLogged] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current || hasLogged) return; // Prevent unnecessary execution

        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting) {
                    setHasLogged(true);
                    setIsVisible(true);
                    observerInstance.unobserve(entry.target); // Stop observing
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect(); // Cleanup
    }, [hasLogged]);

    return (
        <section ref={ref} className='bg-white dark:bg-gray-900 flex justify-center w-full pt-5'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Why Us</h1>
                <div className="cards flex flex-wrap justify-center mx-auto md:px-28">
                    <div className={`card md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'motion-scale-in-[0.5] motion-blur-in-[10px] motion motion-delay-[0.75s]/blur block' : 'hidden'} motion-duration-500`}>
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title">
                                <div className="icon hover:rotate-12 transition-transform duration-300">
                                    <ComputerIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>One Interface</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Control your whole pc without switching between multiple interfaces.</p>
                        </div>
                    </div>
                    <div className={`card md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'motion-scale-in-[0.5] motion-blur-in-[10px] motion motion-delay-[0.75s]/blur block' : 'hidden'} motion-duration-500`}>
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title">
                                <div className="icon hover:rotate-12 transition-transform duration-300">
                                    <HandIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Simple Interface</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Kavi offers a lots of features in a simple interface.</p>
                        </div>
                    </div>
                    <div className={`card md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'motion-scale-in-[0.5] motion-blur-in-[10px] motion motion-delay-[0.75s]/blur block' : 'hidden'} motion-duration-500`}>
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title">
                                <div className="icon hover:rotate-12 transition-transform duration-300">
                                    <BrainIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Powerful LLMs</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Kavi uses powerful llms like GPT-4o, LLama 3.3, and DeepSeek</p>
                        </div>
                    </div>
                    <div className={`card md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'motion-scale-in-[0.5] motion-blur-in-[10px] motion motion-delay-[0.75s]/blur block' : 'hidden'} motion-duration-500`}>
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title">
                                <div className="icon hover:rotate-12 transition-transform duration-300">
                                    <LockIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Privacy-focused</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Your data and preferences are stored locally, ensuring privacy and security. We keep your information safe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
