import { useState } from "react";

function CommentForm({ handleSubmit, initialText = "", type = "SEND" }) {
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
        <div className="form__bottom">
          <div>
            {type === "SEND" && (
              <img src="./images/avatars/image-juliusomo.webp" />
            )}
          </div>
          <button disabled={isTextAreaDisabled}>{type}</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
