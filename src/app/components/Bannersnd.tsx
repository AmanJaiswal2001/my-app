import React from 'react'
import { SmallCard } from './Card'

const Bannersnd: React.FC = () => {
  return (
    <div className='w-full'>
        <p className='font-roboto-condensed font-bold text-4xl  m-auto text-center w-[655px]'>Lorem ipsum dolor sit amet consectetur. Commodo leo amet.</p>
    
    <div className='w-[80%] h-24 mt-10 flex items-center justify-evenly m-auto'>
        <SmallCard  imageUrl='Hero.png' width='w-24' text='' height='h-24'/>
        <SmallCard  imageUrl='Honda1.png' width='w-24' text='' height='h-24'/>
        <SmallCard  imageUrl='bazaz.png' width='w-24' text='' height='h-21'/>
        <SmallCard  imageUrl='TVS.png' width='w-24' text='' height='h-21'/>
   
    </div>
    <div className='w-[90%] mt-10 h-20 flex items-center justify-evenly m-auto'>
        <SmallCard  imageUrl='royal.png' width='w-54' text='' height='h-14'/>
        <SmallCard  imageUrl='ya.png' width='w-44' text='' height='h-15'/>
        <SmallCard  imageUrl='KTM.png' width='w-36' text='' height='h-13'/>
        <SmallCard  imageUrl='AtherLog.png' width='w-54' text='' height='h-20'/>
   
    </div>
    <div className='w-[85%] mt-10 h-36 flex items-center justify-evenly m-auto'>
        <SmallCard  imageUrl='Ola.png' width='w-54' text='' height='h-14'/>
        <SmallCard  imageUrl='new.png' width='w-40' text='' height='h-20'/>
        <SmallCard  imageUrl='Ultravi.png' width='w-74' text='' height='h-15'/>
        <SmallCard  imageUrl='ANI.png' width='w-28' text='' height='h-36'/>
   
    </div>
    
    </div>
  )
}

export default Bannersnd