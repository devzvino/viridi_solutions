import React from 'react'
import main_logo from '../assets/Viridi_logo.svg'
import { main_website, socialLinks } from '../utils/weblinks'
import { useState } from 'react';
import { useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 10) {
                setBackgroundColor(true);
            } else {
                setBackgroundColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full  contWide flex  top-0  z-50 ${(window.location.pathname === '/') && (backgroundColor ? 'bg-white fixed ' : 'bg-transparent fixed')} ${(window.location.pathname !== '/') && 'bg-[#151515]'}   justify-between `}>
            <div>
                <img src={main_logo} onClick={() => window.location.pathname = '/'} className={`md:max-2xl:h-20 h-[70px] ${(window.location.pathname === '/') && (backgroundColor ? '' : 'footerLogo')} cursor-pointer py-3`} alt="viridi_logo" />
            </div>
            <div className={`${backgroundColor ? 'text-slate-600 divide-slate-600' : 'text-white divide-white'} md:max-2xl:flex hidden gap-x-10 divide-x-[1px] `}>
                <div className=' md:max-2xl:flex hidden h-full text-2xl gap-4 items-center'>
                    {
                        main_website.slice(1, main_website.length).map((link) => {
                            return (
                                <a href={link.link} className='text-xl h-full hover:bg-white px-3 flex items-center font-semibold hover:text-[#348B06]'>
                                    {link.name}
                                </a>
                            )
                        })
                    }
                </div>
                <div className=' hidden md:max-2xl:flex pl-10 text-2xl gap-4 items-center '>
                    {
                        socialLinks.map((link) => {
                            return (
                                <a href={link.link} target="_blank" className='text-xl hover:text-[#348B06]' rel="noreferrer">
                                    {link.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>

            <div className='md:max-2xl:hidden flex items-center'>
                <CiMenuFries onClick={() => setOpen(!open)} className={`${(backgroundColor ? 'text-[#348B06]' : 'text-white')}  text-[45px]`} />
            </div>
            {
                open && <div className='md:max-2xl:hidden contWide py-10 z-50  justify-between fixed w-full flex text-right flex-col h-screen top-0 left-0 bg-[#151515]'>
                    <div className='w-full flex justify-end'>
                        <AiOutlineClose onClick={() => setOpen(!open)} className='text-4xl text-white' />
                    </div>
                    <div className='w-full flex flex-col  text-3xl gap-10 items-end'>
                        {
                            main_website.map((link) => {
                                return (
                                    <a href={link.link} className='text-4xl text-white  px-3 flex items-center font-semibold hover:text-[#348B06]'>
                                        {link.name}
                                    </a>
                                )
                            })
                        }

                    </div>
                    <div className='  flex pl-10 text-2xl gap-4 justify-end'>
                        {
                            socialLinks.map((link) => {
                                return (
                                    <a href={link.link} target="_blank" className='text-xl text-white hover:text-[#348B06]' rel="noreferrer">
                                        {link.icon}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default NavigationBar