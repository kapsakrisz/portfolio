import React from 'react';
import {motion} from "framer-motion";
type Props={
    directionLeft?:boolean;
}

function Skill6({directionLeft}:Props) {
return(
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x:directionLeft ? -200 :200,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{opacity:1,x:0}}
        src="/html5.svg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        
        />
    </div>
)
}

export default Skill6;