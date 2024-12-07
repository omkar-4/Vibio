// PostFeed.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "./CreatePost";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/posts/getposts?page=${page}&limit=10`);
        if (Array.isArray(response.data.posts)) {
          setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
        } else {
          setPosts([]);
        }
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, [page]);

  const loadMore = () => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
  };

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(`/api/like/${postId}`, { userId: "currentUserId" });
      setPosts(posts.map((post) => (post._id === postId ? response.data : post)));
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={post.image} alt={post.caption} className="w-full h-64 object-cover rounded-md" />
            <p className="mt-2 text-sm">{post.caption}</p>
            <button onClick={() => handleLike(post._id)}>Like</button>
            <p>{post.likes.length} likes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
