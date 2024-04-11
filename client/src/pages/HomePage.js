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
  const [refreshCounter, setRefreshCounter] = useState(0);

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
    window.scrollTo(0, 0);
  }, [videoId, refreshCounter]);

  if (!currentVideo || !currentVideoDetail || nextVideos.length === 0) {
    return <>Loading...</>;
  }

  const handleNewComment = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  return (
    <>
      <CurrentVideo currentVideo={currentVideo} />
      <div className="content">
        <VideoComments
          currentVideo={currentVideoDetail}
          onNewComment={handleNewComment}
        />
        <NextVideos nextVideos={nextVideos} />
      </div>
    </>
  );
}

export default HomePage;
