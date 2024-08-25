import React from 'react'
import {Icon} from "@iconify/react"
const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div>
    <img src={"logoo.jpeg"}  className='text-black w-24 h-24'  alt="" />
        </div>
        <div className='lg:mt-[2%] lg:mr-[2%]'>
        <Icon icon="icon-park:logout" className='h-8 w-8 hover:bg-blue-700 rounded-full cursor-pointer duration-200 ease-in-out p-1 ' />
        </div>
    </div>
  )
}

export default Navbar