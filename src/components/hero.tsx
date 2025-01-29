import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import app_image from '../../public/app_image.png';
import Link from 'next/link';

export const Hero = () => {
  return (
    <main className='w-full h-screen bg-[#ffffff] dark:bg-[#111827]'>
      <section className="tag_line text-center md:mx-0 mx-5">
        <h1 className='md:text-6xl text-4xl font-bold md:pt-16 pt-10 lg:w-[40%] md:w-[60%] w-[100%] mx-auto md:leading-[4rem] leading-[3rem]'><span className='text-purple-500'>MultiAgents</span> Made To Understand You</h1>
        <p className='mt-2 mx-auto lg:w-[40%] md:w-[60%] w-[100%] dark:text-gray-400 text-gray-800'>An AI agent designed to control your entire PC through simple prompts, handling tasks just like a human—seamlessly, efficiently, and intuitively.</p>
        <Link href={'/download'}><Button className='mt-5 md:text-xl text-lg px-7 py-7'>Download for desktop</Button></Link>
      </section>
      <section className="feature_image md:mx-auto md:px-0 px-5 md:w-1/2 w-full mt-10">
        <Image src={app_image} alt='kavinai' />
      </section>
    </main>
  )
}
