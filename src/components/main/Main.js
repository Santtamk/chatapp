import React, { useState } from "react";
import DATA from "../../sampleData.json";

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
  const [inputQuestion, setInputQuestion] = useState([]);
  const [showAnswer, setShowAnswer] = useState("");

  // console.log("full data:", DATA);
  // let input = "javascript?";

  function string(words) {
    console.log("words:", words.split(" "));
    let findWord = DATA.find((data) =>
      data.question.toLowerCase().includes(words.toLowerCase())
    );
    setChatView(true);
    if (findWord) {
      // console.log("findWord:", findWord.question.split(" "));
      // console.log("found word:", findWord);
      setShowAnswer(findWord.answer);
    } else {
      setShowAnswer("As an AI Language Model, I don’t have the details");
    }
  }
  // console.log(showAnswer);

  return (
    <div
      className={`flex-1 lg:ml-1/5 p-4 transition-all duration-300 h-screen relative md:justify-center md:items-center  lg:mb-8 lg:gap-10 lg:flex lg:flex-col ${
        chatView ? "flex items-end" : ""
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
        <div className="flex flex-col items-end justify-end">
          <div className="flex gap-5 text-center">
            <div>
              <img
                src="./botAi.png"
                alt="botAi"
                className="w-16 h-16 rounded-full drop-shadow-lg"
              />
            </div>
            <div className="font-medium  text-3xl">{inputQuestion}</div>
          </div>
          <div className="flex gap-5 text-center">
            <div>
              <img
                src="./botAi.png"
                alt="botAi"
                className="w-16 h-16 rounded-full drop-shadow-lg"
              />
            </div>
            <div className="font-medium  text-3xl">{showAnswer}</div>
          </div>
        </div>
      )}
      {/* chat section ends  */}

      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-2 ">
        <input
          type="text"
          className="w-64	h-10 rounded-md shadow-xl border border-b-text"
          value={[...inputQuestion]}
          onChange={(e) => setInputQuestion(e.target.value)}
        />
        <button
          className="bg-secondary p-2 rounded-md text-base	font-normal shadow-xl"
          onClick={() => string(inputQuestion)}
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
