import React from 'react'
import calabarlogo from "../../assets/logos/calabarlogo.svg"
import property from "../../assets/logos/propertylogo.png"
import lc from "../../assets/logos/lclogo.svg"
import qrs from "../../assets/logos/qrslogo.png"
import zyon from "../../assets/logos/zyonlogo.svg"

const Clients = () => {
    const clients = [
        { name: "Zyon Technology", logo: zyon },
        { name: "Calabar Tech Community", logo: calabarlogo },
        { name: "QRS Web", logo: qrs },
        { name: "Loading Connect", logo: lc },
        { name: "Property Mataaz", logo: property },
    ]

    return (
        <div className='w-full min-h-[50rem] bg-[#181821] flex justify-center p-4 py-20 lg:p-[10rem]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-[0.82rem] lg:text-xl text-red-700 lg:font-semibold">Top Clients</p>
                    <h2 className='text-3xl lg:text-6xl text-white'>We’ve built solutions for...</h2>
                    <p className="text-[0.82rem] lg:text-base font-semibold text-[#888686]">Design anything from simple icons to fully featured <br /> websites and applications.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[3rem] lg:gap-[10rem]">
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        <div className="bg-[#181821] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                        <img src={clients[0].logo} className='w-[8rem] h-[3rem]' alt="" />
                        <p className='text-white'>{clients[0].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        <div className="bg-[#181821] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                        <img src={clients[1].logo} className='w-[8rem] h-[3rem]' alt="" />
                        <p className='text-white'>{clients[1].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        <div className="bg-[#181821] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                        <img src={clients[2].logo} className='w-[3rem] h-[3rem]' alt="" />
                        <p className='text-white'>{clients[2].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        <div className="bg-[#181821] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                        <img src={clients[3].logo} className='w-[8rem] h-[3rem]' alt="" />
                        <p className='text-white'>{clients[3].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        <div className="bg-[#181821] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                        <img src={clients[4].logo} className='w-[8rem] h-[3rem]' alt="" />
                        <p className='text-white'>{clients[4].name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients