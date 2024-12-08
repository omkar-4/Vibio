import React from "react";
import { IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";
import axios from "axios";

function CreateNewPostOverlay({ setShowForm }) {
  CreateNewPostOverlay.propTypes = {
    setShowForm: PropTypes.func.isRequired,
  };

  return (
    <div className=" text-white bg-darkmode-primary-bg">
      <button
        className="absolute top-4 left-4 text-4xl"
        onClick={() => {
          setShowForm(false);
        }}
      >
        <IoIosClose />
      </button>

      <form
        className="flex flex-col gap-4 w-full max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const image = e.target.image.value;
          const content = e.target.content.value;

          try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/createpost`, {
              title,
              image,
              content,
            });
            if (response.status === 201) {
              alert("Post created successfully!");
              setShowForm(false);
            }
          } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
          }
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 rounded bg-darkmode-secondary-bg text-white"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="p-2 rounded bg-darkmode-secondary-bg text-white"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          className="p-2 rounded bg-darkmode-secondary-bg text-white"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreateNewPostOverlay;
