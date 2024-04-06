import { Element } from 'react-scroll'
import Intro from './Intro'
import Programs from './Programs'
import GettingStarted from './GettingStarted'
import Contact from '../digitalAgency/Contact'

const Academy = () => {
    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Element className='w-full flex justify-center' name='home'>
                <Intro />
            </Element>
            <Element className='w-full flex justify-center' name='programs'>
                <Programs />
            </Element>
            <Element className='w-full flex justify-center' name='getting-started'>
                <GettingStarted />
            </Element>
            <Element className='w-full flex justify-center' name='contact'>
                <Contact />
            </Element>
        </div>
    )
}

export default Academy