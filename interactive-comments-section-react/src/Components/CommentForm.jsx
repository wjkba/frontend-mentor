import { useState } from "react";

function CommentForm({ handleSubmit, initialText = "" }) {
  const [text, setText] = useState(initialText);
  const isTextAreaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <>
      <form className="comment-form" onSubmit={onSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button disabled={isTextAreaDisabled}>submit</button>
      </form>
    </>
  );
}

export default CommentForm;
