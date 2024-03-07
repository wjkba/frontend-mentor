import { useState } from "react";
import Data from "../data.json";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

// let comments = Data.comments;

function Comments({ currentUser }) {
  const [comments, setComments] = useState(Data.comments);
  const [activeComment, setActiveComment] = useState(null);

  //
  // add
  const addComment = (text, parentId) => {
    console.log("addcomment", text, parentId);
    createComment(text).then((comment) => {
      setComments([...comments, comment]);
      setActiveComment(null);
    });
  };
  const addReply = (text, parentId, replyTo = null) => {
    console.log("addreply", text, parentId);
    let parentComment = comments.find((comment) => comment.id === parentId);
    let replyingTo;
    let replyingDefault = parentComment.user.username;
    if (replyTo === null) replyingTo = replyingDefault;
    else replyingTo = replyTo;
    createReply(text, replyingTo).then((reply) => {
      const updatedReplies = [...parentComment.replies, reply];

      parentComment.replies = updatedReplies;
      setComments([...comments]);
      setActiveComment(null);
    });
    // createComment(text).then((comment) => {
    //   setComments([...comments, comment]);
    // });
  };

  const updateComment = (text, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: text };
      }
      return comment;
    });
    setComments(updatedComments);
    setActiveComment(null);
  };
  const updateReply = (text, commentId, parentId) => {
    let parentComment = comments.find((comment) => comment.id === parentId);
    const updatedReplies = parentComment.replies.map((reply) => {
      if (reply.id === commentId) {
        return { ...reply, content: text };
      }
      return reply;
    });
    parentComment.replies = updatedReplies;
    setComments([...comments]);
    setActiveComment(null);
  };

  //
  // create entry in data
  const createComment = async (text, parentId) => {
    return {
      id: Math.random().toString(36).substring(2, 15),
      content: text,
      createdAt: "now",
      replies: [],
      score: 1,
      user: Data.currentUser,
    };
  };

  const createReply = async (text, replyingTo) => {
    return {
      // content: `${replyingTo} ${text}`,
      content: (
        <>
          <b>@{replyingTo} </b>
          {text}
        </>
      ),
      createdAt: "now",
      id: Math.random().toString(36).substring(2, 15),
      replyingTo: replyingTo,
      score: 1,
      user: Data.currentUser,
    };
  };

  const deleteComment = (commentId) => {
    if (window.confirm("sure?")) {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
    }
  };
  const deleteReply = (parentId, replyId) => {
    let parentComment = comments.find((comment) => comment.id === parentId);

    if (window.confirm("sure?")) {
      const updatedReplies = parentComment.replies.filter(
        (reply) => reply.id !== replyId
      );
      parentComment.replies = updatedReplies;
      setComments([...comments]);
    }
  };

  //
  // RETURN
  //
  return (
    <>
      <div className="comments">
        {comments.map((comment) => (
          <>
            <Comment
              key={comment.id}
              comment={comment}
              replies={comment.replies}
              currentUser={currentUser}
              addComment={addComment}
              deleteComment={deleteComment}
              deleteReply={deleteReply}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              parentId={comment.id}
              addReply={addReply}
              updateComment={updateComment}
              updateReply={updateReply}
            />
          </>
        ))}
      </div>
      <CommentForm handleSubmit={addComment} />
    </>
  );
}

export default Comments;
