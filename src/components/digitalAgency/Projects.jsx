import React from 'react'
import creative from "../../assets/images/creative.png"

const Projects = () => {
    const projects = [
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" },
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" },
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" },
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" },
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" },
        { name: "Creative Agency", image: creative, about: "Branding, Website, App" }
    ]
    return (
        <div className='w-full min-h-[50rem] flex p-[10rem] justify-center'>
            <div className='w-full flex max-w-[90rem] gap-[8rem]'>
                <div className='flex flex-col gap-10'>
                    <p className="text-xl text-red-700 font-semibold">Our Projects</p>
                    <h2 className='text-6xl mb-6'>Some of our <br /> finest work.</h2>
                    <div className="w-full grid grid-cols-2 gap-20 justify-between">
                        {
                            projects.map((project, index) => (
                                <div key={index} className='w-full h-[40rem]'>
                                    <div class="relative w-full h-[80%] rounded-t-[2rem] overflow-hidden">
                                        <img src={project.image} class="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-[1.2]" alt="Your Image" />
                                    </div>
                                    <div className="p-10 bg-white">
                                        <h3 className='text-3xl'>{project.name}</h3>
                                        <p>{project.about}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects