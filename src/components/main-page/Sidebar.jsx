import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extender, setExtender] = useState(false);
  const [extenderWidth, setExtenderWidth] = useState(90);

  function handleExtender(prev) {
    setExtender((prev) => !prev);
    let width = document.getElementById("main-container");
    {
      extenderWidth === 90 ? setExtenderWidth(200) : setExtenderWidth(90);
    }
  }

  return (
    <>
      <div
        id="main-container"
        className=" m-0 font-sans bg-[#f0f4f9] min-h-full inline-flex flex-col justify-between px-3 relative"
        style={{ width: extenderWidth + "px" }}
      >
        {/* ---Sidebar: Upper section--- */}

        <div className="fixed top-1 sidebar-upper-section flex h-auto py-3 flex-col bg-[#f0f4f9]">
          <div
            onClick={(e) => handleExtender(extender, extenderWidth)}
            className="w-9 bg-[#f0f4f9]"
          >
            <img
              className="bg-[#f0f4f9] w-7 object-cover hover:cursor-pointer"
              src={assets.menu_icon}
              alt="sidebar-icon"
            />
          </div>

          <div className=" new-chat flex items-center gap-3 my-7 p-2 rounded-full  bg-[#dae2ed]">
            <img
              className="max-w-7 min-w-7 hover:cursor-pointer bg-[#dae2ed]"
              src={assets.chat_icon}
              alt="new-chat-icon"
            />
            {extender ? <p className="bg-[#dae2ed]">New Chat</p> : null}
          </div>

          {extender ? (
            <div className="recently-searched flex flex-col gap-2 bg-[#f0f4f9]">
              <div className="text-base font-semibold bg-[#f0f4f9]">Recent</div>
              <p className="text-sm font-sans bg-[#f0f4f9]">How to code...</p>
            </div>
          ) : null}
        </div>

        {/* ---Sidebar: Lower section--- */}

        <div className="py-2 sidebar-lower-section flex flex-col gap-2 bg-[#f0f4f9] fixed bottom-1">
          <div className="flex items-center gap-1.5 bg-[#f0f4f9]">
            <img
              className="w-7 hover:cursor-pointer bg-[#f0f4f9]"
              src={assets.help_icon}
              alt="help-icon"
            />
            {extender ? (
              <p className="text-sm font-semibold bg-[#f0f4f9]">Help</p>
            ) : null}
          </div>

          <div className="flex items-center gap-1.5 bg-[#f0f4f9]">
            <img
              className="w-7 hover:cursor-pointer bg-[#f0f4f9]"
              src={assets.history_icon}
              alt="history-icon"
            />
            {extender ? (
              <p className="text-sm font-semibold bg-[#f0f4f9]">History</p>
            ) : null}
          </div>

          <div className="flex items-center gap-1.5 bg-[#f0f4f9]">
            <img
              className="w-7 hover:cursor-pointer bg-[#f0f4f9]"
              src={assets.settings_icon}
              alt="settings-icon"
            />
            {extender ? (
              <p className="text-sm font-semibold bg-[#f0f4f9]">Settings</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
