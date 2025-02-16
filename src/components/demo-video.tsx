"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const DemoVideo = () => {
    const videos = ['/demo1.mp4', '/demo2.mp4', '/demo3.mp4', '/demo4.mp4'];
    
    return (
        <motion.section 
            className="video-slider md:mx-auto md:px-0 px-5 md:w-3/4 w-full py-20 bg-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="relative group">
                {/* Decorative frame elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-gradient-to-br from-gray-900/80 to-gray-800/80"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <motion.div 
                                className="p-8"
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="relative aspect-video border-4 border-gray-800 rounded-xl overflow-hidden">
                                    <video
                                        controls
                                        muted
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none" />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation */}
                    <div className="custom-next absolute right-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                        <span className="text-2xl text-white">→</span>
                    </div>
                    <div className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                        <span className="text-2xl text-white">←</span>
                    </div>

                    {/* Custom Pagination */}
                    <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2" />
                </Swiper>
            </div>

            <style jsx global>{`
                .custom-bullet {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    margin: 0 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .custom-bullet-active {
                    background: linear-gradient(to right, #8b5cf6, #ec4899);
                    transform: scale(1.4);
                }

                .swiper-slide {
                    opacity: 0.4;
                    transition: opacity 0.3s ease;
                }

                .swiper-slide-active {
                    opacity: 1;
                }
            `}</style>
        </motion.section>
    )
}