import { BrainIcon, CodeIcon, ComputerIcon, HandIcon, LockIcon, TerminalIcon } from 'lucide-react'
import React from 'react'

export const WhyUs = () => {
    return (
        <section className='bg-white dark:bg-gray-900 flex justify-center w-full pt-5'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Why Us</h1>
                <div className="cards flex flex-wrap justify-center mx-auto md:px-28">
                    <div className="card md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md">
                            <div className="title">
                                <div className="icon">
                                    <ComputerIcon className='' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>One Interface</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>Control your whole pc without switching between multiple interfaces.</p>
                        </div>
                    </div>
                    <div className="card md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md">
                            <div className="title">
                                <div className="icon">
                                    <HandIcon className='' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Simple Interface</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>KavinAi Multiagent offers a lots of features in a simple interface.</p>
                        </div>
                    </div>
                    <div className="card md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md">
                            <div className="title">
                                <div className="icon">
                                    <BrainIcon className='' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Powerful LLMs</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>KavinAI Multiagent uses powerful llms like GPT-4o and LLama 3.3</p>
                        </div>
                    </div>
                    <div className="card md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 dark:bg-gray-800 h-full p-6 rounded-md">
                            <div className="title">
                                <div className="icon">
                                    <LockIcon className='' />
                                </div>
                                <h2 className='mt-2 text-xl font-bold'>Privacy-focused</h2>
                            </div>
                            <p className='mt-2 dark:text-gray-300 text-gray-700'>We keep your data safe and we don't use it to train llms</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
