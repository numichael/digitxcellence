import About from './About'
import Intro from './Intro'
import Pricing from './Pricing'
import Projects from './Projects'
import Services from './Services'
import Stats from './Stats'
import Testimonial from './Testimonial'

const Main = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <Intro />
            <Services />
            <About />
            <Projects />
            <Stats />
            <Testimonial />
            <Pricing />
        </div>
    )
}

export default Main