import React from 'react'
import Link from 'next/link';

const ProjectCardvtwo = () => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <img className='rounded-xl' 
                src='/bannerciti.jpg' 
                alt='/'
                />
                <div className='hidden group-hover:block absolute bottom-[60%] right-[47%] translate-x-[50%] translate-y-[50%]'>

                <h3 className='text-4xl  tracking-wider text-center text-white'>CitizenShare</h3>
                <p className='text-2xl pb-4 pt-2  text-center text-white'>A picture sharing app,made for a computer game called star citizen,share,post,like,comment functionality,sign in with google!</p>
                <Link href="https://citizenshare.vercel.app/" target="blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                </Link>
                </div>
            </div>
  )
}

export default ProjectCardvtwo