// /components/PostButton.js
import React, { useState } from "react";
import CreatePost from "./CreatePost";

const PostButton = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleClick = () => {
    setShowCreatePost(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Post Content</button>
      {showCreatePost && <CreatePost />}
    </div>
  );
};

export default PostButton;
