import react from 'react';
import image from 'next/image';
import Link from 'next/link';
import ProjectCardvtwo from './ProjectCardvtwo';
import ProjectCardvtwo2 from './ProjectCardvtwo2';
import ProjectCardvtwo3 from './ProjectCardvtwo3';
import ProjectCardvtwo4 from './ProjectCardvtwo4';
import {motion} from "framer-motion";


const Projectsv2 =() => {
    return (
<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.5}}

className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What i've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectCardvtwo />
        <ProjectCardvtwo2/>
        <ProjectCardvtwo3/>
        <ProjectCardvtwo4/>  
           <img className='rounded-full' src='/kklogo.jpg'
           height={75}
           width={75}
           />
        </div>
    </div>

</motion.div>
    );
};

export default Projectsv2