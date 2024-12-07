import { useState } from "react";
import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

function AddYtResource() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [videoData, setVideoData] = useState({
    title: "",
    url: "",
    description: "",
  });

  const toggleForm = () => setIsFormVisible(!isFormVisible);

  const handleInputChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${VITE_SERVER_URL}/api/resources/add-res-yt-learnanim`, videoData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setIsFormVisible(false);
      })
      .catch((error) => console.error("Error adding video", error));
  };

  return (
    <div className="relative">
      <button onClick={toggleForm} className="border-2 box-border border-[#B2B3AB] text-[#eef0e3] px-4 py-2 uppercase rounded-full">
        Add Resource
      </button>
      {isFormVisible && (
        <form className="absolute right-0 mt-4 w-52 p-4 rounded-lg shadow-lg space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 bg-transparent text-[#eef0e3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2B3AB]"
            name="title"
            value={videoData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            className="w-full p-2 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2B3AB]"
            name="url"
            value={videoData.url}
            onChange={handleInputChange}
            placeholder="URL"
          />
          <textarea
            className="w-full p-2 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2B3AB]"
            name="description"
            value={videoData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <button className="w-full bg-[#B2B3AB] text-black font-semibold p-2 rounded-md hover:bg-[#eef0e3]" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddYtResource;
