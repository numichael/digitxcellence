import React from 'react'
import calabartech from "../../assets/images/calabartech.png"
import qrs from "../../assets/images/qrs.png"
import lc from "../../assets/images/lc.png"
import propertymataaz from "../../assets/images/propertymataaz.png"

const Projects = () => {
    const projects = [
        { name: "Calabar Tech Community", image: calabartech, about: "Branding, Website, App", link: "https://calabartechcommunity.com/" },
        { name: "Property Mataaz", image: propertymataaz, about: "Branding, Website, App", link: "https://www.propertymataaz.com/" },
        { name: "Loading Connect", image: lc, about: "Branding, Website, App", link: "https://loading-connect.netlify.app/" },
        { name: "QRSweb", image: qrs, about: "Branding, Website, App", link: "https://qrsweb.com/" },
    ]
    return (
        <div className='w-full min-h-[50rem] flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex max-w-[90rem] gap-[4rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 lg:gap-10'>
                    <p className="text-[0.85rem] lg:text-xl text-red-700 lg:font-semibold">Our Projects</p>
                    <h2 className='text-3xl lg:text-6xl mb-6'>Some of our <br /> finest work.</h2>
                    <div className="w-full grid lg:grid-cols-2 gap-[8rem] justify-between">
                        {
                            projects.map((project, index) => (
                                <a href={project.link} target='_blank' key={index} className='cursor-pointer w-full h-[20rem] lg:h-[30rem]'>
                                    <div className="relative w-full h-[80%] rounded-t-[2rem] overflow-hidden">
                                        <img src={project.image} className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-[1.1]" alt="Your Image" />
                                    </div>
                                    <div className="p-10 bg-white border-r-2 rounded-br-[2rem]">
                                        <h3 className='text-xl lg:text-3xl'>{project.name}</h3>
                                        <p className='text-[0.85rem] lg:text-base'>{project.about}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects