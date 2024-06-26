import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ currentVideo }) {
  return (
    <>
      <div className="video">
        <video
          className="video__current"
          src={"http://localhost:3000/images/BrainStation Sample Video.mp4"}
          poster={currentVideo.image}
          controls
        ></video>
      </div>
    </>
  );
}

export default CurrentVideo;
