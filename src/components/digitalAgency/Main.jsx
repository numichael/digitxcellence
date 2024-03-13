import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Intro from './Intro'
import News from './News'
import Pricing from './Pricing'
import Projects from './Projects'
import Services from './Services'
import Stats from './Stats'
import Testimonial from './Testimonial'

const Main = () => {
    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Intro />
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

export default Main