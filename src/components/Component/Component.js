import React from "react";
import "./Component.css";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import videoData from "../../data/video.json";
import videoDetailData from "../../data/video-details.json";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo--image" src={logo} alt="logo image" />
      </div>
      <div className="header__search">
        <input
          className="header__search--input"
          type="text"
          placeholder="Search"
        />
        <button className="header__search--button">UPLOAD</button>
      </div>
      <div className="header__avatar"></div>
    </header>
  );
}

function Hero() {}

function Component() {
  return (
    <>
      <section className="comment"></section>
      <section className="next">
        <div className="next__heading">
          <h2 className="next__heading-text">NEXT VIDEOS</h2>
        </div>
        <div className="next__videos">
          {videoData.map((video) => (
            <div key={video.id} className="next__videos--video">
              <img
                className="next__videos--video-image"
                src={video.image}
                alt={video.title}
              />
              <h3 className="next__videos--video-title">{video.title}</h3>
              <p className="next__videos--video-description">{video.channel}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { Header };
export { Hero };
export { Component };
