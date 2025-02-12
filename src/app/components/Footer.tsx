import React from 'react'
import { LogoButton } from './Button'
import Hero from './Hero'

const Footer = () => {
  return (
    <div className='w-full h-[536px] relative bg-black bottom-0'>
 <div className='p-10 flex justify-between'>
 <LogoButton text="LOGO" width='w-32' />
 <div className='flex flex-col p-10 w-1/3 text-white gap-5'>
    {/* line1 */}
    <p className='font-bold font-inter text-[20px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>


 </div>
 <div className='flex flex-col w-1/3 p-10 text-white gap-5'>
    {/* line1 */}
    <p className='font-bold font-inter text-[20px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    {/* <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p> */}


 </div>
 <div className='flex flex-col w-1/3 p-10 text-white gap-5'>
    {/* line1 */}
    <p className='font-bold font-inter text-[20px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    {/* <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p> */}


 </div>
 <div className='flex flex-col w-1/3 p-10 text-white gap-5'>
    {/* line1 */}
    <p className='font-bold font-inter text-[20px]'>Lorem Ipsum</p>
    <p className='font-normal font-inter text-[18px]'>Lorem Ipsum</p>
  

 </div>
 </div>
    </div>
  )
}

export default Footer