import React from 'react'

type Props = {};

function ProjectCard1({}: Props) {
  return <div>

<div className="w-screen flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <a href="https://citizenshare.vercel.app/" target="blank">

                <img 
                
                src="/starc3.jpg"
                alt="" 
                height={400}
                width={400}
                
                />
                </a>
                

                

                 <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-4xl font-semibold text-center">
                       <span className="">Case study_01/03_ 
                       </span>{""}
                        citizenshare
                       </h4>

                       <p className="text-lg text-center md:text-left">
                        Citizenshare is an image sharing app for the game Star Citizen
                         
                       </p>
                       <span className=" absolute top-24 tracking-[10px] text-gray-500 text-1xl">Swipe ◄►</span>
                       </div>

</div>
  </div>
}
export default ProjectCard1
