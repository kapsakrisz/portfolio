import React from 'react'

type Props = {};

function ProjectCard1({}: Props) {
  return <div>

<div className="w-screen flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <a href="https://citizenshare.vercel.app/" target="blank">

                <img 
                
                src="https://img.redbull.com/images/c_fill,g_auto,w_400,h_400/q_auto,f_auto/redbullcom/2015/01/06/1331698089409_2/star-citizen"
                alt="" 
                
                />
                </a>
                

                

                 <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-4xl font-semibold text-center">
                       <span className="">Case study 01: 
                       </span>{""}
                        citizenshare
                       </h4>

                       <p className="text-lg text-center md:text-left">
                        Citizenshare is an image sharing app for the game Star Citizen
                         
                       </p>
                       </div>

</div>
  </div>
}
export default ProjectCard1
