import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <>
      <div className='main-body'>

        <div className="nav-bar">
          <div> <img src="" alt="infinia-logo" />Infinia</div>
          <img className='img-std-size' src={assets.bulb_icon} alt="user" />
        </div>

        <div className="welcome-text-section">
          <span>Hello, user</span>
          <div>How can I help you today?</div>
        </div>

        <div className="cards-container">
          <div className="cards card-1">
            <div>Help design a database schema for a business</div>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="cards card-2">
            <div>Help design a database schema for a business</div>
            <img src={assets.bulb_icon} alt="bulb-icon" />
          </div>
          <div className="cards card-3">
            <div>Help design a database schema for a business</div>
            <img src={assets.message_icon} alt="message-icon" />
          </div>
          <div className="cards card-4">
            <div>Help design a database schema for a business</div>
            <img src={assets.code_icon} alt="code-icon" />
          </div>
        </div>

        <div className="input-section">
          <input type="text" placeholder='Enter a prompt here' name="" id="" />
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mike_icon} alt="" />
          <img src={assets.send_icon} alt="" />
        </div>

      </div>


    </>
  )
}

export default Main