// CreatePost.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CreatePost2 = ({ userId }) => {
  console.log("userId:", userId);

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("userId", userId);
    formData.append("image", image);
    console.log("userid:", userId, "image:", image, "caption:", caption);

    try {
      const response = await axios.post("/api/posts/createpost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Post created:", response.data);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  CreatePost.propTypes = {
    userId: PropTypes.string.isRequired, // Assuming userId is passed as a string
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
      <textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Write a caption" required />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost2;
