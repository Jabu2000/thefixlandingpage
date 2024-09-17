import React, { useState } from 'react';
import { LogoImg } from '../utils';
import { motion } from 'framer-motion';
import { FaBars, FaCartShopping, FaLocationDot, FaMagnifyingGlass, FaUser } from 'react-icons/fa6';

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
})

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'down' ? -100 : -100,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1400) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeColor)

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='fixed w-full transition-all duration-200 top-0 z-40'>
            <motion.div
                variants={fadeIn('down', 'tween', 0.5, 1)}
                className={navbar ? "flex justify-between fixed w-full transition-all duration-200 top-0 z-20 bg-white px-[80px] py-[15px] " : "relative justify-between  w-full  transition-all duration-200 top-[-100px] opacity-2 "}>
                <div className="flex justify-start items-center gap-6 w-full">
                    <div className='flex gap-3 cursor-pointer'>
                        <FaBars alt='menu' className='w-[20px] h-[20px] text-black' />
                        <div className='font-bold text-[12px] text-black'>
                            Menu
                        </div>
                    </div>
                    <div className='flex gap-3 cursor-pointer'>
                        <FaMagnifyingGlass alt='Search' className='w-[20px] h-[20px] text-black' />
                        <div className='font-bold text-[12px] text-black'>
                            Search
                        </div>
                    </div>
                </div>
                <div className="logo flex justify-center items-center w-full cursor-pointer">
                    <div className="nav-link" to="/">
                        <img src={LogoImg} alt='Logo' className='w-[120px] h-[40px]' />
                    </div>
                </div>
                <div className="flex justify-end items-center gap-6 w-full">
                    <FaUser
                        alt='User'
                        className='nav-link w-[20px] h-[20px] cursor-pointer text-black' />
                    <FaCartShopping
                        alt='Cart'
                        className="nav-link w-[20px] h-[20px] cursor-pointer text-black"
                    />
                    <FaLocationDot
                        alt='Location'
                        className="nav-link w-[20px] h-[20px] cursor-pointer text-black"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Navbar