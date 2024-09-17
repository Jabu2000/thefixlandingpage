import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { imgColor1Img, imgColor2Img, imgColor3Img, banerImg, slideImg1, slideImg2, slideImg3, img_fourImg, img_fiveImg, img_sixImg } from '../utils';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
  { url: imgColor1Img, price: 'R199', info: 'Feature-rich product with high performance' },
  { url: imgColor2Img, price: 'R299', info: 'Premium quality with advanced features' },
  { url: imgColor3Img, price: 'R399', info: 'Top-of-the-line product with exceptional benefits' },
];

const slidesCard = [
  { url: slideImg1, price: 'R199', info: 'Feature-rich product with high performance' },
  { url: slideImg2, price: 'R299', info: 'Premium quality with advanced features' },
  { url: slideImg3, price: 'R399', info: 'Top-of-the-line product with exceptional benefits' },
];

const slidesCardOne = [
  { url: img_fourImg, price: 'R199', info: 'Feature-rich product with high performance' },
  { url: img_fiveImg, price: 'R299', info: 'Premium quality with advanced features' },
  { url: img_sixImg, price: 'R399', info: 'Top-of-the-line product with exceptional benefits' },
];

const fadeIn = (direction, type, delay, duration) => ({
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

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const FeaturePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <motion.div
      variants={staggerContainer(0.2, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col w-full bgC justify-center items-center"
    >
      <div className="flex w-full gap-[100px] mx-[500px] mb-[15%]">
        <div className="w-full relative ml-[60px]">
        <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="w-full m-[50px]"
    >
      <div className="h-[700px] w-full flex flex-col justify-center items-center group relative">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-[500px] h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="absolute bottom-10 w-[500px] p-4 bg-black bg-opacity-50 text-white rounded-tl-xl rounded-br-xl">
            <h2 className="text-xl font-bold">{slides[currentIndex].price}</h2>
            <p className="mt-1">{slides[currentIndex].info}</p>
          </div>
        </div>

        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>

        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>

        <div className="flex top-10 justify-center py-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[60px]">
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1)}
            className="flex w-full justify-center items-center"
          >
            <h1 className="split text-[100px] text-black font-bold h-full">New Features</h1>
          </motion.div>

          <div className="flex flex-col gap-10 overflow-hidden group">
            {[0, 1].map((_, idx) => (
              <div key={idx} className="animate-loop-scoll flex flex-row gap-[100px] ml-[20%] w-full group-hover:paused ">
                <div className=" flex gap-10">
                  {
                    slidesCard.map((slide, slideIndex) => (
                      <div key={slideIndex} className="relative">
                        <motion.img
                          variants={fadeIn('left', 'tween', slideIndex * 0.2, 1)}
                          src={slide.url}
                          className="w-[5000px] cursor-pointer rounded-tl-xl rounded-br-xl"
                        />
                        <div className="absolute bottom-0 left-0 p-2 text-opacity-0 text-black hover:bg-black hover:bg-opacity-50 hover:text-white rounded-tl-xl rounded-br-xl cursor-pointer">
                          <h2 className="text-lg font-bold">{slide.price}</h2>
                          <p className="mt-1">{slide.info}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className=" flex gap-10 ">
                  {slidesCardOne.map((slide, slideIndex) => (
                    <div key={slideIndex} className="relative">
                      <motion.img
                        variants={fadeIn('left', 'tween', slideIndex * 0.2, 1)}
                        src={slide.url}
                        className="w-[5000px] cursor-pointer rounded-tl-xl rounded-br-xl"
                      />
                      <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        className="absolute bottom-0 left-0 p-2 text-opacity-0 text-black hover:bg-black hover:bg-opacity-50 hover:text-white rounded-tl-xl rounded-br-xl cursor-pointer">
                        <h2 className="text-lg font-bold">{slide.price}</h2>
                        <p className="mt-1">{slide.info}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        variants={fadeIn('up', 'tween', 1.2, 1)} 
        className="flex mt-[55%] absolute w-full">
        <div className='w-[100%] justify-center items-center mx-[15%]'>
          <img src={banerImg}
            className="w-full flex justify-center" />
          <div className='absolute flex flex-col text-white bottom-[70px] ml-[30px]'>
            <h1 className="font-bold text-[50px]">
              Get the Bash app
            </h1>
            <p className='text-white font-normal'>
              Download to shop SA's most loved brands on the go. Available on your favourite app store.
            </p>
            <button className="w-[170px] text-white hover:text-black h-[50px] text-[15px] bg-black hover:bg-white font-semibold rounded-md flex justify-center items-center gap-2 mt-5" >
              Discover more
              <FaArrowRight className='text-[15px]' />
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default FeaturePage;