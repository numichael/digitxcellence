import React from 'react'
import darkuser from "../../assets/images/darkuser.png"

const Speciality = () => {
    const stats = [
        { icon: darkuser, stat: 360, description: "Years of Operation" },
        { icon: darkuser, stat: 360, description: "Years of Operation" },
        { icon: darkuser, stat: 360, description: "Years of Operation" },
        { icon: darkuser, stat: 360, description: "Years of Operation" },
    ]
    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] pt-[10rem]  pb-[10rem]  px-4 gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10'>
                <p className='text-[0.82rem] lg:text-xl lg:font-semibold text-red-700'>Experts in field</p>
                <h2 className='text-3xl lg:text-6xl'>What makes us special?</h2>
                <p className='text-[0.82rem] lg:text-lg'>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
                <div>
                    <button className='bg-blue-600 rounded-[1rem] p-6 px-16 text-white'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-10">
                {
                    stats.map((stat, index) => (
                        <div className='flex flex-col gap-6 items-center p-20 cursor-pointer bg-transparent bg-gradient-to-r from-[#e4e4ef] to-[#ffffff] transition-all rounded-[3rem]' key={index}>
                            <img className='scale-150 lg:scale-100' src={stat.icon} alt="" />
                            <h3 className='text-blue-500 text-3xl lg:text-6xl'>{stat.stat}+</h3>
                            <p className='text-[#5b5d75] text-base lg:font-medium'>{stat.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Speciality