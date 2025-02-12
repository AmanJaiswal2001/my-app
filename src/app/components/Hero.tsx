
import React from 'react'
import Section from './Section'
import SectionSnd from './SectionSnd'
import Banner from './Banner'
import Bannersnd from './Bannersnd'
import Form from './Form'
import Crousal from './Crousal'
import Accordian from './Accordian'
import Footer from './Footer'

const Hero = () => {
  return (
    <div className='w-full h-screen '>
<div>
<Section/>
</div>
        <div className='mt-36 '>
        <SectionSnd/>
        </div>
        <div className='w-full '>
        <Banner/>
        <Bannersnd/>
        </div>
      <Form/>
      <Crousal/>
      <Accordian/>

      <Footer />
     
    </div>
  )
}

export default Hero