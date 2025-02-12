import React from 'react'
import Card from './Card'
import Button from './Button'

const Section:React.FC = () => {
  return (
  <div className='w-full h-screen  '>
  <div className='flex justify-between p-10 m-10 shadow-lg border border-[#D4D4D4]'>
   <div className=''>
        <p className='font-inter font-medium text-2xl text-[#0546D2]'>Lorem ipsum dolor sit</p>
   <h1 className='text-4xl font-roboto-condensed font-bold w-80 h-24'>Lorem ipsum dolor sit amet</h1>
   <p className='w-[593px] h-20 font-inter font-normal text-sm'>Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>
   <div className='flex flex-col gap-5 w-full justify-center  '>
   <Card
   imageUrl='bike.png'
   text="Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."
   />
    <Card
   imageUrl='marketing.png'
   text="Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."
   />
    <Card
   imageUrl='pro.png'
   text="Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."
   />
   </div>
<div className='pt-5 flex items-center gap-2'>
   <Button text="Loerum Ipsum" width='w-44'/>
  <div className='flex gap-0'>  
  <svg className='text-[#043898]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"/></svg>
   <span className='text-[#043898]'> 123456789</span>
  </div>

   </div>
    </div>
<div className='w-1/2 '>
    <img 
    className=' w-full'
    src="twoWheel.png"/>
</div>

    </div>
    <div className='bg-custom-gradient w-[90%] h-5 m-10 -mt-14'></div>
    </div>

  )
}

export default Section