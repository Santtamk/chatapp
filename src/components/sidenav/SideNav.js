import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Main from "../main/Main";

const SideNav = () => {
  
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="flex">
    <aside className="lg:flex lg:flex-col lg:w-1/5 lg:bg-secondary lg:min-h-screen ">
      <div className="lg:hidden">
        <div
          onClick={() => setNavBarOpen(!navBarOpen)}
          className={`cursor-pointer text-3xl font-bold text-primary ${
            navBarOpen ? "hidden" : ""
          }`}
        >
          &equiv;
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-secondary z-50 transition-transform transform ${
          navBarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:inset-auto lg:transform-none`}
      >
        <div className="flex flex-col gap-5 p-2 lg:gap-4 lg:flex">
          <div className="flex justify-center items-center gap-4">
            <img
              src="./botAi.png"
              alt="botAi"
              className="h-8 w-8 rounded-xl shadow-inner drop-shadow-lg"
            />
            <span className="text-xl	font-normal">New Chat</span>
            <img src="./edit.png" className="h-6	w-6	" />
          </div>
          <button
            onClick={() => setNavBarOpen(false)}
            className="text-3xl font-bold text-primary cursor-pointer lg:hidden"
          >
            &times;
          </button>
        </div>
        <div className="bg-white h-screen text-center p-4">
          <div className="bg-secondary rounded">
            Past Conversations
          </div>
        </div>
      </div>
    </aside>
    <div>
      <div
        className={`font-bold text-3xl text-primary ${
          navBarOpen ? "hidden" : ""
        } lg:block pl-4 flex-none`}
      >
        Bot AI
      </div>
      <main className="flex justify-center items-center">
        <Main />
      </main>
    </div>
  </div>
  );
};

export default SideNav;
