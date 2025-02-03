"use client";
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Hero = () => {
  const videos = ['/demo1.mp4', '/demo2.mp4', '/demo3.mp4', '/demo4.mp4'];

  return (
    <main className='w-full h-screen bg-[#ffffff] dark:bg-[#111827]'>
      <section className="tag_line text-center md:mx-0 mx-5">
        <h1 className='md:text-6xl text-4xl font-bold md:pt-16 pt-10 lg:w-[40%] md:w-[60%] w-[100%] mx-auto md:leading-[4rem] leading-[3rem]'><span className='text-purple-500'>Kavi</span> Made To Understand You</h1>
        <p className='mt-2 mx-auto lg:w-[40%] md:w-[60%] w-[100%] dark:text-gray-400 text-gray-800'>An AI agent designed to control your entire PC through simple prompts, handling tasks just like a human—seamlessly, efficiently, and intuitively.</p>
        <Link href={'/waitlist'}><Button className='mt-5 md:text-xl text-lg px-7 py-7'>Join the waitlist</Button></Link>
      </section>

      <section className="video-slider md:mx-auto md:px-0 px-5 md:w-1/2 w-full mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <video 
                controls 
                muted 
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  )
}