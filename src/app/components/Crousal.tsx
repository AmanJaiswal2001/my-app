'use client';
import React from 'react'
import { CrosoulCard } from './Card'
import { useRef } from 'react';
const Crousal:React.FC = () => {
 
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const handleLeftClick = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
      };
    
      const handleRightClick = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
      };
 
 
    return (
    <div className='w-full h-screen p-10 bg-[#155ADA]'>
<h3 className= 'font-inter font-medium text-2xl text-white'>
Join other Sun harvesters   
</h3>
 <div className='flex justify-between items-center'>
   <h2 className='font-roboto-condensed font-bold  text-white text-[42px]'>Lorem ipsum dolor sit amet </h2> 
 <button className='w-56 h-10  font-inter font-bold text-sm text-center bg-white'>Lorem Ipsum</button>
 </div>
 <p className='font-inter font-normal text-[18px] w-[60%] h-12 text-white'>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
   
   <div  ref={carouselRef} 
     className='flex mt-20  gap-10 overflow-x-auto snap-x snap-mandatory'>
    <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
    <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
    <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
    <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
  
  <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
   <CrosoulCard 
     image='Icon.png' imageUrl='User.png' text='Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
      textsmall='Jane Cooper' width='w-8' height="w-8"/>
  
   </div>
   
   <div className='flex text-white mt-5 '>
   <svg
   onClick={handleLeftClick}
   xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
   <svg 
   onClick={handleRightClick}
   xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg> </div>
    </div>
  )
}

export default Crousal