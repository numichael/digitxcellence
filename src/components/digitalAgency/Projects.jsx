import React from 'react'
import calabartech1 from "../../assets/images/calabartech1.png"
import calabartech2 from "../../assets/images/calabartech2.png"
import calabartech3 from "../../assets/images/calabartech3.png"
import qrs1 from "../../assets/images/qrs1.png"
import qrs2 from "../../assets/images/qrs2.png"
import qrs3 from "../../assets/images/qrs3.png"
import lc1 from "../../assets/images/lc1.png"
import lc2 from "../../assets/images/lc2.png"
import lc3 from "../../assets/images/lc3.png"
import propertymataaz1 from "../../assets/images/propertymataaz1.png"
import propertymataaz2 from "../../assets/images/propertymataaz2.png"
import propertymataaz3 from "../../assets/images/propertymataaz3.png"

const Projects = () => {
    const projects = [
        { name: "Calabar Tech Community", images: [calabartech1, calabartech2, calabartech3], about: "Branding, Website, App", link: "https://calabartechcommunity.com/" },
        { name: "Property Mataaz", images: [propertymataaz1, propertymataaz2, propertymataaz3], about: "Branding, Website, App", link: "https://www.propertymataaz.com/" },
        { name: "QRSweb", images: [qrs1, qrs2, qrs3], about: "Branding, Website, App", link: "https://qrsweb.com/" },
        { name: "Loading Connect", images: [lc1, lc2, lc3], about: "Branding, Website, App", link: "https://loading-connect.netlify.app/" },
    ]
    return (
        <div className='w-full min-h-[50rem] flex p-4 py-20 lg:p-[10rem] justify-center bg-[#eeffe2]'>
            <div className='w-full flex max-w-[65rem] gap-[4rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 lg:gap-10 w-full'>
                    <p className="text-[0.85rem] lg:text-xl text-red-700 lg:font-semibold">Our Projects</p>
                    <h2 className='text-3xl lg:text-6xl mb-6 text-green-950'>Some of our <br /> finest work.</h2>
                    <div className="w-full grid gap-[8rem] items-center">
                        {
                            projects.map((project, index) => (
                                <a href={project.link} target='_blank' key={index} className='cursor-pointer w-full h-[20rem] lg:h-[45rem]'>
                                    <div className="relative w-full h-[80%] flex gap-4 justify-center">
                                        <div className="flex flex-col gap-4 w-[35%] h-full">
                                            <img src={project.images[0]} className='w-full h-full border' alt="Your Image" />
                                        </div>
                                        <div className="flex flex-col gap-4 w-[50%] h-full">
                                            <img src={project.images[1]} className='w-full border h-1/2' alt="Your Image" />
                                            <img src={project.images[2]} className='w-full border h-1/2' alt="Your Image" />
                                        </div>
                                    </div>
                                    <div className="p-10 border-r-2 rounded-br-[2rem]">
                                        <h3 className='text-xl lg:text-3xl text-green-800'>{project.name}</h3>
                                        <p className='text-[0.85rem] lg:text-base'>{project.about}</p>
                                    </div>
                                    <button type='button' className='p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg'>View Project</button>
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