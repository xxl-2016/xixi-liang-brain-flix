import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoComments from "../components/VideoComments/VideoComments";
import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import NextVideos from "../components/NextVideos/NextVideos";
import axios from "axios";

function HomePage() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoDetail, setCurrentVideoDetail] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("/videos");
      const fetchedVideos = response.data;
      let initialVideo;
      if (videoId) {
        const fetchedVideoDetail = await axios.get(`/videos/${videoId}`);
        setCurrentVideoDetail(fetchedVideoDetail.data);
        initialVideo = fetchedVideoDetail.data;
      } else {
        initialVideo = fetchedVideos[0];
        const fetchedVideoDetail = await axios.get(
          `/videos/${initialVideo.id}`
        );
        setCurrentVideoDetail(fetchedVideoDetail.data);
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
