import React from 'react'
import { motion } from 'framer-motion';
import { img_threeImg, menImg, womenImg } from '../utils'
import { FaAnglesRight } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

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
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
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

const ShopingPage = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col justify-center items-center w-full gap-[50px]'>
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='flex w-full justify-center px-[30px] gap-[50px] sticky top-[-350px] '>
                <div className='relative flex flex-col w-screen cursor-pointer'>
                    <img src={womenImg} className='object-cover w-[100vw]' />
                    <div className='absolute bottom-[40px] left-[40px] flex items-center gap-[10px]'>
                        <button className='text-black font-bold text-[30px]'>Ladies new in</button>
                        <FaAnglesRight className='text-black text-[30px]' />
                    </div>

                </div>
                <div className='relative flex flex-col w-screen cursor-pointer'>
                    <img src={menImg} className='object-cover w-[100vw]' />
                    <div className='absolute bottom-[40px] left-[40px] flex items-center gap-[10px]'>
                        <button className='text-black font-bold text-[30px]'>Men's new in</button>
                        <FaAnglesRight className='text-black text-[30px]' />
                    </div>
                </div>
            </motion.div>
            <div className='relative w-full flex-col mt-[100px] flex'>
                <img src={img_threeImg} className='object-cover w-[100vw]' />
                <div className='absolute flex flex-col text-white bottom-[70px] ml-[100px] gap-5'>
                    <p className="font-bold text-[80px]">
                        New age style
                    </p>
                    <button className="w-[150px] text-white hover:text-black h-[50px] text-[15px] bg-black hover:bg-white font-semibold rounded-md flex justify-center items-center gap-2" >
                        Shop now
                        <FaArrowRight className='text-[15px]' />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default ShopingPage