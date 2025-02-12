import { Heading } from 'lucide-react';
import React from 'react'

interface DocumantationProps{
    text:string;
    Heading:string;
    size:string;
    width:string;
}



const Documantation: React.FC<DocumantationProps> = ({text,Heading,size,width="w-auto"}) => {
  return (
    <div>
        <h4 className={`font-inter font-semibold text-[20px]  text-center text-[#222222] ${size} ${width} `}>{Heading}</h4>
        <p className={`${width}font-inter font-normal text-[18px] text-center w-[678px]`}>{text}</p>
    </div>
  )
}

export default Documantation