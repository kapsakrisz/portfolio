import React from 'react'
import Link from 'next/link';

const ProjectCardvtwo4 = () => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <img className='rounded-xl' 
                src='/gabriella.jpg' 
                alt='/'
                />
                <div className='hidden group-hover:block absolute bottom-[50%] right-[60%] translate-x-[50%] translate-y-[50%]'>

                <h3 className='text-4xl text-white tracking-wider text-center text-white'>KJ Painting</h3>
                <p className='text-2xl pb-4 pt-2 text-white text-center text-white'>Landing page for a Professional Painter</p>
                <Link href="https://kjpainting.netlify.app/" target="blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer text-black'>More info</p>
                </Link>
                </div>
            </div>
  )
}

export default ProjectCardvtwo4