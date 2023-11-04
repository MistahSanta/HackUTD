"use client";

import {BsFillPlayCircleFill} from 'react-icons/bs'
import {RiSkipLeftFill} from 'react-icons/ri'
import {RiSkipRightFill} from 'react-icons/ri'

export default function Playbar() {
    return (
        <main className='flex flex-col w-[40vw] bg-blue-500 justify-center items-center'>
            <div className='flex relative w-[30vw] h-[20vh] lg:w-[12vw] lg:h-[10vh] bg-red-500 justify-between items-center'>
                <RiSkipLeftFill 
                    size={50} 
                    className='hover:cursor-pointer '
                    onClick={() => {}} />
                <BsFillPlayCircleFill 
                    size={70} 
                    className='hover:cursor-pointer'
                    onClick={ () => {}}
                    />
                <RiSkipRightFill 
                    size={50} 
                    className='hover:cursor-pointer'
                    onClick={() => {}} 
                />

            </div>
        </main>
    )

}