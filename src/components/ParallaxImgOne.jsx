import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 2,
    title: "Dog",
    desc: "Each character will appear one by one",
  },
];

const ParallaxImgOne = ({ className, alt, src, start, end, id }) => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: [`${start}px end`, `end ${end * -1}px`],
  // });
  // const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  // const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  // const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <>
      <motion.div className="text-white ">
        {CardsData.map(({ title, desc, id }) => {
          return (
            <Slide 
              cascade
              key={id}
            >
              <h1 className="text-3xl font-bold">{title}</h1>
              <Fade cascade damping={0.05}>
                {desc}
              </Fade>
              <div>
                <button className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                  View
                </button>
              </div>
            </Slide>
          );
        })}
      </motion.div>
    </>
  )
}

export default ParallaxImgOne