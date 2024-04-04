import React, { useState, useEffect } from "react";
import "./HomePage.css";
import VideoComments from "../components/Component/VideoComments";
import CurrentVideo from "../components/Component/CurrentVideo";
import NextVideos from "../components/Component/NextVideos";
import { BrainFlixApi } from "../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoDetail, setCurrentVideoDetail] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await api.getVideos();
      const initialVideo = fetchedVideos[0];
      setCurrentVideo(initialVideo);
      setNextVideos(
        fetchedVideos.filter((video) => video.id != initialVideo.id)
      );
      const fetchedVideoDetail = await api.getVideo(initialVideo.id);
      setCurrentVideoDetail(fetchedVideoDetail);
    };
    fetchVideos();
  }, []);

  if (!currentVideo || !currentVideoDetail || nextVideos.length === 0) {
    return <>Loading...</>;
  }

  const handleVideoSelect = async (selectedVideo) => {
    try {
      const selectVideo = await api.getVideo(selectedVideo);
      const fetchedVideos = await api.getVideos();
      setCurrentVideo(selectVideo);
      setNextVideos(
        fetchedVideos.filter((video) => video.id != selectVideo.id)
      );
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CurrentVideo currentVideo={currentVideo} />
      <div className="content">
        <VideoComments currentVideo={currentVideoDetail} />
        <NextVideos nextVideos={nextVideos} selectVideo={handleVideoSelect} />
      </div>
    </>
  );
}

export default HomePage;
