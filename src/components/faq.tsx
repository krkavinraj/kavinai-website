"use client";
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: `What is React?`,
      answer: `React is a JavaScript 
                     library for building user interfaces.`
    },
    {
      question: `What is Tailwind CSS?`,
      answer: `Tailwind CSS is a utility-first 
                     CSS framework for creating custom designs.` },
    {
      question: `How do you install Tailwind CSS?`,
      answer: `You can install Tailwind CSS using npm 
                     and configure it in your project.`},
    {
      question: `How do you toggle content visibility?`,
      answer: `You can use state management in 
                     React to toggle content visibility.` },
    {
      question: `What is a state in React?`,
      answer: `State is an object that holds the 
                     values that determine the behavior of a component.` }
  ];

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 pb-10">
      <h1 className="text-2xl font-bold 
                           mb-9 mt-4 text-green-600 dark:text-white
                           text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 
                                                rounded-lg p-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left
                                       font-semibold text-blue-600 dark:text-white
                                       hover:text-blue-800 focus:outline-none"
            >
              {faq.question}
            </button>
            <p className={`mt-2 text-gray-700 dark:text-gray-300 ${openIndex === index ? '' : 'hidden'} transition-all duration-100`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
