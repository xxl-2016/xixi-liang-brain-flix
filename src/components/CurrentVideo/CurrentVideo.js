import React from "react";
import "./CurrentVideo.scss";

// // Store API key
const api = "c31ccc68-d2c8-4700-808f-71f5037605c2";

function CurrentVideo({ currentVideo }) {
  return (
    <>
      <div className="video">
        <video
          className="video__current"
          src={`${currentVideo.video}?api_key=${api}`}
          poster={currentVideo.image}
          controls
        ></video>
      </div>
    </>
  );
}

export default CurrentVideo;
