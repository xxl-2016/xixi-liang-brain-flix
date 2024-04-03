import React, { useState, useEffect } from "react";
import "./HomePage.css";
import VideoComments from "../components/Component/VideoComments";
import CurrentVideo from "../components/Component/CurrentVideo";
import NextVideos from "../components/Component/NextVideos";
import videoDetailData from "../data/video-details.json";
import { BrainFlixApi } from "../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function HomePage() {
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
    <>
      <CurrentVideo currentVideo={currentVideo} />
      <div className="content">
        <VideoComments
          currentVideo={currentVideo}
          nextVideos={nextVideos}
          selectVideo={handleVideoSelect}
        />
        <NextVideos nextVideos={nextVideos} selectVideo={handleVideoSelect} />
      </div>
    </>
  );
}

export default HomePage;
