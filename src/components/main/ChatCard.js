import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const ChatCard = ({ msg, img, msgContent, time, name, showLike }) => {
  return (
    <div className="flex bg-secondary bg-opacity-15 shadow-md rounded-xl mb-5 px-5 pt-2 gap-4">
      <div className="flex justify-center items-start">
        <img
          src={img}
          alt="botAi"
          className="max-w-none w-16 h-16 rounded-full drop-shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-base	font-bold	">{name}</div>
        <div className="font-normal	text-base">{msgContent}</div>
        <div className="font-normal	text-xs pt-3  flex gap-4">
          <div className="opacity-50">{time}</div>

          {showLike !== undefined ? (
            <>
              <div className="opacity-50	hover:opacity-100 cursor-pointer w-4 h-4">
                &#128077;
              </div>
              <div className="opacity-50	hover:opacity-100 cursor-pointer w-4 h-4">
                &#128078;
              </div>
            </>
          ) : null}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default ChatCard;
