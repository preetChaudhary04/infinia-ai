import React from 'react'
import { assets } from '../../assets/assets'

const CentralBody = () => {
  return (
    <>
      <div className='central-main-body m-0 w-full h-auto'>

        {/* ---navigation bar--- */}

        <div className="nav-bar w-full px-8 h-12 flex flex-row justify-between items-center">
          <div className='font-semibold flex items-center gap-2'>Infinia</div>
          <img className='w-5' src={assets.user_icon} alt="user" />
        </div>

        {/* ---welcome text--- */}

        <div className="welcome-text-section py-20 px-32 h-auto w-auto flex flex-col items-start leading-tight tracking-[-0.25em]">
          <span className='text-6xl font-medium bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>Hello, user</span>
          <div className='text-6xl text-[#c4c7c5]'>How can I help you today?</div>
        </div>

        {/* ---cards container--- */}

        <div className="card-container w-auto h-auto py-7 relative flex justify-center items-center">
          <div className="cards-holder h-auto grid grid-cols-[repeat(4,160px)] px-auto gap-3">
            <div className="card-1 p-3 h-48 relative rounded-lg bg-[#f0f4f9]">
              <div className='bg-[#f0f4f9]'>Help design a database schema for a business</div>
              <img className='w-5 bottom-2 right-2 absolute bg-[#f0f4f9]' src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className="card-2 p-3 h-48 relative rounded-lg bg-[#f0f4f9]">
              <div className='bg-[#f0f4f9]'>Help design a database schema for a business</div>
              <img className='w-5 bottom-2 right-2 absolute bg-[#f0f4f9]' src={assets.bulb_icon} alt="bulb-icon" />
            </div>
            <div className="card-3 p-3 h-48 relative rounded-lg bg-[#f0f4f9]">
              <div className='bg-[#f0f4f9]'>Help design a database schema for a business</div>
              <img className='w-5 bottom-2 right-2 absolute bg-[#f0f4f9]' src={assets.message_icon} alt="message-icon" />
            </div>
            <div className="card-4 p-3 h-48 relative rounded-lg bg-[#f0f4f9]">
              <div className='bg-[#f0f4f9]'>Help design a database schema for a business</div>
              <img className='w-5 bottom-2 right-2 absolute bg-[#f0f4f9]' src={assets.code_icon} alt="code-icon" />
            </div>
          </div>
        </div>

        {/* ---input and search section--- */}

        <div className="flex w-auto h-16 justify-center align-middle ">

          <div className="input-section flex w-3/5 mx-auto  rounded-full h-14 fixed bottom-4 gap-1 bg-[#f0f4f9] justify-between">

            <input className='w-full h-auto px-3 rounded-bl-full rounded-tl-full border-none bg-[#f0f4f9] ' type="text" placeholder='Enter a prompt here' name="" id="" />

            <div className="images flex gap-1 px-3 bg-[#f0f4f9]  rounded-tr-full rounded-br-full">
              <img className='w-6 bg-[#f0f4f9] ' src={assets.gallery_icon} alt="" />

              <img className='w-6 bg-[#f0f4f9] ' src={assets.mike_icon} alt="" />

              <img className='w-6 rounded-tr-full rounded-br-full bg-[#f0f4f9] ' src={assets.send_icon} alt="" />
            </div>

          </div>

        </div>



      </div>


    </>
  )
}

export default CentralBody