import React from 'react'
import calabarlogo from "../../assets/logos/calabarlogo.svg"
import property from "../../assets/logos/propertylogo.png"
import lc from "../../assets/logos/lclogo.svg"
import qrs from "../../assets/logos/qrslogo.png"
import zyon from "../../assets/logos/zyonlogo.svg"
import tken from "../../assets/logos/tken.png"

const Clients = () => {
    const clients = [
        { name: "Zyon Technology", logo: zyon },
        { name: "Calabar Tech Community", logo: calabarlogo },
        { name: "QRS Web", logo: qrs },
        { name: "Loading Connect", logo: lc },
        { name: "Property Mataaz", logo: property },
        { name: "Tken", logo: tken },
    ]

    return (
        <div className='w-full min-h-[50rem] bg-white flex justify-center p-4 py-20 lg:p-[10rem]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-[0.82rem] lg:text-xl text-red-700 lg:font-semibold">Top Clients</p>
                    <h2 className='text-3xl lg:text-6xl text-green-950'>Clients we've worked with</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[3rem] lg:gap-[10rem] text-[0.75rem] lg:text-[0.9rem]">
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[0].logo} className='w-[6rem] h-[2rem] lg:w-[8rem] lg:h-[3rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[0].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[1].logo} className='w-[6rem] h-[2rem] lg:w-[8rem] lg:h-[3rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[1].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[2].logo} className='w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[2].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[4].logo} className='w-[12rem] h-[2rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[4].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[3].logo} className='w-[6rem] h-[2rem] lg:w-[8rem] lg:h-[3rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[3].name}</p>
                    </div>
                    <div className='relative flex flex-col gap-2 items-center justify-center'>
                        {/* <div className="bg-[white] hidden lg:block opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div> */}
                        <img src={clients[5].logo} className='w-[6rem] h-[2rem] lg:w-[8rem] lg:h-[3rem]' alt="" />
                        <p className='text-green-800 text-center'>{clients[5].name}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Clients