import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoComments from "../components/Component/VideoComments";
import CurrentVideo from "../components/Component/CurrentVideo";
import NextVideos from "../components/Component/NextVideos";
import { BrainFlixApi } from "../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function HomePage() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoDetail, setCurrentVideoDetail] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await api.getVideos();
      let initialVideo;
      if (videoId) {
        const fetchedVideoDetail = await api.getVideo(videoId);
        setCurrentVideoDetail(fetchedVideoDetail);
        initialVideo = fetchedVideoDetail;
      } else {
        initialVideo = fetchedVideos[0];
        const fetchedVideoDetail = await api.getVideo(initialVideo.id);
        setCurrentVideoDetail(fetchedVideoDetail);
      }
      setCurrentVideo(initialVideo);
      setNextVideos(
        fetchedVideos.filter((video) => video.id !== initialVideo.id)
      );
    };
    fetchVideos();
  }, [videoId]);

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
