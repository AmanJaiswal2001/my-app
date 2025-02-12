"use client";
import React from 'react'
import  Dropdown  from './Dropdown'
import Button, { LogoButton } from './Button'

const Navbar: React.FC = () =>{

  const handleSelect = (dropdownName: string, option: string) => {
    alert(`Selected from ${dropdownName}: ${option}`);
  };
  return (
    <div className='w-full h-[800px] '>
<div className='flex w-screen'>
  {/* nabar */}
  <div>
<div className='flex  w-full justify-evenly   absolute   '>
  {/* logo */}
  <div className='w-40 h-16  flex items-center justify-center bg-[#DBDBDB]'>
  <p className=' text-center font-inter font-extrabold text-3xl '>LOGO</p>

  </div>
   <div className='flex justify-center w-full pt-5  mx-auto '>
  <Dropdown
        label="Select Frontend Option"
        options={["React", "Vue", "Angular"]}
        onSelect={(option) => handleSelect("Frontend Dropdown", option)}
      />

      <Dropdown
        label="Select Backend Option"
        options={["Node.js", "Django", "Spring Boot"]}
        onSelect={(option) => handleSelect("Backend Dropdown", option)}
      />

      <Dropdown
        label="Select Database Option"
        options={["MongoDB", "PostgreSQL", "MySQL"]}
        onSelect={(option) => handleSelect("Database Dropdown", option)}
      />
      </div>
 {/*
  signup */}

  <div className='relative rounded-sm  w-full right-0  '>
  {/* <button className='font-inter font-bold text-sm '>Sign In</button> */}
  <div  className=' absolute top-5 left-[70%] bg-white p-2 w-32 flex items-center justify-center'>
 <button className='font-inter font-bold text-sm text-center '>Sign In</button>
  </div>
  <img
  className='w-full h-[600px]'
  src="inklings.png"/>
  
  </div>

  
</div>
<div className='relative top-56'>
{/* content */}
<h1 className='font-roboto-condensed w-[550px] bg-red-100 h-36 leading-[70px]  font-bold text-6xl'>Lorem ipsum dolor sit amet</h1>

<p className='font-inter font-normal text-[14px] leading-6 w-[646px]'>Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.</p>
{/* search */}
<div className='flex gap-2'>
  <input type='text'
  className='w-80 border p-2 border-[#C3C3C3] outline-none rounded-md'/>
  <Button 
  text='submit' width="w-32"
  />
</div>

{/* check box */}

<div className='flex gap-2'>
<svg 
className='text-[#1959AC]'
 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg><p className='font-inter font-medium text-sm'>No credit card required!</p>
</div>


{/* button */}
</div>
</div>
{/* img */}

</div>

    </div>
  )
}

export default Navbar