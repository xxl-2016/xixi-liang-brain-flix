import React from "react";
import "./CurrentVideo.scss";
import { BrainFlixApi } from "../../api/BrainFlixApi";

// // Store API key
const baseUrlForStream = "https://unit-3-project-api-0a5620414506.herokuapp.com/stream";
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function CurrentVideo({ currentVideo }) {
  return (
    <>
      <div className="video">
        <video
          className="video__current"
          src={`${baseUrlForStream}?api_key=${api}`}
          poster={currentVideo.image}
          controls
        ></video>
      </div>
    </>
  );
}

export default CurrentVideo;
