import React, { useState } from "react";
import Component from "./components/Component/Component";
import Header from "./components/Component/Header";
import CurrentVideo from "./components/Component/CurrentVideo";
import videoData from "./data/video.json";
import videoDetailData from "./data/video-details.json";
import "./App.css";
import axios from "axios";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailData[0]);
  const [nextVideos, setNextVideos] = useState(
    videoDetailData.filter((video) => video.id !== currentVideo.id)
  );
  const handleVideoSelect = (selectedVideo) => {
    setCurrentVideo(selectedVideo);
    setNextVideos(videoDetailData.filter((video) => selectedVideo.id !== video.id));
  };

  return (
    <div className="App">
      <Header />
      <CurrentVideo video={currentVideo} />
      <Component
        currentVideo={currentVideo}
        nextVideos={nextVideos}
        selectVideo={handleVideoSelect}
      />
    </div>
  );
}

export default App;
