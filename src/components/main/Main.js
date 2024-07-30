import React, { useState } from "react";
import DATA from "../../sampleData.json";
import Fuse from "fuse.js";

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

const Main = () => {
  const [chatView, setChatView] = useState(false);
  const [inputQuestion, setInputQuestion] = useState("");
  const [message, setMessage] = useState([]);
  // const [delay, setDelay] = useState(false);

  const fuse = new Fuse(DATA, {
    keys: ["question"],
    threshold: 0.3,
  });

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

  return (
    <div
      className={`flex-1 lg:ml-1/5 p-4 transition-all duration-300 h-screen relative md:justify-center md:items-center  lg:mb-8 lg:gap-10 lg:flex lg:flex-col ${
        chatView ? "flex items-end justify-start" : ""
      }`}
    >
      {/* needs to be hidden when chat starts  */}
      {/* chat section */}
      {!chatView ? (
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
            {DEMOQUESTIONS.map((questionItem, id) => (
              <div
                className="bg-white	rounded-md shadow-lg p-4 cursor-pointer"
                key={questionItem.id}
              >
                <div className="font-bold	text-xl	">{questionItem.question}</div>
                <div className="text-base font-normal text-primary01">
                  Get immediate AI generated response
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col h-screen pb-10 py-14">
          <div className="flex flex-col overflow-auto">
            {message.map((msg, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex bg-secondary bg-opacity-15 shadow-md rounded-md p-5 gap-2">
                  <div>
                    <img
                      src="./you.png"
                      alt="botAi"
                      className="w-16 h-16 rounded-full drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="text-base	font-bold	">You</div>
                    <div className="font-normal	text-base">{msg.question}</div>
                    <div>{msg.currentTime}</div>
                  </div>
                </div>
                <div className="flex bg-secondary bg-opacity-15 shadow-md rounded-md p-5 gap-2 mb-5 transition delay-700 duration-300 ease-in-out">
                  <div>
                    <img
                      src="./botAi.png"
                      alt="botAi"
                      className="max-w-none w-16 h-16 rounded-full drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="text-base	font-bold	">Anoter AI</div>
                    <div className="font-normal	text-base">{msg.response}</div>
                    <div>{msg.currentTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* chat section ends  */}

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
        <button className="bg-secondary p-2 text-base	rounded-md shadow-xl font-normal">
          Save
        </button>
      </div>
    </div>
  );
};

export default Main;
