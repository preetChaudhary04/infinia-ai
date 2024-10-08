import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extender, setExtender] = useState(false)

  return (
    <>
      <div className="m-0 p-0 box-border font-sans bg-[#d7e2e4] min-h-screen inline-flex flex-col justify-between p-3">

        {/* ---Sidebar: Upper section--- */}

        <div className="sidebar-upper-section flex h-[150px] flex-col bg-[#d7e2e4]">

          <div onClick={() => setExtender(prev => !prev)} className="w-10 bg-[#d7e2e4]">
            <img className='bg-[#d7e2e4] w-[30px] object-cover hover:cursor-pointer' src={assets.menu_icon} alt="sidebar-icon" />
          </div>

          <div className="new-chat flex items-center gap-3 my-7 p-2.5 rounded-[55px]  bg-[#acc0c3]">
            <img className='w-7 hover:cursor-pointer bg-[#acc0c3]' src={assets.chat_icon} alt="new-chat-icon" />
            {extender ? <p className='bg-[#acc0c3]'>New Chat</p> : null}
          </div>

          {extender ? <div className="recently-searched recently-searched flex flex-col gap-2 bg-[#d7e2e4]">
            <div className='text-[15px] font-semibold bg-[#d7e2e4]'>Recent</div>
            <p className='text-sm font-sans bg-[#d7e2e4]'>How to code...</p>

          </div> : null}



        </div>

        {/* ---Sidebar: Upper section--- */}

        <div className="sidebar-lower-section flex flex-col gap-2 bg-[#d7e2e4]">

          <div className="flex items-center gap-1.5 bg-[#d7e2e4]">
            <img className='img-std-size hover:cursor-pointer bg-[#d7e2e4]' src={assets.help_icon} alt="help-icon" />
            {extender ? <p className='text-sm font-semibold bg-[#d7e2e4]'>Help</p> : null}
          </div>

          <div className="flex items-center gap-1.5 bg-[#d7e2e4]">
            <img className='img-std-size hover:cursor-pointer bg-[#d7e2e4]' src={assets.history_icon} alt="history-icon" />
            {extender ? <p className='text-sm font-semibold bg-[#d7e2e4]'>History</p> : null}
          </div>

          <div className="flex items-center gap-1.5 bg-[#d7e2e4]">
            <img className='img-std-size hover:cursor-pointer bg-[#d7e2e4]' src={assets.settings_icon} alt="settings-icon" />
            {extender ? <p className='text-sm font-semibold bg-[#d7e2e4]'>Settings</p> : null}
          </div>

        </div>

      </div>
    </>
  )
}

export default Sidebar