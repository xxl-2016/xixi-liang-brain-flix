import React, { useState, useEffect } from "react";
import "./HomePage.css";
import VideoComments from "../components/Component/VideoComments";
import CurrentVideo from "../components/Component/CurrentVideo";
import NextVideos from "../components/Component/NextVideos";
import { BrainFlixApi } from "../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState({});
  const [currentVideoDetail, setCurrentVideoDetail] = useState({});
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await api.getVideos();
      setCurrentVideo(fetchedVideos[0]);
      setNextVideos(
        fetchedVideos.filter((video) => video.id != currentVideo.id)
      );
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const fetchedVideoDetail = await api.getVideo(currentVideo.id);
      setCurrentVideoDetail(fetchedVideoDetail);
    };

    fetchVideoDetail();
  }, [currentVideo.id]);

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
        <VideoComments currentVideo={currentVideoDetail} />
        <NextVideos nextVideos={nextVideos} selectVideo={handleVideoSelect} />
      </div>
    </>
  );
}

export default HomePage;
