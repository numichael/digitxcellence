import { Element } from 'react-scroll'
import Intro from './Intro'
import Programs from './Programs'

const Academy = () => {
    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Element className='w-full flex justify-center h-screen' name='home'>
                <Intro />
            </Element>
            <Element className='w-full flex justify-center' name='home'>
                <Programs />
            </Element>

        </div>
    )
}

export default Academy