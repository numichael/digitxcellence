import React from 'react'
import user from "../../assets/images/user.png"
const Stats = () => {
    const stats = [
        { icon: user, stat: 360, description: "Years of Operation" },
        { icon: user, stat: 360, description: "Years of Operation" },
        { icon: user, stat: 360, description: "Years of Operation" },
        { icon: user, stat: 360, description: "Years of Operation" },
    ]
    return (
        <div className='w-full min-h-[50rem] flex p-[10rem] justify-center bg-[#181821]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[6rem]'>
                <div className='flex flex-col items-center gap-6'>
                    <p className="text-xl text-red-700 font-semibold">Featured Case Study</p>
                    <h2 className='text-6xl mb-6 text-white'>Design startup movement</h2>
                    <p className="text-lg text-[#888686] w-[40rem] text-center">In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
                </div>
                <div className="flex justify-between">
                    {
                        stats.map((stat, index) => ( 
                            <div className='flex flex-col gap-6 items-center p-20 cursor-pointer bg-transparent hover:bg-gradient-to-b from-[#181821] to-[#404040] transition-all border-t border-[#181821]  hover:border-t-[#454546] rounded-[3rem]' key={index}>
                                <img className='w-10 h-10' src={stat.icon} alt="" />
                                <h3 className='text-blue-500 text-6xl'>{stat.stat}+</h3>
                                <p className='text-white'>{stat.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stats