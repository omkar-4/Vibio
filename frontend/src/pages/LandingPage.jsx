import React from "react";

function LandingPage() {
  const token = localStorage.getItem("token");
  console.log(token);
  return <div>LandingPage</div>;
}

export default LandingPage;
