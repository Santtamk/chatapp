import React, { useState } from "react";
import ChatCard from "./ChatCard";

const Chat = ({ conversationMap }) => {
  const [showLike, setShowLike] = useState(true);
  console.log("conversationMap:", conversationMap);
  return (
    <div className="flex flex-col overflow-auto">
      {/* {pastConversationView ?  */}
      {conversationMap.map((msg, index) => (
        <div key={index} className="flex flex-col gap-4">
          <ChatCard
            msgContent={msg.question}
            img={"./you.png"}
            time={msg.currentTime}
            name="You"
          />
          <ChatCard
            msgContent={msg.response}
            img={"./botAi.png"}
            time={msg.currentTime}
            name="Another AI"
            showLike={showLike}
          />
        </div>
      ))}
    </div>
  );
};

export default Chat;
