import React from 'react';

const Hero = () => {

    return (
        <div className='absolute w-full h-full flex justify-center items-center z-10' >
            <div className="sticky-0 mt-[200px] w-full flex-col  flex justify-center items-center">
                <h1 id='box-header-1' className="font-bold text-white text-[80px]">
                    DNM S24 edit
                </h1>
                <button
                    type="button"
                    className="bg-white flex justify-center p-[15px] items-center ">
                    <span className=" text-[15px] text-gray-400 font-semibold ">
                        EXPLOPE THE COLLECTION
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Hero