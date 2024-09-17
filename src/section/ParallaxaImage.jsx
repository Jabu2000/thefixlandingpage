import React from "react";
import { slideImg10, slideImg11, slideImg12, slideImg13, slideImg14, slideImg15, slideImg16,slideImg7, slideImg8, slideImg9 } from '../utils'
import { ParallaxImg, ParallaxImg1, ParallaxImg2, ParallaxImg3, ParallaxImg4, ParallaxImg5, ParallaxImg6, ParallaxImg7, ParallaxImg8, ParallaxImg9 } from "../components/ParallaxImg";
import ScrollToTop from "../components/ScrollToTop";

const ParallaxImages = () => {

  return (
    <div className="relative z-20 w-full h-full ">
      <div className="mx-auto max-w-7xl px-4 w-full z-40  justify-between ">
        <ScrollToTop />
        <ParallaxImg
          src={slideImg16}
          alt="And example of a space launch"
          start={500}
          end={-300}
          className="w-[24%]"
        />
        <ParallaxImg1
          src={slideImg15}
          alt="An example of a space launch"
          start={300}
          end={-500}
          className="ml-[35%] w-[24%]"
        />
      </div>
      <div className='sticky top-0 h-screen text-white opacity-[10%] w-full flex justify-center items-center'>
        
        <h1 className='text-[130px] font-bold justify-center'>
          New Future Styles
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 w-full z-30 pt-[180px] justify-between overflow-hidden">
        <ParallaxImg2
          src={slideImg14}
          alt="Orbiting satellite"
          start={-200}
          end={2800}
          className="ml-[70%] w-[24%]"
        />
        <ParallaxImg3
          src={slideImg13}
          alt="And example of a space launch"
          start={-200}
          end={200}
          className="w-[24%] "
        />
        <ParallaxImg4
          src={slideImg12}
          alt="An example of a space launch"
          start={200}
          end={-250}
          className="ml-[35%] w-[24%]"
        />
        <ParallaxImg5
          src={slideImg11}
          alt="Orbiting satellite"
          start={-200}
          end={200}
          className="ml-[70%] w-[30%]"
        />
        <ParallaxImg6
          src={slideImg10}
          alt="Orbiting satellite"
          start={0}
          end={-500}
          className="ml-24 w-[30%]"
        />
        <ParallaxImg7
          src={slideImg9}
          alt="An example of a space launch"
          start={200}
          end={-250}
          className="ml-[35%] w-[24%]"
        />
        <ParallaxImg8
          src={slideImg8}
          alt="Orbiting satellite"
          start={-200}
          end={200}
          className="ml-[70%] w-[30%] mt-[15%]"
        />
        <ParallaxImg9
          src={slideImg7}
          alt="Orbiting satellite"
          start={0}
          end={-500}
          className="ml-24 w-[30%]"
        />
      </div>         
    </div>
  )
}

export default ParallaxImages
