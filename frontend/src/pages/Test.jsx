import React from "react";
import PostButton from "../components/PostButton"; // Import the PostButton to show the create post button
import Post from "../components/Post"; // Post component for feed preview
import OpenedPost from "../components/OpenedPost"; // Opened post component

const Test = () => {
  return (
    <div>
      <h1>Welcome to the Platform</h1>
      <PostButton /> {/* Show the button to create a post */}
      <Post post={{ title: "Sample Post", content: "This is a sample post content." }} /> {/* Example post preview */}
      <OpenedPost postId="123" /> {/* Example post detail */}
    </div>
  );
};

export default Test;
