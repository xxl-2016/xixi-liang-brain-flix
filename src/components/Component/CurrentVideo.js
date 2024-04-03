import React, { useState } from "react";
import "./CurrentVideo.css";

function CurrentVideo(props) {
  return (
    <>
      <div className="video">
        <video
          className="video__current"
          src={props.currentVideo.video}
          poster={props.currentVideo.image}
          controls
        ></video>
      </div>
    </>
  );
}

export default CurrentVideo;
