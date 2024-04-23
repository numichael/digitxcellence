import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import Contact from '../home/Contact'

const ServiceDetails = () => {

    const [details, setDetails] = useState({})
    const serviceDetails = sessionStorage.getItem('serviceDetails')
    const navigate = useNavigate()
    useEffect(() => {
        if (serviceDetails) {
            setDetails(JSON.parse(serviceDetails))
        } else {
            navigate("/services")
        }
    }, [])

    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Element className='w-full flex flex-col justify-center' name='home'>
                <div className='w-full flex p-4 py-20 lg:p-[8rem] justify-center text-[0.85rem]'>
                    <div className='w-full flex flex-col lg:flex-row lg:max-w-[90rem] gap-[4rem] lg:gap-[8rem] items-center'>
                        <div className='flex flex-col gap-6 w-full lg:w-[45%]'>
                            {/* <div className='flex gap-3'>
                                {details?.location?.map((entity, index) => (
                                    <div key={index} className=' rounded-md font-medium text-[0.85rem] p-2 border-4 border-green-700'>
                                        {entity}
                                    </div>
                                ))}
                            </div> */}
                            <h2 className='text-3xl text-green-950 lg:text-4xl'>{details?.name}</h2>
                            <div className="flex flex-col gap-6">
                                <p className="text-[0.82rem] lg:text-md">{details?.text}</p>
                                <div className="flex gap-6">
                                    <button type='button' className={`hidden lg:block p-3 px-6 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Apply Now</button>
                                    <button type='button' className={`hidden lg:block p-3 px-6 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Speak to our Consultant</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 p-8 lg:p-0 bg-white w-full h-full lg:w-[55%] rounded-[2rem]'>
                            <img src={details?.image} alt="mobile dev svg" className='h-full w-full scale-105 rounded-md' />
                            <div className="flex flex-col gap-6 lg:hidden">
                                <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Apply Now</button>
                                <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Speak to our Consultant</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex p-4 py-20 lg:p-[4rem] justify-center text-[0.85rem] bg-green-900 text-white">
                    <div className='w-full flex flex-wrap lg:max-w-[90rem] gap-[4rem] justify-evenly items-center max-w-[90rem]'>
                        {
                            details?.expectations?.map((expectation, index) => (
                                <div key={index} className="flex flex-col gap-4 items-center w-[14rem]">
                                    <i className={`${expectation?.icon} text-gray-200 text-[2rem]`}></i>
                                    <p className='text-base font-medium'>{expectation?.name}</p>
                                    <p className='text-[0.8rem] text-center'>{expectation?.text}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <Contact />
            </Element>
        </div>
    )
}

export default ServiceDetails