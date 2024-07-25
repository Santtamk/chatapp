import React from "react";

const Main = ({ navBarOpen }) => {
  return (
    <div className={`flex-1 lg:ml-1/5 p-4 transition-all duration-300`}>
      {/* needs to be hidden when chat starts  */}
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <div>How Can I Help You Today?</div>
        <div>
          <img
            src="./botAi.png"
            alt="botAi"
            className="w-16 h-16 rounded-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* suggestive queestions */}
      <div className="bg-white">
        <div className="font-bold	text-xl	">Hi, what is the weather</div>
        <div className="text-base font-normal text-text">
          Get immediate AI generated response
        </div>
      </div>
    </div>
  );
};

export default Main;
