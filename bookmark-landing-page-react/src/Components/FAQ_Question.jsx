import { useState } from "react";

function FAQ_Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleArrowClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <div className="w-full">
        <div
          onClick={handleArrowClick}
          className="question cursor-pointer border-b-2 mb-4 pb-4 gap-5 flex justify-between items-center w-full"
        >
          <p className="text-very-dark-blue text-xl ">{question}</p>

          <div className="cursor-pointer" onClick={handleArrowClick}>
            <img
              className={
                showAnswer
                  ? "filter-red rotate-180 transition-all"
                  : "transition-all"
              }
              src="/images/icon-arrow.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <p
            className={
              showAnswer
                ? "block mb-12  text-grayish-blue max-w-[30rem] leading-8"
                : "hidden"
            }
          >
            {answer}
          </p>
        </div>
      </div>
    </>
  );
}

export default FAQ_Question;
