import React from 'react'

const Intro = () => {
    return (
        <div className='w-full h-screen max-h-[50rem] max-w-[90rem] flex items-center'>
            <div className='w-1/2 flex flex-col gap-10'>
                <h1 className='font-semibold text-7xl'>Build beautiful websites & mobile apps.</h1>
                <p className='text-lg'>Create live segments and target the right people for messages based on their behaviors.</p>
                <div>
                    <button className='bg-blue-600 rounded-lg p-6 text-white'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='w-1/2'></div>
        </div>
    )
}

export default Intro