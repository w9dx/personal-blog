import { useState } from "react";

export default function AddCommentForm({ onAddComment }) {
  const [postedBy, setPostedBy] = useState("");
  const [commentText, setCommentText] = useState("");

  return (
    <div>
      <h3>Add a new comment</h3>
      <label>Name:</label>
      <input
        type="text"
        name="postedBy"
        placeholder="Who are you?"
        value={postedBy}
        onChange={(e) => setPostedBy(e.target.value)}
      />
      <label>Comment:</label>
      <input
        type="text"
        name="comment"
        placeholder="Add a comment..."
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
      />
      <button
        onClick={() => {
          onAddComment({ postedBy, commentText });
        }}
      >
        Post
      </button>
    </div>
  );
}
