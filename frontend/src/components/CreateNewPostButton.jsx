import React from "react";

function CreateNewPostButton() {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => setShowForm(true)} // useState to manage modal visibility
    >
      Create New Post
    </button>
  );
}

export default CreateNewPostButton;
