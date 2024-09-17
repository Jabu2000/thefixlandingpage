import React from 'react'
import { FaBars, FaCartShopping, FaLocationDot, FaMagnifyingGlass, FaUser } from 'react-icons/fa6';

function Nav() {
  return (
    <div className="flex justify-between w-full transition-all duration-200 top-0 px-[80px] py-[25px] cursor-pointer sticky" >
      <div className="flex  items-center gap-6 ">
        <div className='flex gap-3 cursor-pointer'>
          <FaBars alt='menu' className='w-[20px] h-[20px]  text-white' />
          <div className='font-semibold text-[12px] text-white'>
            Menu
          </div>
        </div>
        <div className='flex gap-3 cursor-pointer'>
          <FaMagnifyingGlass alt='Search' className='w-[20px] h-[20px]  text-white' />
          <div className='font-semibold text-[12px] text-white'>
            Search
          </div>
        </div>
      </div>
      <div className="flex  items-center gap-6 ">
        <FaUser
          alt='User'
          className='nav-link w-[20px] h-[20px] cursor-pointer text-white' />
        <FaCartShopping
          alt='Cart'
          className="nav-link w-[20px] h-[20px] cursor-pointer text-white"
        />
        <FaLocationDot
          alt='Location'
          className="nav-link w-[20px] h-[20px] cursor-pointer text-white"
        />
      </div>
    </div>
  )
}

export default Nav