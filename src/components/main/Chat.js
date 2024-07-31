import React from "react";

const Chat = ({ conversationMap }) => {
  console.log("conversationMap:", conversationMap);
  return (
    <div className="flex flex-col overflow-auto">
      {/* {pastConversationView ?  */}
      {conversationMap.map((msg, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex bg-secondary bg-opacity-15 shadow-md rounded-md p-5 gap-4">
            <div className="flex justify-center items-start">
              <img
                src="./you.png"
                alt="botAi"
                className="w-16 h-16 rounded-full drop-shadow-lg"
              />
            </div>
            <div>
              <div className="text-base	font-bold	">You</div>
              <div className="font-normal	text-base text-border">
                {msg.question}
              </div>
              <div className="font-normal	text-xs pt-3 opacity-50">
                {msg.currentTime}
              </div>
            </div>
          </div>
          <div className="flex bg-secondary bg-opacity-15 shadow-md rounded-md p-5 mb-5 gap-4">
            <div className="flex justify-center items-start">
              <img
                src="./botAi.png"
                alt="botAi"
                className="max-w-none w-16 h-16 rounded-full drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-base	font-bold	">Another AI</div>
              <div className="font-normal	text-base">{msg.response}</div>
              <div className="font-normal	text-xs pt-3 opacity-50">
                {msg.currentTime}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
