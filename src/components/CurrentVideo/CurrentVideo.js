import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ currentVideo }) {
  return (
    <>
      <div className="video">
        <video
          className="video__current"
          src={currentVideo.video}
          poster={currentVideo.image}
          controls
        ></video>
      </div>
    </>
  );
}

export default CurrentVideo;
