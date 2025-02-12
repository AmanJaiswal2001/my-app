import React from 'react'
import Documantation from './Documantation'
import Image from 'next/image'
const SectionSnd:React.FC = () => {
  return (
    <>
    <div className='w-full h-[1019px] pt-10'>

<p className='font-inter font-semibold text-2xl px-10 text-[#0546D2]'>Lorem ipsum dolor sit amet</p>
 <div className='flex justify-between'>
 <div className='px-10'>
<p className='font-bold text-4xl font-roboto-condensed w-[435px] h-36 uppercase'>Lorem ipsum dolor sit amet consectetur. Eu elit.</p>
   <div>
    <Documantation 
    width=''
    size=''
    Heading=''
    text="Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare."/>
   </div>
<div className='mt-5'>
   <div className='flex gap-2'>
    <Image 
    className='w-9 h-9'
    src="/Sure-Drive.png" alt="" width={500} height={300} />
    <Documantation 
    width=''
    size=''

    Heading='Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.'
    text="Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare."/>
   </div>
   <div className='flex gap-2'>
    <Image 
    className='w-9 h-9'
    src="/Sure-Drive.png" alt=''width={500} height={300} />
    <Documantation 
     width=''
    size=''
    Heading='Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.'
    text="Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare."/>
   </div>
   <div className='flex gap-2'>
    <Image 
    className='w-9 h-9'
    src="/Sure-Drive.png" alt=''width={500} height={300} />
    <Documantation 
     width=''
    size=''
    Heading='Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.'
    text="Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare."/>
   </div>
   </div>
   </div>
   <Image 
   className='w-[600px] h-[500px]'
   src="/supernova.png" alt=''width={500} height={300} />
   </div>
   <div className="relative min-h-screen w-full ">
  <div className="bg-custom-gradient w-[95%] h-5 absolute mt-10  right-0 m-auto" />
</div> 
 </div>


</>
  )
}

export default SectionSnd