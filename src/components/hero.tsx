"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const videos = [
    '/demo1.mp4',
    '/demo2.mp4', 
    '/demo3.mp4',
    '/demo4.mp4'
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsLoading(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleVideoError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <main className="w-full h-screen bg-[#ffffff] dark:bg-[#111827]">
      <section className="tag_line text-center md:mx-0 mx-5">
        <h1 className="md:text-6xl text-4xl font-bold md:pt-16 pt-10 lg:w-[40%] md:w-[60%] w-[100%] mx-auto md:leading-[4rem] leading-[3rem]">
          <span className="text-purple-500">Kavi</span> Made To Understand You
        </h1>
        <p className="mt-2 mx-auto lg:w-[40%] md:w-[60%] w-[100%] dark:text-gray-400 text-gray-800">
          An AI agent designed to control your entire PC through simple prompts, handling tasks just like a human—seamlessly, efficiently, and intuitively.
        </p>
        <Link href="/waitlist">
          <Button className="mt-5 md:text-xl text-lg px-7 py-7">Join the waitlist</Button>
        </Link>
      </section>

      <section className="relative md:mx-auto md:px-20 px-5 md:w-2/3 w-full mt-20 mb-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevVideo}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextVideo}
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowRight className="h-8 w-8" />
        </Button>

        <div className="rounded-lg overflow-hidden shadow-xl">
          {isLoading && <div className="w-full h-full bg-gray-200 animate-pulse" />}
          {error && <div className="w-full h-full bg-red-100 flex items-center justify-center">Error loading video</div>}
          <video
            key={videos[currentVideo]}
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
};
