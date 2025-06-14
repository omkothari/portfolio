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
    <div className='px-8'>
        <h1 className="text-2xl font-bold mt-30 mb-10">
        Projects
        </h1>

        <div className='box h-100 flex gap-10 '>

            {projects.map((project, index) => (
                 <div className="h-[90%] w-[30vw] shrink-0 rounded-md gap-4" key={index}>
                {/* <div className="img bg-white w-[40%] h-50"></div>
                <div className="w-[50%] bg-red-400 h-50">
                    <h2 className="font-bold">Project Title</h2>
                    <p className="text-sm">Project description goes here.</p>
                </div>                 */}

                <div className="img bg-white w-full h-[80%] rounded-lg overflow-hidden hover:scale-105 hover:mb-2 transition-all duration-300">
                    <img src={project.image} className={`object-cover ${index==2 ?"object-center":"object-left"} w-full h-full`} alt="" />
                </div>
                <h1 className="text-lg font-bold text-[#222222]">{project.heading}</h1>
            </div>
            ))}
         



        </div>

    </div>
  )
}

export default Projects