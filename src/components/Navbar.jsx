import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { scroller } from 'react-scroll'

const Navbar = () => {

    const [tabs, setTabs] = useState([
        { name: "Home", path: "/home home", display: false },
        { name: "Services", path: "/services home", display: false },
        { name: "Academy", path: "/academy home", display: false }
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

    const location = useLocation()

    const redirectPath = (payload) => {
        if (location.pathname.includes(payload.split(' ')[0])) {
            scroller.scrollTo(payload.split(' ')[1], { smooth: true, duration: 500 })
        } else {
            navigate(payload.split(' ')[0])
            setTimeout(() => {
                scroller.scrollTo(payload.split(' ')[1], { smooth: true, duration: 500 })
            }, 20);
        }
        toggleMobileMenu(!visibleMobileMenu)
    }

    const [visibleMobileMenu, toggleMobileMenu] = useState(false)

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`fixed top-0 right-0 p-3 h-screen ${visibleMobileMenu ? "bg-white w-5/6 border-r border-#333" : "w-0 bg-transparent"} ${visible && visibleMobileMenu ? "opacity-1" : visible && !visibleMobileMenu ? "opacity-1" : !visible && visibleMobileMenu ? "opacity-1" : "opacity-0"} transition-all duration-500 z-[1000] block lg:hidden`}>
                <FontAwesomeIcon icon={faBars} className='text-xl absolute right-4' onClick={() => toggleMobileMenu(!visibleMobileMenu)} />
                <div className={`flex flex-col pl-6 h-full py-10 transition-all duration-500 ${visibleMobileMenu ? "opacity-1 bg-white w-full" : "bg-transparent opacity-0 w-0"}`}>
                    <h2 className={`text-green-700 text-4xl pb-[4rem] font-semibold ${visibleMobileMenu ? "w-auto" : "w-0"}`} onClick={() => redirectPath("/home home")}>Digit Xcellence</h2>
                    <div className='flex flex-col gap-10 pb-10'>
                        {
                            tabs.map((tab, index) => (
                                <div key={index} className={`text-xl font-semibold ${visibleMobileMenu ? "w-auto" : "w-0"}`} onClick={() => redirectPath(tab.path)}>
                                    {tab.name}
                                </div>
                            ))
                        }
                    </div>
                    <div onClick={() => redirectPath("/contact home")} className={`text-xl font-semibold ${visibleMobileMenu ? "w-auto" : "w-0"}`}
                    >Contact</div>
                </div>
            </div>
            <div className={`w-full ${visible ? "opacity-1 p-8" : "opacity-0 p-0"} transition-all duration-500 z-[1000] hidden lg:flex justify-center fixed top-0 bg-white`}>
                <div className="w-full max-w-[90rem] flex items-center justify-center">
                    <div className="w-[30%]">
                        <h2 className='text-3xl font-semibold'>Digit Xcellence</h2>
                    </div>
                    <div className='w-[70%] flex justify-evenly'>
                        {
                            tabs.map((tab, index) => (
                                <div key={index} className="flex flex-col relative" onMouseEnter={() => toggleOptions(tab.name)} onMouseLeave={() => toggleOptions(tab.name)}>
                                    <div className='flex items-center gap-3 cursor-pointer z-10'>
                                        <p className='text-base font-medium border-b-2 border-transparent transition-all duration-500 hover:border-green-700' onClick={() => redirectPath(tab.path)}>{tab.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='flex items-center gap-3 cursor-pointer z-10'>
                            <p className='text-base font-medium border-b-2 border-transparent transition-all duration-500 hover:border-green-700' onClick={() => redirectPath("/contact home")}>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar