import React from 'react'
import Ochi from '../assets/Ochi.png'
import WeThinkElastic from '../assets/WeThinkElastic.png'
import Cosmo from '../assets/Cosmo.png'
const Projects = () => {
    const projects=[
        {
        heading:"Ochi Website Clone",
        description:"",
        image:Ochi
    },

    {
        heading:"We Think Elastic Website Clone",
        description:"",
        image:WeThinkElastic
    },

    {
        heading:"CosmoCheck",
        description:"",
        image:Cosmo
    },
];



  return (
    <div id="projects" className='px-8 min-h-[47vh]'>
        <h1 className="text-2xl font-bold mt-30 mb-10">
        Projects
        </h1>

        <div className='box min-h-[45vh] max-h-fit w-full flex shrink-0 gap-10 overflow-x-auto'>

            {projects.map((project, index) => (
                 <div className="w-fit rounded-md gap-4 shrink-0" key={index}>
                <div className="img bg-white min-w-[60vh] w-[40vw] rounded-lg overflow-hidden hover:scale-105 hover:mb-2 transition-all duration-300">
                    <img src={project.image} className={`object-contain w-full h-full`} alt="" />
                </div>
                <h1 className="text-lg font-bold text-[#222222]">{project.heading}</h1>
            </div>
            ))}
         



        </div>

    </div>
  )
}

export default Projects