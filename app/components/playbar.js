import {RiSkipRightFill} from 'react-icons/ri';
import {RiSkipLeftFill} from 'react-icons/ri';
import {BsFillPlayCircleFill} from 'react-icons/bs';

export default function Playbar() {
    return (
        <main>
            <div className='bg-blue-500 w-[60vw]  lg:w-[18vw] h-[12vh] flex items-center justify-between'>
                <RiSkipLeftFill size={50} />
                <BsFillPlayCircleFill size={70} />
                <RiSkipRightFill size={50} />
            </div>
        </main>
    )
}