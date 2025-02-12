import React from 'react'
import { text } from 'stream/consumers';


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


const Card: React.FC<CardProps> = ({ imageUrl, text }) => {
  return (
    <div>
<div className='flex gap-1 w-1/2   items-center '>
   <div className='w-1/4  object-cover'>
    <img
    className='w-36  h-36 object-cover ' 
    src={imageUrl} alt="card Image"/>
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
<img 
className={`${width} ${height} `}
src={imageUrl}/>
)
}

export const CrosoulCard:React.FC<CrosoulCard>=({imageUrl,width,height,text,textsmall,image})=>{
  return(
 
 <div className='w-screen'> 
 <div className='w-80  h-96 bg-white p-10 rounded-lg  transform transition-transform hover:scale-105'>
    <img 
  className={`${width} ${height} `}
  src={image}/>

<p className='font-inter font-normal text-[18px] mt-5 '>{text}</p>
<div className='flex gap-2 mt-5'>
  <img  className={`${width}`}
  src={imageUrl}/>
  <p className='font-inter font-normal text-[18px] '>{textsmall}</p>
</div>
</div>
</div>

  )
  }