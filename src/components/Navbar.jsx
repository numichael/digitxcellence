import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    const tabs = [
        "Digital Agency", "Services", "Portfolio", "Pages", "Blog"
    ]
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full p-10 flex items-center max-w-[90rem]'>
                <div className="w-[30%]">
                    <h2 className='text-3xl font-semibold'>Digit Xcellence</h2>
                </div>
                <div className='w-[70%] flex justify-evenly'>
                    {
                        tabs.map((tab, index) => (
                            <div className='flex items-center gap-3 cursor-pointer' key={index}>
                                <p className='text-lg'>{tab}</p>
                                <FontAwesomeIcon icon={faChevronDown} className='text-xs' />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar