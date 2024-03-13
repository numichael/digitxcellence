import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const tabs = [
        "Digital Agency", "Services", "Portfolio", "Pages", "Blog"
    ]
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, setVisible]);

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`w-full ${visible ? "opacity-1" : "opacity-0"} transition-all duration-500 z-[1000] hidden lg:flex justify-center fixed top-0 bg-white`}>
                <div className="w-full max-w-[90rem] p-10 flex items-center justify-center">
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
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar