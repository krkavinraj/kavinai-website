"use client";
import { ChevronDownIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "What is Kavi",
      answer: "KavinAI-MultiAgent is an advanced AI agent desktop application that leverages multiple specialized agents working in tandem to automate complex tasks and supercharge productivity."
    },
    {
      question: "How does the multi-agent system work?",
      answer: "Our system coordinates specialized AI agents, each optimized for specific tasks, to collaborate and solve problems more efficiently than single-agent systems."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try Kavi for free right now by joining waitlist. But in future KavinAI-Multiagent will be paid."
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade encryption and comply with global data protection regulations. Your data remains private and is never used for training our models. You can store your data in your system too."
    },
    {
      question: "What llms do you support?",
      answer: "We support many state of the art llms like GPT-4o, Deepseek R1, Llama-3.3 etc."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Quick answers to common questions about our platform and services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`group bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${isVisible ? 'motion-preset-focus motion-duration-1000 block' : 'hidden'}`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center p-6"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100 text-left pr-4">
                {faq.question}
              </span>
              <ChevronDownIcon className={`w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/50">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;