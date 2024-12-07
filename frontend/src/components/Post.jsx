import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}...</p>
      <button>Read More</button>
    </div>
  );
};

export default Post;
