import { CodeIcon, ComputerIcon, TerminalIcon } from 'lucide-react'
import React from 'react'

export const UseCases = () => {
    return (
        <section className='bg-white dark:bg-gray-900 flex justify-center w-full pt-40'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Use Cases</h1>
                <div className="use_cases_cards flex flex-wrap justify-center mx-auto">
                    <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                                    <TerminalIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='ml-2 text-xl font-bold'>Use Terminal Like Pro!</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Use the terminal in natural language instead of writing commands.</p>
                        </div>
                    </div>
                    <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                                    <ComputerIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='ml-2 text-xl font-bold'>Control Everything With One Interface</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Create a folder, open a browser, play your favorite song, and do everything while staying in one app.</p>
                        </div>
                    </div>
                    <div className="use_cases md:w-1/3 w-full p-4 transform hover:scale-105 transition-all duration-300">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md hover:shadow-lg">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 dark:bg-gray-700 rounded-full p-2 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors">
                                    <CodeIcon className='hover:text-blue-600 transition-colors' />
                                </div>
                                <h2 className='ml-2 text-xl font-bold'>Code Fast with Us</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Use AI to create your project using just prompts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
