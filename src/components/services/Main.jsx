import React from 'react'
import Intro from './Intro'
import Speciality from './Speciality'
import Services from '../digitalAgency/Services'
import Values from '../digitalAgency/Values'
import Contact from '../digitalAgency/Contact'
import { Element } from 'react-scroll'
import ServicesList from './ServicesList'

const CompanyServices = () => {
  return (
    <div className='w-full flex flex-col items-center lg:p-0'>
      <div className="flex flex-col gap-[10rem]">
        <Element className='w-full' name='home'>
          <Intro />
        </Element>
        <Element className='w-full' name='speciality'>
          <Speciality />
        </Element>
      </div>
      <Element className='w-full' name='values'>
        <Values />
      </Element>
      <Element className='w-full' name='overview'>
        <Services />
      </Element>
      <Element className='w-full' name='servicesList'>
        <ServicesList />
      </Element>
      <Element className='w-full' name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default CompanyServices