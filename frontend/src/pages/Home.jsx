import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import PostPreview from "../components/PostPreview";

function Home() {
  return (
    <>
      <Navbar />
      <main className="px-4">
        <div className=" text-3xl mb-4">Let’s see some cool stuff!</div>
        <div className="max-w-sm mx-auto">
          <PostPreview className="max-w-sm mx-auto" />
          <PostPreview className="max-w-sm mx-auto" />
          <PostPreview className="max-w-sm mx-auto" />
        </div>
      </main>
    </>
  );
}

export default Home;
