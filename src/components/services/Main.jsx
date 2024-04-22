import React from 'react'
import Intro from './Intro'
import Speciality from './Speciality'
import Services from '../home/Services'
import Contact from '../home/Contact'
import { Element } from 'react-scroll'
import AnimatedValues from './AnimatedValues'
import Clients from '../home/Clients'

const CompanyServices = () => {
  return (
    <div className='w-full flex flex-col items-center lg:p-0'>
      <Element className='w-full flex justify-center' name='home'>
        <Intro />
      </Element>
      <Element className='w-full' name='overview'>
        <Services />
      </Element>
      <Element className='w-full' name='values'>
        <AnimatedValues />
      </Element>
      <Element className='w-full' name='clients'>
        <Clients />
      </Element>
      <Element className='w-full' name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default CompanyServices