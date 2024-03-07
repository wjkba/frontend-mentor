import CommentForm from "./CommentForm";
import Reply from "./Reply";

function Comment({
  comment,
  replies,
  currentUser,
  deleteComment,
  deleteReply,
  activeComment,
  addComment,
  setActiveComment,
  parentId = null,
  addReply,
  updateComment,
  updateReply,
}) {
  const canEdit = currentUser === comment.user.username;
  const canDelete = currentUser === comment.user.username;
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  return (
    <>
      <div className="post">
        <div className="post__top">
          <img src={comment.user.image.webp} alt="" />
          <p>{comment.user.username}</p>
          <p>{comment.createdAt}</p>
        </div>
        {!isEditing && (
          <div className="post__text">
            <p>{comment.content}</p>
          </div>
        )}
        {isEditing && (
          <CommentForm
            initialText={comment.content}
            handleSubmit={(text) => updateComment(text, comment.id)}
          />
        )}

        <div className="post__bottom">
          <div className="likes">
            <img src="./images/icon-minus.svg" alt="" />
            <p>{comment.score}</p>
            <img src="./images/icon-plus.svg" alt="" />
          </div>
          <button className="reply">
            {canDelete && (
              <p onClick={() => deleteComment(comment.id)}>Delete</p>
            )}
            {canEdit && (
              <p
                onClick={() =>
                  setActiveComment({ id: comment.id, type: "editing" })
                }
              >
                Edit
              </p>
            )}
            <div>
              <img src="./images/icon-reply.svg" alt="" />
            </div>

            <p
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </p>
          </button>
        </div>
      </div>
      {isReplying && (
        <CommentForm handleSubmit={(text) => addReply(text, replyId)} />
      )}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Reply
              comment={reply}
              key={reply.id}
              parentId={comment.id}
              replies={[]}
              currentUser={currentUser}
              deleteReply={deleteReply}
              addComment={addComment}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              addReply={addReply}
              updateReply={updateReply}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Comment;
