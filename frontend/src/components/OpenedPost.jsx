// /components/OpenedPost.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const OpenedPost = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post and comments
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    fetchPost();
  }, [postId]);

  const handleCommentSubmit = async (e, comment) => {
    e.preventDefault();
    try {
      await axios.post(`/api/posts/${postId}/comment`, { comment });
      // Fetch updated comments
      const res = await axios.get(`/api/posts/${postId}`);
      setComments(res.data.comments);
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
        <form onSubmit={(e) => handleCommentSubmit(e, "New Comment")}>
          <input type="text" placeholder="Add a comment" />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default OpenedPost;
