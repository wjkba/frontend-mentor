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
      <form
        className={type === "UPDATE" ? "comment-form2" : "comment-form"}
        onSubmit={onSubmit}
      >
        <textarea
          placeholder={type === "SEND" ? "Add a comment..." : ""}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {/* <div className="form__bottom"> */}
        <div className="avatar-wrap">
          {type === "UPDATE" ? (
            ""
          ) : (
            <img src="./images/avatars/image-juliusomo.webp" />
          )}
        </div>
        <div className="send-wrap">
          <button disabled={isTextAreaDisabled}>{type}</button>
        </div>
        {/* </div> */}
      </form>
    </>
  );
}

export default CommentForm;
