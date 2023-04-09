import React from 'react'
import Link from 'next/link';

const ProjectCardvtwo = () => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <img className='rounded-xl' 
                src='/bannerciti.jpg' 
                alt='/'
                />
                <div className='hidden group-hover:block absolute top-[30%] left-[30%] translate-x-[50%] translate-y-[50%]'>

                <h3 className='text-2xl text-white tracking-wider text-center'>CitizenShare</h3>
                <p className='pb-4 pt-2 text-white text-center '>REact Js</p>
                <Link href="https://citizenshare.vercel.app/" target="blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                </Link>
                </div>
            </div>
  )
}

export default ProjectCardvtwo