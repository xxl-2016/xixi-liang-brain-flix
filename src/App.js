import React, { useState } from "react";
import * as Component from "./components/Component/Component";
import videoData from "./data/video.json";
import videoDetailData from "./data/video-details.json";
import "./App.css";
import axios from "axios";
import { BrainFlixApi } from "./api/BrainFlixApi";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailData[0]);
  const [nextVideos, setNextVideos] = useState(
    videoDetailData.filter((video) => video.id !== currentVideo.id)
  );

  return (
    <div className="App">
      <Component.Header />
      <Component.Video video={currentVideo} />
      <Component.Component currentVideo={currentVideo} videos={nextVideos} />
    </div>
  );
}

export default App;
