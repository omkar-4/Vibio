import React from "react";

function LogOut() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return <button onClick={handleLogout} className="bg-red-500 hover:bg-red-800 text-[#f5f5f5] px-6 py-2 uppercase rounded-full box-border">LogOut</button>;
}

export default LogOut;
