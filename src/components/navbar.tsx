"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { ModeToggle } from './ui/mode-toggle';
import { motion, useScroll, useTransform } from "framer-motion";

// code
export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { scrollYProgress } = useScroll();
      const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fade out as user scrolls

    const onCloseNavbar = () => {
        if (nav == false) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    return (
        <motion.nav className='fixed w-full top-0 left-0 z-50 flex justify-between backdrop-filter backdrop-blur-lg h-16 items-center px-5 motion-scale-in-[1] motion-translate-y-in-[-73%] motion-duration-700' style={{ opacity }}>
            <div className="left_side flex items-center text-white">
                <div className="logo text-2xl font-bold">
                    <Link href={'/'}><h1>Kavin<span className='text-blue-500'>AI</span></h1></Link>
                </div>
                <Link className='beta_button ml-2 md:block hidden bg-white text-black font-semibold px-2 rounded-full' href={'/'}>Beta</Link>
            </div>
            <div className="right_side flex items-center">
                <ul className={`pages md:flex block md:static absolute top-16 left-0 text-center w-full justify-center md:bg-transparent backdrop-filter backdrop-blur-lg bg-[#ffffff13] text-white ${nav ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 duration-100`}>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link target='_' href='https://www.linkedin.com/company/kavinai/about/'>About</Link></li>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link href='/pricing'>Pricing</Link></li>
                </ul>
                <div className="download">
                    <Button className='bg-white text-black'><Link href={'/waitlist'}>Join waitlist</Link></Button>
                </div>
                <div className="theme ml-2">
                    <ModeToggle />
                </div>
                <div className="nav_icons md:hidden block">
                    <MenuIcon onClick={onCloseNavbar} className='cursor-pointer ml-2' />
                </div>
            </div>
        </motion.nav>
    )
}
