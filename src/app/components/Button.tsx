import exp from 'constants';
import React from 'react'


interface ButtonProps{
    text:string;
    width?:string;
}


 const Button: React.FC<ButtonProps> = ({text,width="w-auto"}) => {
  return (
    <div className={`flex bg-[#1959AC]  h-12 items-center gap-1 rounded-sm justify-center ${width} `}>
<button className='text-white font-inter font-bold'>{text}
</button>
<svg 
className='text-white'
xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>


    </div>
  )
}
export default Button;

export const LogoButton: React.FC<ButtonProps>=({text,width})=>{
  return(
    <div className={`${width} h-14 bg-[#DBDBDB] flex items-center justify-center `}>
      <button className='font-inter font-extrabold text-3xl text-center'>{text}</button>
    </div>
  )
}
