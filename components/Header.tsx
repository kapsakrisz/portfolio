import react from  'react' 
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';
type Props={}

export default function Header( {}:Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
            initial={{
x:-500,
opacity:0,
scale:0.5

            }}

            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className="flex flex-row items-center">
                
                <SocialIcon url="https://www.linkedin.com/in/krisztian-kaposi-586144163/"
                fgColor="gray"
                bgColor="transparent"
                />

                <SocialIcon url="https://www.youtube.com/channel/UCvxBsvCzRpHGbY2ldnAN2cQ"
                fgColor="gray"
                bgColor="transparent"
                />
                
                <SocialIcon url="https://twitter.com/devkapsakrisz"
                fgColor="gray"
                bgColor="transparent"
                />



                <SocialIcon url="https://github.com/kapsakrisz"
                fgColor="gray"
                bgColor="transparent"
                />

                <SocialIcon url="https://www.facebook.com/krisztian.kaposi.5"
                fgColor="gray"
                bgColor="transparent"
                />
                </motion.div>

                
                

                <motion.div
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5,
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1, 
                }}
                transition={{
                    duration:1.5,
                }}
                
                className="flex flex-row items-center text-gray-300 cursor-pointer">
                    
                    <p className="uppercase hidden md:inline-flex text-gray-400"></p>
                </motion.div>
                
                </header>
    )
}