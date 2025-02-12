'use client'
import React, { useState } from 'react'
import { LogoButton } from './Button';
import Documantation from './Documantation';

const Accordian: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqData = [
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
        },
      ];
    
  
    return (
        <>
    <div className='w-full bg-[#FBFBFB] p-20 m-auto '>
    <p className='font-bold font-roboto-condensed text-[42px]'>FREQUENTLY ASKED QUESTIONS (FAQs)</p>
  <div>
  <main className='mt-10'>
        {faqData.map((item, index) => (
          <div key={index} className=" p-4  w-[80%]  border  mt-2  ">
            <div className="flex justify-between  items-center gap-2 ">
              <p className="text-lg font-semibold">{item.question}</p>
              <button
                className="text-2xl font-bold "
                onClick={() => setOpenIndex(openIndex === index ? 0 : index)}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <div className="mt-4">
                <p className="text-base w-[60%]">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </main>
  </div>
  {/* <div>
    <p>Lorem ipsum dolor sit amet consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
 +
  </div>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
 +
  </div> */}
  
   </div>
<div className='flex flex-col mt-20 justify-center gap-4 items-center'>
   <LogoButton text='LOGO' width='w-44'/>
   <Documantation Heading='Lorem ipsum dolor sit amet consectetur. Dui.'
    text='Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.'
    size='text-[42px]'
    width='w-[650px]'
    />
   
   </div>
   </>
  )
}

export default Accordian