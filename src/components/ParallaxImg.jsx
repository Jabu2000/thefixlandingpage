import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const CardsData = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 599,
  },
]

const CardsData1 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 399,
  },
]

const CardsData2 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 199,
  },
]

const CardsData3 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 699,
  },
]

const CardsData4 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 599,
  },
]

const CardsData5 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 399,
  },
]

const CardsData6 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 199,
  },
]

const CardsData7 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 699,
  },
]

const CardsData8 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 599,
  },
]

const CardsData9 = [
  {
    id: 1,
    info: 'Top-of-the-line product with exceptional benefits',
    price: 399,
  },
]


export const ParallaxImg = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer `}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:border-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] duration-500 w-[16%]">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg1 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] w-[16%] duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData1.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg2 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] w-[16%]  duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData2.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg3 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] w-[16%] duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData3.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg4 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] w-[16%] duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData4.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg5 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[8.3%] w-[20%]  duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData5.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg6 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[8.5%] w-[20%] duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData6.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg7 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer `}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:border-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[6.5%] duration-500 w-[16%]">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData7.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg8 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[8.7%] w-[16%] duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData8.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

export const ParallaxImg9 = ({ className, alt, src, start, end, }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`, `text-white`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`${className} rounded-lg flex cursor-pointer`}>
      <motion.img
        src={src}
        alt={alt}
        ref={ref}
        style={{ transform, opacity }}
      />
      <motion.div
        ref={ref}
        style={{ transform, opacity }}
        className="absolute opacity-0 hover:opacity-100 text-white text-opacity-0 hover:text-opacity-100 hover:text-white hover:bg-black/60 hover:backdrop-blur-sm p-4 pt-[-50%] overflow-hidden h-[8.7%] w-[16%]  duration-500">
        <div className="space-y-4 flex items-center w-full gap-10 mt-[20%]">
          {CardsData9.map(({ info, price }) => {
            return (
              <div className="w-[80%]">
                <p>{info}</p>
                <h1 className="text-3xl font-bold my-[20px]">R{price}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  )
}

