import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [tabs, setTabs] = useState([
        {
            name: "Digital Agency", display: false, options: [
                { name: "Digital Agency", path: "/" },
                { name: "Creative Agency", path: "/creative-agency" },
                { name: "Corporate Agency" },
                { name: "Personal Portfolio" },
                { name: "Home Startup" },
                { name: "RTO Demo" },
            ]
        },
        // {
        //     name: "Services", display: false, options: [
        //         { name: "Service" },
        //         { name: "Service One" },
        //         { name: "Service Two" },
        //     ]
        // },
        {
            name: "Portfolio", display: false, options: [
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
            ]
        },
        {
            name: "Pages", display: false, options: [
                { name: "About Us" },
                { name: "Our Office" },
                { name: "Case Study" },
                { name: "Case Study Details" },
                { name: "Team" },
                { name: "Team Details" },
                { name: "Testimonial" },
                { name: "Pricing Table" },
                { name: "Typography" },
                { name: "404 Page" },
                { name: "Coming Soon" },
            ]
        },
        {
            name: "Blog", display: false, options: [
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
            ]
        }
    ])

    const toggleOptions = (payload) => {
        setTabs(prevTabs => prevTabs.map(tab => {
            if (tab.name === payload) {
                return { ...tab, display: !tab.display };
            }
            return tab;
        }));
    }

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

    const navigate = useNavigate()


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
                                <div className="flex flex-col relative" onMouseEnter={() => toggleOptions(tab.name)} onMouseLeave={() => toggleOptions(tab.name)}>
                                    <div className='flex items-center gap-3 cursor-pointer z-10' key={index}>
                                        <p className='text-lg font-medium'>{tab.name}</p>
                                        <FontAwesomeIcon icon={faChevronDown} className='text-xs' />
                                    </div>
                                    <div className={`flex z-10 flex-col border-l border-b gap-5 absolute top-6 w-[13rem] transition-all duration-500 bg-white ${tab.display ? "opacity-1 left-0 min-h-[8rem] p-4 blur-border" : "opacity-0 left-10 overflow-hidden h-[0]"}`}>
                                        {
                                            tab.options.map((tab) => (
                                                <div className='text-[#5b5d75] text-[0.85rem] lg:text-base cursor-pointer font-medium' onClick={() => navigate(tab.path)}>
                                                    {tab.name}
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                            ))
                        }
                        <div className='flex items-center gap-3 cursor-pointer z-10'>
                            <p className='text-lg font-medium' onClick={() => navigate("/services")}>Services</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer z-10'>
                            <p className='text-lg font-medium'>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar