"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { MenuIcon, SidebarCloseIcon } from 'lucide-react';
import { ModeToggle } from './ui/mode-toggle';

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const onCloseNavbar = () => {
        if (nav == false) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    return (
        <nav className='sticky top-0 left-0 z-50 flex justify-between backdrop-filter backdrop-blur-lg border-b-[.5px] border-b-blue-100 dark:border-b-[#474f57] bg-[#ffffff54] dark:bg-[#111827d8] h-16 items-center px-5'>
            <div className="left_side">
                <div className="logo text-2xl font-bold">
                    <Link href={'/'}><h1>Kavin<span className='text-blue-500'>AI</span></h1></Link>
                </div>
            </div>
            <div className="right_side flex items-center">
                <ul className={`pages md:flex block md:static absolute top-16 left-0 text-center w-full justify-center md:bg-transparent bg-[#ffffff] dark:bg-[#111827] ${nav ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 duration-100`}>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link href='/'>Solutions</Link></li>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link href='/'>About</Link></li>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link href='/pricing'>Pricing</Link></li>
                    <li className='mr-3 font-semibold hover:underline underline-offset-2 transition-all duration-100 md:my-0 my-5'><Link href='/questions'>FAQ</Link></li>
                </ul>
                <div className="download">
                    <Button><Link href={'/download'}>Download</Link></Button>
                </div>
                <div className="theme ml-2">
                    <ModeToggle />
                </div>
                <div className="nav_icons md:hidden block">
                    <MenuIcon onClick={onCloseNavbar} className='cursor-pointer ml-2' />
                </div>
            </div>
        </nav>
    )
}
