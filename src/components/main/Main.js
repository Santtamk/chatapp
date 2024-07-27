import React from "react";

const Main = () => {
  const demoQuestions = [
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

  return (
    <div className="flex-1 lg:ml-1/5 p-4 transition-all duration-300 h-screen relative md:justify-center md:items-center  lg:mb-8 lg:gap-10 lg:flex lg:flex-col">
      {/* needs to be hidden when chat starts  */}
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
        {demoQuestions.map((questionItem, id) => (
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

      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-2 ">
        <input
          type="text"
          className="w-64	h-10 rounded-md shadow-xl border border-b-text"
        />
        <button className="bg-secondary p-2 rounded-md text-base	font-normal shadow-xl">
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
