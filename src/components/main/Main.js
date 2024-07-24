import React from 'react'

const Main = ({ navBarOpen }) => {
  return (
    <div className='flex flex-col'>
        
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div>How Can I Help You Today?</div>
            <div><img src='./botAi.png' alt='botAi' className='w-16 h-16 rounded-full drop-shadow-lg

'/></div>
        </div>
    </div>
  )
}

export default Main