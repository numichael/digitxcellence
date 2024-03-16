import About from '../digitalAgency/About'
import Clients from '../digitalAgency/Clients'
import Contact from '../digitalAgency/Contact'
import Intro from '../digitalAgency/Intro'
import News from '../digitalAgency/News'
import Pricing from '../digitalAgency/Pricing'
import Projects from '../digitalAgency/Projects'
import Services from '../digitalAgency/Services'
import Stats from '../digitalAgency/Stats'
import Testimonial from '../digitalAgency/Testimonial'

const CreativeAgency = () => {
    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Services />
            <About />
            <Projects />
            <Stats />
            <Testimonial />
            <Pricing />
            <Clients />
            <News />
            <Contact />
        </div>
    )
}

export default CreativeAgency