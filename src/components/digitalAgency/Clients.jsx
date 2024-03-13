import React from 'react'
import nexou from "../../assets/images/nexou.png"

const Clients = () => {
const clients = [
    nexou,
    nexou,
    nexou,
    nexou,
    nexou,
    nexou,
    nexou,
    nexou
]

    return (
        <div className='w-full min-h-[50rem] bg-[#181821] flex justify-center p-4 py-20 lg:p-[10rem]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-[0.85rem] lg:text-xl text-red-700 lgfont-semibold">Top Clients</p>
                    <h2 className='text-3xl lg:text-6xl text-white'>We’ve built solutions for...</h2>
                    <p className="text-[0.85rem] lg:text-lg font-semibold text-[#888686]">Design anything from simple icons to fully featured <br /> websites and applications.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-[6rem]">
                    {
                        clients.map((client,index)=> (
                            <div className='relative flex justify-center'>
                                <div className="bg-[#181821] opacity-[60%] hover:bg-transparent transition-all duration-500 w-full h-full absolute"></div>
                             <img key={index} src={client} className='w-[8rem] h-[5rem] lg:w-auto lg:h-auto' alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients