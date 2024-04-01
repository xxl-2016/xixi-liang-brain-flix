import React, { useState, useEffect } from "react";
import Component from "./components/Component/Component";
import Header from "./components/Component/Header";
import CurrentVideo from "./components/Component/CurrentVideo";
import videoDetailData from "./data/video-details.json";
import "./App.css";
import axios from "axios";
import { BrainFlixApi } from "./api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailData[0]);
  const [nextVideos, setNextVideos] = useState(
    videoDetailData.filter((video) => video.id !== currentVideo.id)
  );

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await api.getVideos();
        setNextVideos(
          fetchedVideos.filter((video) => video.id != currentVideo.id)
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoSelect = async (selectedVideo) => {
    try {
      const selectVideo = await api.getVideo(selectedVideo);
      const fetchedVideos = await api.getVideos();
      setCurrentVideo(selectVideo);
      setNextVideos(
        fetchedVideos.filter((video) => video.id != selectVideo.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <CurrentVideo currentVideo={currentVideo} />
      <Component
        currentVideo={currentVideo}
        nextVideos={nextVideos}
        selectVideo={handleVideoSelect}
      />
    </div>
  );
}

export default App;
