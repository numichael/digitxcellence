import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { scroller } from 'react-scroll'

const Navbar = () => {

    const [tabs, setTabs] = useState([
        {
            name: "Home", path: "/home home", display: false, options: [
                { name: "Home", path: "/home home" },
                { name: "About Us", path: "/home aboutus" },
                { name: "Services", path: "/home services" },
                { name: "Projects", path: "/home projects" },
                { name: "Our Stats", path: "/home stats" },
                { name: "Our Values", path: "/home values" },
                { name: "Testimonial", path: "/home testimonial" },
                { name: "Top Clients", path: "/home clients" },
                { name: "Blog", path: "/home blog" },
                { name: "Contact", path: "/home contact" },
            ]
        },
        {
            name: "Services", path: "/services home", display: false, options: [
                { name: "All Services", path: "/services home" },
                { name: "Speciality", path: "/services speciality" },
                { name: "Values", path: "/services values" },
                { name: "Services Overview", path: "/services overview" },
                { name: "Contact", path: "/services contact" },
            ]
        },
        {
            name: "Academy", path: "/services home", display: false, options: [
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
                { name: "option 1" },
            ]
        },
        // {
        //     name: "Pages", display: false, options: [
        //         { name: "About Us" },
        //         { name: "Our Office" },
        //         { name: "Case Study" },
        //         { name: "Case Study Details" },
        //         { name: "Team" },
        //         { name: "Team Details" },
        //         { name: "Testimonial" },
        //         { name: "Pricing Table" },
        //         { name: "Typography" },
        //         { name: "404 Page" },
        //         { name: "Coming Soon" },
        //     ]
        // },
        {
            name: "Blog", path: "/services home", display: false, options: [
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
            <div className={`bg-white w-full fixed top-0 left-0 p-3 ${visibleMobileMenu ? "h-screen border-r border-#333" : "h-10"} ${visible && visibleMobileMenu ? "opacity-1" : visible && !visibleMobileMenu? "opacity-1": !visible && visibleMobileMenu? "opacity-1": "opacity-0"} transition-all duration-500 z-[1000] block lg:hidden`}>
                <FontAwesomeIcon icon={faBars} className='text-lg' onClick={() => toggleMobileMenu(!visibleMobileMenu)} />
                <div className={`bg-white w-full flex flex-col pl-6 justify-evenly h-full transition-all duration-500 ${visibleMobileMenu ? "opacity-1" : "opacity-0 h-0"}`}>
                    <h2 className={`text-green-700 text-4xl font-semibold ${visibleMobileMenu? "h-auto": "h-0"}`} onClick={() => redirectPath("/home home")}>Digit Xcellence</h2>
                    {
                        tabs.map((tab, index) => (
                            <div className={`text-2xl font-semibold ${visibleMobileMenu? "h-auto": "h-0"}`} onClick={() => redirectPath(tab.path)}>
                                {tab.name}
                            </div>
                        ))
                    }
                    <div className={`text-2xl font-semibold ${visibleMobileMenu? "h-auto": "h-0"}`}>Contact</div>
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
                                        <p className='text-base font-medium' onClick={() => redirectPath(tab.path)}>{tab.name}</p>
                                        {/* <FontAwesomeIcon icon={faChevronDown} className='text-xs' /> */}
                                    </div>
                                    {/* <div className={`flex z-10 flex-col border-l border-b gap-5 absolute top-6 w-[13rem] transition-all duration-500 bg-white ${tab.display ? "opacity-1 left-0 min-h-[8rem] p-4 blur-border" : "opacity-0 left-10 overflow-hidden h-[0]"}`}>
                                        {
                                            tab.options.map((tab, index) => (
                                                <div key={index} className='text-[#5b5d75] text-[0.85rem] cursor-pointer font-medium' onClick={() => redirectPath(tab.path)}>
                                                    {tab.name}
                                                </div>
                                            ))
                                        }
                                    </div> */}

                                </div>
                            ))
                        }
                        <div className='flex items-center gap-3 cursor-pointer z-10'>
                            <p className='text-base font-medium'>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar