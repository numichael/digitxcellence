import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import News from './News'
import Projects from './Projects'
import Services from './Services'
import Testimonial from './Testimonial'
import { Element } from 'react-scroll'

const Main = () => {
    return (
        <div className='w-full flex flex-col items-center lg:p-0 z-10'>
            <Element className='w-full flex justify-center' name='home'>
                <Intro />
            </Element>
            <Element className='w-full' name='services'>
                <Services digitalAgency={true} />
            </Element>
            <Element className='w-full' name='aboutus'>
                <About />
            </Element>
            <Element className='w-full' name='projects'>
                <Projects />
            </Element>
            <Element className='w-full' name='testimonial'>
                <Testimonial />
            </Element>
            <Element className='w-full' name='blog'>
                <News />
            </Element>
            <Element className='w-full' name='contact-component'>
                <Contact />
            </Element>
        </div>
    )
}

export default Main