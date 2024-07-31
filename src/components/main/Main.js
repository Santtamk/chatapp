import React, { useEffect, useState } from "react";
import DATA from "../../sampleData.json";
import Fuse from "fuse.js";
import Chat from "./Chat";

const DEMOQUESTIONS = [
  {
    id: "01",
    question: "Hi, what is the weather?",
  },
  {
    id: "02",
    question: "Hi, what is my location?",
  },
  {
    id: "03",
    question: "Hi, what is the temperature?",
  },
  {
    id: "04",
    question: "Hi, how are you?",
  },
];

const Main = ({ pastConversation, setPastConversationView, pastConversationView }) => {
  const [chatView, setChatView] = useState(false);
  const [inputQuestion, setInputQuestion] = useState("");
  const [message, setMessage] = useState([]);
  // const [delay, setDelay] = useState(false);
  console.log("pastConversation:", pastConversation);
  const fuse = new Fuse(DATA, {
    keys: ["question"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (pastConversationView && pastConversation.length > 0) {
      setChatView(true);
      setMessage(pastConversation);
    }
  }, [pastConversationView, pastConversation]);

  function string(words) {
    let result = fuse.search(words);
    if (result.length > 0) {
      return result[0].item.response;
    } else {
      return "As an AI Language Model, I don’t have the details";
    }
  }

  const onAsk = () => {
    if (inputQuestion.trim !== "") {
      const currentTime = getCurrentTimeWithAMPM();
      const response = string(inputQuestion);
      setMessage([
        ...message,
        { question: inputQuestion, response, currentTime },
      ]);
      setInputQuestion("");
      setChatView(true);
    }
  };

  function getCurrentTimeWithAMPM() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Converts hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
  }

  const handleClick = (question) => {
    setInputQuestion(question); // Set input question for further use
    const response = string(question); // Get the response for the clicked question
    const currentTime = getCurrentTimeWithAMPM(); // Get the current time
    setMessage([...message, { question, response, currentTime }]);
    setChatView(true); // Show the chat view
  };

  const saveTOLocal = () => {
    localStorage.setItem("chatHistory", JSON.stringify(message));
    setMessage([]);
    setChatView(false);
    setPastConversationView(false);
  };

  return (
    <div
      className={`flex-1 lg:ml-1/5 p-4 transition-all duration-300 h-screen relative md:justify-center md:items-center  lg:mb-8 lg:gap-10 lg:flex lg:flex-col ${
        chatView ? "flex items-end justify-start" : ""
      }`}
    >
      {/* needs to be hidden when chat starts  */}
      {/* chat section */}
      {!chatView && !pastConversationView && (
        <>
          <div className="flex flex-col justify-center items-center gap-5 text-center pt-5 overflow-y-hidden">
            <div className="font-medium	text-3xl">How Can I Help You Today?</div>
            <div>
              <img
                src="./botAi.png"
                alt="botAi"
                className="w-16 h-16 rounded-full drop-shadow-lg"
              />
            </div>
          </div>

          {/* suggestive questions */}

          <div className="flex flex-col gap-5 md:grid md:grid-rows-2 md:grid-cols-2 lg:grid lg:grid-cols-2 mt-5 snap-y	overscroll-contain">
            {DEMOQUESTIONS.map((questionItem) => (
              <div
                className="bg-white	rounded-md shadow-lg p-4 cursor-pointer"
                key={questionItem.id}
                onClick={() => handleClick(questionItem.question)}
              >
                <div className="font-bold	text-xl	">{questionItem.question}</div>
                <div className="text-base font-normal text-primary01">
                  Get immediate AI generated response
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* chatView */}
      {(chatView || pastConversationView) && (
        <div className="flex flex-col h-screen pb-10 py-14">
          <Chat conversationMap={message} />
        </div>
      )}

      {/* chat section ends  */}
      {pastConversationView ? null : (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-2 ">
          <input
            type="text"
            className="w-64	h-10 rounded-md shadow-xl border border-b-text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
          />
          <button
            className="bg-secondary p-2 rounded-md text-base	font-normal shadow-xl"
            onClick={onAsk}
          >
            Ask
          </button>
          <button
            className="bg-secondary p-2 text-base	rounded-md shadow-xl font-normal"
            onClick={saveTOLocal}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
