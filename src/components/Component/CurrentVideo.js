import React, { useState } from "react";
import "./CurrentVideo.css";
import videoData from "../../data/video.json";
import videoDetailData from "../../data/video-details.json";

function CurrentVideo(props) {
  return (
    <>
      <div className="video">
        <video className="video__current" src={props.video} poster={props.image} controls></video>
      </div>
    </>
  );
}

export default CurrentVideo;
