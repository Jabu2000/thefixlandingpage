import React from 'react'
import { motion } from "framer-motion"
import { FiMapPin } from "react-icons/fi"
import { FaFacebook, FaInstagram, FaNewspaper, FaTiktok, FaYoutube } from 'react-icons/fa'


const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};


const FooterPage = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto mt-[10%] max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-[50px] font-semibold text-zinc-50"
      >
        bash
      </motion.h1>

      <motion.div className='flex flex-col w-full'>
        <ScheduleItem title="Pay your TFG Money Account online" />
        <ScheduleItem title="Track your order" />
        <ScheduleItem title="Log a return" />
        <ScheduleItem title="Find your nearest store" />
        <ScheduleItem title="Get the Bash app" />
      </motion.div>

      <motion.div 
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className='flex gap-[150px]'>
        <div className='flex flex-col gap-5'>
          <FaInstagram className='text-[80px] cursor-pointer'/>
          <h1 className='text-[15px] text-white font-medium'>
            Instagram
          </h1>
        </div>
        <div className='flex flex-col gap-5'>
          <FaTiktok className='text-[80px] cursor-pointer'/>
          <h1 className='text-[15px] text-white font-medium'>
            TikTok
          </h1>
        </div>
        <div className='flex flex-col gap-5'>
          <FaFacebook className='text-[80px] cursor-pointer'/>
          <h1 className='text-[15px] text-white font-medium'>
            Facebook
          </h1>
        </div>
        <div className='flex flex-col gap-5'>
          <FaYoutube className='text-[80px] cursor-pointer'/>
          <h1 className='text-[15px] text-white font-medium'>
            Youtube
          </h1>
        </div>
        <div className='flex flex-col gap-5'>
          <FaNewspaper className='text-[80px] cursor-pointer'/>
          <h1 className='text-[15px] text-white font-medium'>
            Newsletter
          </h1>
        </div>
      </motion.div>
    </section>
  )
}

export default FooterPage
