import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import PostPreview from "../components/PostPreview";
import CreateNewPostButton from "../components/CreateNewPostButton";
import { array } from "prop-types";
import { useState } from "react";
import CatagoryMenu from "../components/CatagoryMenu";

function Home() {
  return (
    <>
      <section className="h-full w-full">
        <Navbar />

        <CreateNewPostButton />
        <div className=" text-3xl">Let’s see some cool stuff!</div>
        <CatagoryMenu />
        <main className="w-full">
          <div className="flex ">
            <div className="w-full">
              <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 18 }, (_, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <PostPreview />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Home;
