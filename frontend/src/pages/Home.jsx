import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import PostPreview from "../components/PostPreview";
import CreateNewPostButton from "../components/CreateNewPostButton";
import { array } from "prop-types";
import { FaHome, FaCompass, FaFilm, FaUser } from 'react-icons/fa';

function Home() {
  const buttons = [
    "Fiction",
    "Non-Fiction",
    "Poetry",
    "Memories",
    "Scripts",
    "Biography",
    "Journals",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
  ].map((button, index) => (
    <button
      key={index}
      className="active:bg-[#B2B3AB] active:text-[#101010] text-[#B2B3AB] border-2 border-[#B2B3AB] hover:bg-[#b1b2ac] hover:text-[#101010] px-4 py-2 uppercase rounded-full box-border text-nowrap"
    >
      {button}
    </button>
  ));
  return (
    <>
      <Navbar />
      <section className="px-4">
        {/* <CreateNewPostButton /> */}
        <div className=" text-3xl">Let’s see some cool stuff!</div>
        <div id="menu-bar" className="w-full h-fit py-4 flex gap-4 overflow-hidden">
          {buttons}
        </div>
      <main>
        <div className="flex  ">
          <nav className="w-20 fixed bottom-0">
            <ul className="px-4 py-8 gap-10 flex md:flex-col">
              <button className="mb-2"><FaHome className="text-[#B2B3AB] text-xl" /></button>
              <button className="mb-2"><FaCompass className="text-[#B2B3AB] text-xl"  /></button>
              <button className="mb-2"><FaFilm className="text-[#B2B3AB] text-xl"  /></button>
              <button className="mb-2"><FaUser className="text-[#B2B3AB] text-xl"  /></button>
            </ul>
          </nav>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="aspect-video rounded-md overflow-hidden h-[30vw] bg-orange-700">
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      width="100%"
                      controls
                      height="100%"
                      light
                    /> */}
                  </div>
                  {/* <h4 className="text-zinc-300 px-2">Video Title</h4> */}
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
