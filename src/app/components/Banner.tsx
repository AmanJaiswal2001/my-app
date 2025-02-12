import React from 'react'


const Banner = () => {
  return (
    <div className='w-full h-screen relative'>
        <div className='w-full h-[652px]'>
            <img 
            className='w-full h-[652px]'
            src="relaxat.png" alt="relaxat.png"/>
        </div>

        <div className='absolute top-0 left-0'>
        <div className='w-40 h-16 m-10 flex items-center justify-center bg-[#DBDBDB]'>
  <p className=' text-center font-inter font-extrabold text-3xl '>LOGO</p>

  </div>
  <div className=" relative left-60 top-5 flex flex-col items-center  text-white  h-screen">
    <p className="uppercase font-roboto-condensed font-bold text-5xl text-white text-center max-w-[900px]">
      Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
    </p>
    <p className='font-inter font-semibold text-[18px]  max-w-[732px]'>Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.</p>
    <p className='font-inter font-semibold text-[18px] max-w-[732px]'>Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.</p>

  </div>
        </div>
    </div>
  )
}

export default Banner