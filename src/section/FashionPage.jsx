import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { slideImg6 } from '../utils'
import { JacketCard } from '../components/JacketCard';
import { exploreWorlds, exploreWorlds1, exploreWorlds10, exploreWorlds11, exploreWorlds13, exploreWorlds2, exploreWorlds5, exploreWorlds6, exploreWorlds7, exploreWorlds8 } from '../components';
import { Fade, Slide } from 'react-awesome-reveal';

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


const FashionPage = () => {
  const [jacketImg, setjacketImg] = useState(slideImg6);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.10 }}>
      <div className='w-full h-full flex flex-col  bg-[#040404] z-10 mt-[150px] mb-[10%] overflow-hidden'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex flex-col text-white w-full justify-center items-center'>
          <h1 className='text-[80px] font-bold'>New era of fashion</h1>
          <p className='font-semibold text-[18px]'>Celebrate yo self-expression with our gender neutral drip</p>
        </motion.div>

        <div className='flex items-center justify-center mt-[2%] w-full h-[50%] mb-[-80%] overflow-hidden'>

          <div className='w-full flex relative overflow-hidden items-center justify-center gap-[50px] '>
            <div className='w-[30%] flex flex-col gap-[50px]'>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer '>
                <div>
                  {
                    exploreWorlds6.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds10.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds5.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds11.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

              </motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer '>
                <div>
                  {
                    exploreWorlds7.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds10.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds5.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds11.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

              </motion.div>
            </div>

            <div className='w-[30%] flex flex-col gap-[50px]'>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer'>
                <div>
                  {
                    exploreWorlds1.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds8.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds2.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds13.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer'>
                <div>
                  {
                    exploreWorlds1.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds8.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds2.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds13.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            </div>
          </div>

          <div className='w-full justify-center flex mb-[80%] cursor-pointer '>
            <motion.img
              src={jacketImg} className='w-[80%]'
              variants={fadeIn('up', 'tween', 2.0, 1)} />
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:border-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden w-[27%] h-[75%] flex flex-col justify-center  duration-500">
              <div className="space-y-4 pl-[50px]">
                {exploreWorlds.map(({ title }) => {
                  return (
                    <Slide cascade >
                      <Fade cascade damping={0.05}>
                        {title}
                      </Fade>
                      <div>
                        <button className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                          View
                        </button>
                      </div>
                    </Slide>);
                })}
              </div>
            </motion.div>
          </div>

          <div className='w-full flex relative overflow-hidden items-center justify-center gap-[50px] '>
            <div className='w-[30%] flex flex-col gap-[50px]'>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer'>
                <div>
                  {
                    exploreWorlds1.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds8.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds2.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds13.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer'>
                <div>
                  {
                    exploreWorlds1.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds8.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds2.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds13.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            </div>

            <div className='w-[30%] flex flex-col gap-[50px]'>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer '>
                <div>
                  {
                    exploreWorlds6.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds10.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds5.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds11.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

              </motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className='w-full flex flex-col gap-[50px] items-center cursor-pointer '>
                <div>
                  {
                    exploreWorlds7.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds10.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds5.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

                <div>
                  {
                    exploreWorlds11.map((jacket, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                      >
                        <JacketCard
                          imgURL={jacket}
                          changeJacketImage={(jacket) => setjacketImg(jacket)}
                          jacketImg={jacketImg}
                          price={jacket.price}
                          info={jacket.info}
                        />
                      </motion.div>
                    ))
                  }
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  )
}

export default FashionPage