function PostPreview() {
  const post = {
    id: 1,
    author: "John Doe",
    date: "2022-01-01",
    title: "Sample Post Title",
    contentPreview: `Action Sequence
A boy named Aqua is browsing articles on the internet when he stumbles upon one about dreams.

The Article
The article suggests that dreams typically last between 5 to 20 minutes. It also mentions that 95 percent of dreams are forgotten upon waking, and dreaming can aid in learning and memory formation, especially for blind individuals.

Aqua to Himself
Aqua reflects, "95 percent, huh! (Takes a deep breath) (serious tone) Yes, I don't remember much of what I see, but... That one night, that one dream, I remember it clearly till now."

Scene transitions to the dream

The Dream
Aqua is in his room, seated at his desk and writing when he hears a noise from the backyard. He opens the door and discovers a strange structure made of white plastic and wood, resembling a tent with a flat top. His grandmother is inspecting it before walking away. Curious, Aqua approaches and finds a morgue underneath. Upon opening it, he finds his friend Arya dead, dressed in all black clothes with a red bull skull affixed to her neck.

Aqua
"And then I woke up... Aria, one of my best friends, was dead." Aqua inhales deeply. "The way she was dressed, the way it all felt... it was devastating. But one thing stands out: when I saw her like that, everything suddenly turned dark and blurry. I could only see her, everything else swallowed by darkness. A pentagon formed beneath us. I couldn't remember anything else. But it wouldn't be so bad if I hadn't seen something similar, something in the same context, or I don't know what to say, but one day before that dream, what I saw."

Aqua
"Aria, she died. It felt like we were at school, perhaps on the ground, but I can't be certain. She was in her school dress, so I could deduce we were on the school ground. It seemed like something abrupt happened to her. As she fell, everything became blurred, much like the previous dream, or well, the next dream."`,
    likes: 120,
    comments: 45,
  };
  return (
    <section className="p-4 rounded-lg shadow-md bg-[#1c1c1c] my-4">
      <h3 className="text-[#5A8C70]">{post.author}</h3>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-400 mb-4">
        {post.contentPreview.slice(0, 200)}
        {
          <span onClick={() => console.log("read more")} style={{ cursor: "pointer" }} className="text-[#5A8C70]">
            {" "}
            ... read more{" "}
          </span>
        }
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="like-button text-[#5A8C70] mr-2">Like</button>
          <span>{post.likes} likes</span>
        </div>
        <button className="comment-button text-[#5A8C70]">Comments ({post.comments})</button>
      </div>
    </section>
  );
}

export default PostPreview;
