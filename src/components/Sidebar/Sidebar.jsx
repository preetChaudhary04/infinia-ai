import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {

  const [extender, setExtender] = useState(false)

  return (
    <>
      <div className="sidebar">

        {/* ---Sidebar: Upper section--- */}

        <div className="sidebar-upper-section">

          <div onClick={() => setExtender(prev => !prev)} className="sidebar-logo">
            <img className='hover' src={assets.menu_icon} alt="sidebar-icon" />
          </div>

          <div className="new-chat">
            <img className='hover' src={assets.chat_icon} alt="new-chat-icon" />
            {extender ? <p>New Chat</p> : null}
          </div>

          {extender ? <div className="recently-searched">
            <div>Recent</div>
            <p>How to code...</p>

          </div> : null}



        </div>

        {/* ---Sidebar: Upper section--- */}

        <div className="sidebar-lower-section">

          <div className="help-section flex">
            <img className='img-std-size hover' src={assets.help_icon} alt="help-icon" />
            {extender ? <p>Help</p> : null}
          </div>

          <div className="history-section flex">
            <img className='img-std-size hover' src={assets.history_icon} alt="history-icon" />
            {extender ? <p>History</p> : null}
          </div>

          <div className="settings-section flex">
            <img className='img-std-size hover' src={assets.settings_icon} alt="settings-icon" />
            {extender ? <p>Settings</p> : null}
          </div>

        </div>

      </div>
    </>
  )
}

export default Sidebar