import FAQ_Question from "./FAQ_Question";

function FAQ() {
  const qa = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam  vitae neque eget nisl gravida pellentesque non ut velit. ",
    },
  ];

  return (
    <div>
      <div className="grid place-items-center">
        <h1 className="lg:text-4xl mb-8 text-very-dark-blue text-center text-3xl">
          Frequently Asked Questions
        </h1>
        <p className="lg:max-w-[32rem] text-grayish-blue text-center">
          Herea are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>

        <div className="mt-12 max-w-[30rem] w-full">
          {qa &&
            qa.map((i, index) => (
              <FAQ_Question
                question={i.question}
                answer={i.answer}
                key={index}
              />
            ))}
        </div>

        <div className="grid place-items center">
          <button className="mt-6 rounded-md min-w-32 w-full bg-soft-blue p-4 text-white font-semibold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
