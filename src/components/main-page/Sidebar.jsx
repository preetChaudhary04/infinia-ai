import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css"; 

const Sidebar = () => {
  const [extender, setExtender] = useState(false);
  const [extenderWidth, setExtenderWidth] = useState(90);

  function handleExtender() {
    setExtender((prev) => !prev);
    setExtenderWidth((prev) => (prev === 90 ? 200 : 90));
  }

  return (
    <div
      id="main-container"
      className="main-container"
      style={{ width: extenderWidth + "px" }}
    >

      {/* ---Sidebar: Upper section--- */}
      
      <div className="sidebar-upper-section">
        <div onClick={handleExtender} className="icon-container">
          <img
            className="menu-icon"
            src={assets.menu_icon}
            alt="sidebar-icon"
          />
        </div>

        <div className="new-chat">
          <img
            className="chat-icon"
            src={assets.chat_icon}
            alt="new-chat-icon"
          />
          {extender && <span>New Chat</span>}
        </div>

        {extender && (
          <div className="recently-searched">
            <div className="recent-title">Recent</div>
            <p className="recent-item">How to code...</p>
          </div>
        )}
      </div>

      {/* ---Sidebar: Lower section--- */}
      <div className="sidebar-lower-section">
        <div className="lower-item">
          <img
            className="lower-icon"
            src={assets.help_icon}
            alt="help-icon"
          />
          {extender && <span className="lower-text">Help</span>}
        </div>

        <div className="lower-item">
          <img
            className="lower-icon"
            src={assets.history_icon}
            alt="history-icon"
          />
          {extender && <span className="lower-text">History</span>}
        </div>

        <div className="lower-item">
          <img
            className="lower-icon"
            src={assets.settings_icon}
            alt="settings-icon"
          />
          {extender && <span className="lower-text">Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
