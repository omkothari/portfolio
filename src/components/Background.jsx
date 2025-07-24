import React from 'react'

const Background = () => {
  return (
    <div className='fixed h-screen w-full z-[-1]'>
        <video autoPlay loop muted className='h-full w-full object-cover -z-1' src="assets/Background.mp4"></video>
    </div>
  )
}

export default Background