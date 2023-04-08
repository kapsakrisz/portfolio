import react from 'react';
import image from 'next/image';
import Link from 'next/link';


const Projectsv2 =() => {
    return (
<div className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What i've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <img className='rounded-xl' 
                src='/starc3.jpg' 
                alt='/'
                />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[50%]'>

                <h3 className='text-2xl text-white tracking-wider text-center'>CitizenShare</h3>
                <p className='pb-4 pt-2 text-white text-center '>REact Js</p>
                <Link href='/'>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                </Link>
                </div>
            </div>
        </div>
    </div>

</div>
    );
};

export default Projectsv2