import React from 'react'
import OmHome from '../assets/Om 2.png'
const Home = () => {
  return (
    <div id="home" className='mt-10 md:mt-1 w-full  px-8  mt-10 md:flex items-center justify-between sm:flx-col'>
      <div className="w-full md:w-2/5">

        <h1 className='text-justify text-2xl'>Hi, I’m <strong className='text-[#222222]'>Om Kothari</strong> — a passionate Software Developer with a knack for modern web development.</h1>
        <a href="../assets/resume.pdf" download="Om_Kothari_Resume" className='p-3 w-fit border-2 border-gray-400 rounded-full block mt-6 hover:border-3 hover:border-gray-600 hover:font-semibold'>Download Resume </a>
      </div>

        <img src={OmHome} className="w-full md:w-2/5 h-[80vh] object-contain" alt="" />
    </div>
  )
}

export default Home