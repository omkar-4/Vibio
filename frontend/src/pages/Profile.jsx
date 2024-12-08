// Profile.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogOut from "../components/LogOut";
import Navbar from "../components/Navbar";
import { IoIosSettings } from "react-icons/io";
import PostFeed from "../components/PostFeed";
import CreatePost from "../components/CreatePost";

const Profile = () => {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({ commonName: "", bio: "", password: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) return (window.location.href = "/"); // No token found, redirect to login page

      // fetch user details from the backend
      const response = await axios.get("/api/profile/getuserdata", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data); // Set user data to state
      // see the user details in the console, so extract from response and only see the username, userid, common name

      setForm({ commonName: response.data.commonName, bio: response.data.bio, password: "" });
    };
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    await axios.put("/api/update-profile", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Profile updated!");
  };

  return (
    <>
      {/* Profile UI */}
        <Navbar />
      <main className="px-4 h-full w-full text-[#f5f5f5]">
        <section className="w-full py-4">
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>

            <div className="flex flex-col h-fit">
              <h1 className="text-2xl capitalize">{user.commonName}your_public_name_here</h1>
              <p> @{user.username}ryoso-mayose</p>
              <button className="text-teal-400 w-fit mt-2 rounded-full">My Friends : 100</button>
            </div>
          </div>
          <div className="">
            {/* bio */}
            <div className="w-full h-fit py-4">
              <p>
                {user.bio} 3D Animator | Freelancer <br /> Vibing at all times <br /> Manga Lover
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border border-[#e6e6e6] hover:bg-[#e6e6e6] text-[#f5f5f5] hover:text-[#101010] py-1 px-3 uppercase rounded-full box-border flex justify-center items-center gap-1">
              <span className="text-sm">Edit Profile</span>
            </button>
            <button className="border border-[#e6e6e6] hover:bg-[#e6e6e6] text-[#f5f5f5] hover:text-[#101010] w-8 h-8 uppercase rounded-full box-border flex justify-center items-center gap-1">
              <IoIosSettings className="text-lg" />
            </button>
          </div>
        </section>

        <div className="max-w-md mx-auto hidden">
          <h2 className="text-2xl font-bold">Profile</h2>
          <div>
            <label>Common Name</label>
            <input
              type="text"
              value={form.commonName}
              onChange={(e) => setForm({ ...form, commonName: e.target.value })}
            />
          </div>
          <div>
            <label>Bio</label>
            <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}></textarea>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button onClick={handleUpdate}>Update</button>
        </div>

        {/* create a dynamic backend connected profile feed posts gallery view grid just like instagram */}
        <div className="max-w-screen-xl mx-auto p-6">
          <h2 className="text-2xl font-semibold">Your Posts</h2>
          <PostFeed />
          <CreatePost userId={form.bio} />
        </div>
      </main>
    </>
  );
};

export default Profile;
