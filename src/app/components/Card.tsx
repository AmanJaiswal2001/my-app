import React from 'react'

import Image from "next/image";

interface CardProps{
    imageUrl:string;
    text:string;
    width:string;
    height:string;
}

interface CrosoulCard {
  image:string;
  imageUrl:string;
    text:string;
    width:string;
    height:string;
    textsmall:string;

}


const Card: React.FC<CardProps> = ({ imageUrl, text, }) => {
  return (
    <div>
<div className='flex gap-1 w-1/2   items-center '>
   <div className='w-1/4  object-cover'>
    <Image
    className='w-36  h-36 object-cover ' 
    src={imageUrl} alt="card Image" width={500} height={300} />
    </div>
    <p className='font-inter w-2/3'>
        {text}
        </p>
        </div>

    {/* <div></div>     */}

    </div>
  )
}

export default Card


export const SmallCard:React.FC<CardProps>=({imageUrl,width,height})=>{
return(
<Image 
className={`${width} ${height} `}
src={imageUrl} alt="abc" width={500} height={300} />
)
}

export const CrosoulCard:React.FC<CrosoulCard>=({imageUrl,width,height,text,textsmall,image})=>{
  return(
 
 <div className='w-screen'> 
 <div className='w-80  h-96 bg-white p-10 rounded-lg  transform transition-transform hover:scale-105'>
    <Image 
  className={`${width} ${height} `}
  src={image} alt="abc" width={500} height={300} />

<p className='font-inter font-normal text-[18px] mt-5 '>{text}</p>
<div className='flex gap-2 mt-5'>
  <Image  className={`${width}`}
  src={imageUrl} alt="abc" width={500} height={300} />
  <p className='font-inter font-normal text-[18px] '>{textsmall}</p>
</div>
</div>
</div>

  )
  }