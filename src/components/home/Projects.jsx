import React from 'react'
import qrs1 from "../../assets/images/qrs1.png"
import qrs2 from "../../assets/images/qrs2.png"
import qrs3 from "../../assets/images/qrs3.png"
import lc1 from "../../assets/images/lc1.png"
import lc2 from "../../assets/images/lc2.png"
import lc3 from "../../assets/images/lc3.png"
import zyon1 from "../../assets/images/zyon1.png"
import zyon2 from "../../assets/images/zyon2.png"
import zyon3 from "../../assets/images/zyon3.png"
import propertymataaz1 from "../../assets/images/propertymataaz1.png"
import propertymataaz2 from "../../assets/images/propertymataaz2.png"
import propertymataaz3 from "../../assets/images/propertymataaz3.png"
import tken1 from "../../assets/images/tken1.png"
import tken2 from "../../assets/images/tken2.png"
import tken3 from "../../assets/images/tken3.png"
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const projects = [
        // { name: "Calabar Tech Community", images: [calabartech1, calabartech2, calabartech3], about: "Branding, Website, App", link: "https://calabartechcommunity.com/" },
        { name: "QRSweb", images: [qrs1, qrs2, qrs3], about: "Branding, Website, App", link: "https://qrsweb.com/" },
        { name: "Zyon Technology", images: [zyon1, zyon2, zyon3], about: "Branding, Website, App", link: "https://zyontechnology.netlify.app/" },
        { name: "TKEN", images: [tken1, tken2, tken3], about: "Branding, Website, App", link: "https://tkenonline.com/" },
        { name: "Property Mataaz", images: [propertymataaz1, propertymataaz2, propertymataaz3], about: "Branding, Website, App", link: "https://www.propertymataaz.com/" },
        { name: "Loading Connect", images: [lc1, lc2, lc3], about: "Branding, Website, App", link: "https://loading-connect.netlify.app/" },
    ]
    return (
        <div className='w-full min-h-[50rem] flex p-4 py-20 lg:p-[10rem] justify-center bg-green-50'>
            <div className='w-full flex max-w-[65rem] gap-[4rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 lg:gap-10 w-full'>
                    <p className="text-[0.82rem] lg:text-xl text-red-700 lg:font-semibold">Our Projects</p>
                    <h2 className='text-3xl lg:text-6xl mb-6 text-green-950'>Some of our <br /> finest work.</h2>
                    <div className="w-full grid gap-[8rem] items-center">
                        {
                            projects.map((project, index) => (
                                <Project name={project.name} about={project.about} images={project.images} link={project.link} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

const Project = ({ link, images, name, about}) => {

    const {ref:ref1, inView:inView1} = useInView()
    const {ref:ref2, inView:inView2} = useInView()
    const {ref:ref3, inView:inView3} = useInView()

    const image1Style = {left: inView1? "0rem": "-6rem"}
    const image2Style = {top: inView2? "0rem": "-4rem"}
    const image3Style = {bottom: inView3? "0rem": "-4rem"}
    return (
        <a href={link} target='_blank' className='cursor-pointer w-full lg:h-[45rem]'>
            <div className="relative w-full h-[80%] flex gap-2 lg:gap-4">
                <div className="flex flex-col gap-2 lg:gap-4 w-[45%] lg:w-[35%] h-full">
                    <img style={image1Style} src={images[0]} ref={ref1} className='transition-all relative duration-1000 w-full h-full border' alt="Your Image" />
                </div>
                <div className="grid gap-2 lg:gap-4 w-[55%] lg:w-[50%]">
                    <img style={image2Style} src={images[1]} ref={ref2} className='transition-all relative duration-1000 w-full border h-full' alt="Your Image" />
                    <img style={image3Style} src={images[2]} ref={ref3} className='transition-all relative duration-1000 w-full border h-full' alt="Your Image" />
                </div>
            </div>
            <div className="border-r-2 rounded-br-[2rem] py-4">
                <h3 className='text-xl lg:text-3xl text-green-800'>{name}</h3>
                <p className='text-[0.82rem] lg:text-base'>{about}</p>
            </div>
            <button type='button' className='normalButton'>View Project</button>
        </a>
    )
}