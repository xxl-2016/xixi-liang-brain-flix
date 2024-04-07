import React from "react";
import { Link } from "react-router-dom";
import "./NextVideos.css";

function NextVideos({ nextVideos, selectVideo }) {
  return (
    <>
      {/* Next Video Section */}
      <div className="next">
        <div className="next__heading">
          <h2 className="next__heading--text">NEXT VIDEOS</h2>
        </div>
        <div className="next__videos">
          {nextVideos.map((video) => (
            <Link key={video.id} to={`/videos/${video.id}`} className="next__videos--video">
              <img
                className="next__videos--video-image"
                src={video.image}
                alt={video.title}
              />
              <div className="next__videos--video-text">
                <h3 className="next__videos--video-text__title">
                  {video.title}
                </h3>
                <p className="next__videos--video-text__description">
                  {video.channel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NextVideos;
