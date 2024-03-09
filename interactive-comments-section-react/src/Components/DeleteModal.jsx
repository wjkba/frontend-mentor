function DeleteModal({
  setShowModal,
  setIsSure,
  commentId,
  replyIds,
  executeDeleteComment,
  executeDeleteReply,
}) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <p>Delete comment</p>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="modal__buttons">
          <button onClick={() => setShowModal(false)}>NO, CANCEL</button>
          <button
            onClick={() =>
              deleteComment(
                commentId,
                replyIds,
                executeDeleteComment,
                executeDeleteReply
              )
            }
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

function deleteComment(
  commentId,
  replyIds,
  executeDeleteComment,
  executeDeleteReply
) {
  if (commentId === null) {
    void 0;
  } else {
    executeDeleteComment(commentId);
  }
  if (replyIds === null) {
    void 0;
  } else {
    executeDeleteReply(replyIds.parentId, replyIds.replyId);
  }
}

export default DeleteModal;
