import React, { useLayoutEffect, useRef } from 'react';
import gsap, { Expo } from "gsap";
import { LogoImg } from '../utils';
import CenterImage from '../components/CenterImage';

const SECTION_HEIGHT = 1550;

const HeroLanding = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                repeat: 0, repeatDelay: 1, yoyo: true
            });
            t1
                .from("#logo-slider", {
                    scaleY: "0%",
                    yPercent: "-100",
                    ease: Expo.easeInOut,
                    delay: 1.3,
                    transformOrigin: "100% 0%"
                })
                .to("#logo-slider", {
                    scaleY: "100%",
                    ease: Expo.easeInOut,
                    delay: 1.3,

                })
                .to("#logo-slider", {
                    scaleY: "2%",
                    delay: 1,
                    transformOrigin: "100% 0%"
                })
                .to("#intro-slider", {
                    yPercent: "-100",
                    duration: 0.5,
                })
                .to("#intro-slider_one", {
                    yPercent: "-100",
                    duration: 1.5,
                })
                .from("#welcome", {
                    opacity: 0,
                    duration: 0.5,
                })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div className='relative' ref={comp}>
            <div id='intro-slider' className='h-screen bg-[#040404] absolute top-0 left-0 z-20 w-full flex justify-center items-center '>
                <div className='bg-white w-fit xl:h-[20%] h-[25%]-' id='logo-slider'>
                    <img src={LogoImg} />
                </div>
            </div>
            <div id='intro-slider_one' className='bg-white z-10 absolute w-full h-full object-cover' />
            <div
                style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
                className="relative w-full"
            >
                <CenterImage />
                
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
            </div>
        </div>
    )
}

export default HeroLanding