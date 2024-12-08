import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";

function PostPreview() {
  const post = {
    id: 1,
    name: "Ryoso Mayose",
    username: "ryoso mayose",
    src: "/images/bgstuff.png",
    date: "2022-01-01",
    title: "Chapter 1 - The place where the things fall into the ground",
    contentPreview: `Sen was an ordinary girl, but not after a certain symbiote took her as a host. Living on a run, she thought she had seen it all. An uneventful night turn into full conf. Sen was an ordinary girl, but not after a certain symbiote took her and put her inside of a wierd black box which was tuned to be asynchronous to javascript’s peculiar angular programming ... read more`,
    likes: 120,
    comments: 45,
  };
  return (
    <section className="p-4 rounded-2xl shadow-md border-2 border-[#303030]  ">
      <div className="flex gap-3 items-center">
        <img src="/images/skull.jpg" className="object-cover w-14 h-14 rounded-full" alt="" />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="capitalize">{post.name}</p>
            <p className="lowercase text-zinc-400">@{post.username}</p>
          </div>
          <p className="text-[#BCBCBC]">{post.date} | 10:47 AM</p>
        </div>
      </div>
      <div className="flex items-start justify-start gap-2 mt-4">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <img src={post.src} className="w-20 h-20 rounded-lg" alt="" />
      </div>
      <p className="py-4">{post.contentPreview}</p>
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="p-2 text-sm text-white hover:text-teal-600 flex gap-2 items-center border-2 border-[#303030] rounded-md">
              <FaRegHeart />
              750
            </button>

            <button className="p-2 text-sm text-white hover:text-teal-600 flex gap-2 items-center border-2 border-[#303030] rounded-md">
              <FaRegHeart />
              240
            </button>

            <button className="p-2 text-sm text-white hover:text-teal-600 flex gap-2 items-center border-2 border-[#303030] rounded-md">
              <FaRegHeart />
              145
            </button>
          </div>
          <div>
            <button className="text-lg px-3 py-2 text-white hover:text-teal-600 flex gap-2 items-center border-2 border-[#303030] rounded-md">
              <LuShare2 />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostPreview;
