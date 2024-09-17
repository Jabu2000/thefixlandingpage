import React from "react";
import { slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, slideImg6 } from '../utils'
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: slideImg1,
    title: "Sunset",
    desc: "Each character will appear one by one",
    start:`${-200}`,
    end:`${500}`,
    className: "w-[20%] h-full",
  },
  {
    id: 2,
    img: slideImg2,
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 3,
    img: slideImg3,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
];
const CardAnimation = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Responsive Animated Card
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardAnimation;