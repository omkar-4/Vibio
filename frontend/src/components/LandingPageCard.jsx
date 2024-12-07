import React from "react";
import PropTypes from "prop-types";

function LandingPageCard({ image, artistname, isEven }) {
  LandingPageCard.propTypes = {
    image: PropTypes.string.isRequired,
    artistname: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
  };

  return (
    <>
      <div className={`relative ${isEven ? "translate-y-16" : ""}`}>
        <div className="w-40 h-52 rounded-xl overflow-hidden">
          <img src={image} className="object-cover" alt="" width={"100%"} height={"100%"} />
        </div>
        <div className="absolute top-0 right-0 translate-x-16 -translate-y-4 w-fit h-fit rounded-full bg-black opacity-80 border-2 border-white px-6 py-1">
          <span>{`@ ${artistname}`}</span>
        </div>
      </div>
    </>
  );
}

export default LandingPageCard;
