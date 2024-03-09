import React from 'react'

const Pricing = () => {
    return (
        <div className='w-full min-h-[50rem] flex p-[10rem] justify-center bg-[#d8e6eb77]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[6rem]'>
                <div className='flex flex-col items-center gap-6'>
                    <p className="text-xl text-red-700 font-semibold">Pricing Plan</p>
                    <h2 className='text-6xl'>We’ve built solutions for...</h2>
                    <p className="text-lg  w-[40rem] text-center">Flexible pricing options for freelancers and design teams.</p>
                </div>
                <div className='flex justify-center'>
                    <div className="w-[25rem] h-20 rounded-[2rem] bg-white border border-[#d8e6eb77] flex gap-3 p-1 items-center">
                        <button className='w-1/2 h-[90%] bg-white focus:bg-blue-500 transition-all duration-500 rounded-[1rem] focus:text-white font-semibold'>Billed Yearly</button>
                        <button className='w-1/2 h-[90%] bg-white focus:bg-blue-500 transition-all duration-500 rounded-[1rem] focus:text-white font-semibold'>Billed Monthly</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing