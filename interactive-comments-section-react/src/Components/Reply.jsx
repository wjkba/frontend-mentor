import CommentForm from "./CommentForm";
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
  return (
    <>
      <div className="post-reply--wrap">
        <div key={comment.id} className="post-reply">
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
              handleSubmit={(text) => updateReply(text, comment.id, parentId)}
            />
          )}
          <div className="post__bottom">
            <div className="likes">
              <img src="./images/icon-minus.svg" alt="" />
              <p>{comment.score}</p>
              <img src="./images/icon-plus.svg" alt="" />
            </div>
            <div
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
              className="reply"
            >
              {canDelete && (
                <p onClick={() => deleteReply(parentId, comment.id)}>Delete</p>
              )}
              {canEdit && (
                <p
                  onClick={() => {
                    setActiveComment({ id: comment.id, type: "editing" });
                  }}
                >
                  Edit!!!!!!!
                </p>
              )}
              <div>
                <img src="./images/icon-reply.svg" alt="" />
              </div>
              <p
                onClick={() => {
                  setActiveComment({ id: comment.id, type: "replying" });
                }}
              >
                Reply
              </p>
            </div>
          </div>
        </div>
        {isReplying && (
          <CommentForm
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
