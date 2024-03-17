import React from 'react'
import Intro from './Intro'
import Speciality from './Speciality'
import Services from '../digitalAgency/Services'
import Values from '../digitalAgency/Values'
import Contact from '../digitalAgency/Contact'

const CompanyServices = () => {
  return (
    <div className='w-full flex flex-col items-center lg:p-0'>
      <div className="flex flex-col gap-[10rem]">
        <Intro />
        <Speciality />
      </div>
      <Services />
      <Values />
      <Contact />
    </div>
  )
}

export default CompanyServices