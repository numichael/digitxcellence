import React from 'react'
import Intro from './Intro'
import Speciality from './Speciality'
import Services from '../digitalAgency/Services'
import Values from '../digitalAgency/Values'
import Contact from '../digitalAgency/Contact'
import { Element } from 'react-scroll'
import AnimatedValues from './AnimatedValues'

const CompanyServices = () => {
  return (
    <div className='w-full flex flex-col items-center lg:p-0'>
      <Element className='w-full flex justify-center' name='home'>
        <Intro />
      </Element>
      <Element className='w-full' name='overview'>
        <Services />
      </Element>
      {/* <Element className='w-full' name='values'>
        <Values />
      </Element> */}
      <Element className='w-full' name='animatedvalues'>
        <AnimatedValues />
      </Element>
      <Element className='w-full' name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default CompanyServices