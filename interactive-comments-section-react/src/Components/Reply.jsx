import CommentForm from "./CommentForm";
import { useState } from "react";
function Reply({
  comment,
  parentId,
  replies,
  currentUser,
  deleteReplyactiveComment,
  activeComment,
  setActiveComment,
  addComment,
  addReply,
  deleteReply,
  updateReply,
}) {
  const [score, setScore] = useState(comment.score);
  const [disablePlus, setDisablePlus] = useState(false);
  const [disableMinus, setDisableMinus] = useState(false);
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const canEdit = currentUser === comment.user.username;
  const canDelete = currentUser === comment.user.username;
  const replyId = parentId ? parentId : comment.id;
  const handleScoreChange = (type, score) => {
    if (!disablePlus && type === "+") {
      setScore((s) => s + 1);
      setDisablePlus(true);
      setDisableMinus(true);
    }
    if (!disableMinus && type === "-") {
      setScore((s) => s - 1);
      setDisablePlus(true);
      setDisableMinus(true);
    }
  };

  return (
    <>
      <div className="post-reply--wrap">
        <div key={comment.id} className="post-reply">
          <div className="post__top">
            <img src={comment.user.image.webp} alt="" />

            <p>{comment.user.username}</p>
            {currentUser === comment.user.username && (
              <span
                style={{
                  backgroundColor: "#5457B6",
                  color: "white",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "0.3rem",
                }}
              >
                you
              </span>
            )}
            <p>{comment.createdAt}</p>
          </div>
          {!isEditing && (
            <div className="post__text">
              <p>{comment.content}</p>
            </div>
          )}
          {isEditing && (
            <CommentForm
              type="UPDATE"
              initialText={comment.content}
              handleSubmit={(text) => updateReply(text, comment.id, parentId)}
            />
          )}
          {/* <div className="post__bottom"> */}

          <div className="likes-wrap">
            <div className="likes">
              <button
                onClick={() => handleScoreChange("+")}
                disabled={disablePlus}
              >
                <img src="./images/icon-plus.svg" />
              </button>

              <p>{score}</p>
              <button
                onClick={() => handleScoreChange("-")}
                disabled={disableMinus}
              >
                <img src="./images/icon-minus.svg" />
              </button>
            </div>
          </div>
          <div className="bottom__buttons">
            {canDelete && (
              <div
                className="delete"
                onClick={() => deleteReply(parentId, comment.id)}
              >
                <img src="./images/icon-delete.svg"></img>
                <p>Delete</p>
              </div>
            )}

            {canEdit && (
              <div
                className="edit"
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  setActiveComment({ id: comment.id, type: "editing" });
                }}
              >
                <div>
                  <img src="./images/icon-edit.svg" alt="" />
                </div>
                <p>Edit</p>
              </div>
            )}
            <div
              className="reply"
              onClick={() => {
                setActiveComment({ id: comment.id, type: "replying" });
              }}
            >
              <div>
                <img src="./images/icon-reply.svg" alt="" />
              </div>
              <p>Reply</p>
            </div>
          </div>
          {/* </div> */}
        </div>
        {isReplying && (
          <CommentForm
            type="REPLY"
            handleSubmit={(text) =>
              addReply(text, replyId, comment.user.username)
            }
          />
        )}
      </div>
    </>
  );
}

export default Reply;
