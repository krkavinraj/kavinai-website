import { ClockIcon, ComputerIcon, PersonStandingIcon, PuzzleIcon } from 'lucide-react';
import React from 'react';

export const PainPoints = () => {
  return (
    <section className='bg-white dark:bg-gray-900 flex justify-center w-full pt-5'>
      <div>
        <h1 className='text-4xl text-center font-bold'>Pain Points</h1>
        <div className="use_cases_cards flex flex-wrap justify-center mx-auto">
          <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
              <div className="title flex items-center">
                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                  <ComputerIcon className='hover:text-blue-600 transition-colors' />
                </div>
                <h2 className='ml-2 text-xl font-bold'>Complicated Interfaces</h2>
              </div>
              <p className='mt-2 dark:text-gray-300 text-gray-700'>Using computers can feel overwhelming, especially for non-technical users. Managing files, apps, and online services is often confusing and time-consuming.</p>
            </div>
          </div>
          <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
              <div className="title flex items-center">
                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                  <PersonStandingIcon className='hover:text-blue-600 transition-colors' />
                </div>
                <h2 className='ml-2 text-xl font-bold'>Lack of Personalization</h2>
              </div>
              <p className='mt-2 dark:text-gray-300 text-gray-700'>Most personal assistants don&apos;t really get you. They&apos;re generic and don&apos;t adapt to your unique needs, preferences, or daily workflows, making them less helpful.</p>
            </div>
          </div>
          <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
              <div className="title flex items-center">
                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                  <ClockIcon className='hover:text-blue-600 transition-colors' />
                </div>
                <h2 className='ml-2 text-xl font-bold'>Wasted Time</h2>
              </div>
              <p className='mt-2 dark:text-gray-300 text-gray-700'>Switching between multiple apps and doing the same repetitive tasks over and over wastes a lot of your valuable time. It&apos;s frustrating and inefficient.</p>
            </div>
          </div>
          <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
              <div className="title flex items-center">
                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                  <PuzzleIcon className='hover:text-blue-600 transition-colors' />
                </div>
                <h2 className='ml-2 text-xl font-bold'>Inconsistent Experiences</h2>
              </div>
              <p className='mt-2 dark:text-gray-300 text-gray-700'>Apps and systems often don&apos;t work well together. Each one has its own interface and way of doing things, leading to a clunky and disjointed experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
