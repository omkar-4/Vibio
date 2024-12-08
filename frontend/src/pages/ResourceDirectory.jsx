import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ReactPlayer from "react-player";
import AddYtResource from "../components/AddYtResource";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

function ResourceDirectory() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`${VITE_SERVER_URL}/api/resources/res-yt-learnanim`) // Ensure this is your correct backend URL
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <main className=" bg-[#101010] h-screen w-screen text-[#f5f5f5]">
      <Navbar />
      <nav className="w-full h-fit py-4 flex justify-between">
        <button className="active:bg-[#B2B3AB] active:text-[#101010] text-[#B2B3AB] border-[1px] border-[#B2B3AB] hover:bg-[#b1b2ac] hover:text-[#101010] h px-4 py-2 uppercase rounded-full box-border">
          FICTION
        </button>
        <AddYtResource />
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(() => {
          try {
            return videos
              .slice()
              .reverse()
              .map((video, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <ReactPlayer url={video.url} width="100%" controls height="100%" light />
                  </div>
                  <h4 className="text-zinc-300 px-2">{video.title}</h4>
                </div>
              ));
          } catch (error) {
            console.error("Error rendering videos:", error);
            return <p className="text-red-500">Failed to load videos.</p>;
          }
        })()}
      </div>
    </main>
  );
}

export default ResourceDirectory;
