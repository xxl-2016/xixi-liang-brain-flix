import React, { useState } from "react";
import "./Component.css";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import videoData from "../../data/video.json";
import videoDetailData from "../../data/video-details.json";
import { type } from "@testing-library/user-event/dist/type";
import { BrainFlixApi } from "../../api/BrainFlixApi";

// store api key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

// Date Format Function
function formattedDate(timeStamp) {
  return Intl.DateTimeFormat("en-US").format(timeStamp);
}

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

function Video(props) {
  return (
    <>
      <div className="video">
        <video className="video__current" src={props.video}></video>
      </div>
    </>
  );
}

function Component({ currentVideo, videos }) {
  return (
    <>
      {/* Comment Section */}
      <section className="comment">
        <div className="comment__heading">
          <h2 className="comment__heading--text">{currentVideo.title}</h2>
        </div>
        <div className="comment__divider comment__divider-first"></div>
        <div className="comment__detail">
          <div className="comment__detail--author">
            <h3 className="comment__detail--author-name">
              By {currentVideo.channel}
            </h3>
            <h4 className="comment__detail--author-time">
              {formattedDate(currentVideo.timeStamp)}
            </h4>
          </div>
          <div className="comment__detail--watch">
            <div className="comment__detail--watch-view">
              <img
                className="comment__detail--watch-view-icon"
                src={views}
                alt="views"
              />
              <h3 className="comment__detail--watch-view-amount">
                {currentVideo.views}
              </h3>
            </div>
            <div className="comment__detail--watch-like">
              <img
                className="comment__detail--watch-like-icon"
                src={likes}
                alt="likes"
              />
              <h3 className="comment__detail--watch-like-amount">
                {currentVideo.likes}
              </h3>
            </div>
          </div>
        </div>
        <div className="comment__divider"></div>
        <div className="comment__description">
          <p className="comment__description--text">
            {currentVideo.description}
          </p>
          <p className="comment__description--amount">
            {currentVideo.comments.length} Comments
          </p>
        </div>
        <div className="comment__form">
          <div className="comment__form--avatar"></div>
          <div className="comment__form--input">
            <label className="comment__form--input-label" htmlFor="join">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comment__form--input-add"
              name="comment"
              id="form-text-area"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <div className="comment__form--button">
            <button className="comment__form--button-comment">COMMENT</button>
          </div>
        </div>
        <div className="comment__divider"></div>
        {currentVideo.comments.map((comment) => (
          <div key={comment.id} className="comment__card">
            <div className="comment__card--avatar"></div>
            <div className="comment__card--info">
              <h3 className="comment__card--info-name">{comment.name}</h3>
              <h3 className="comment__card--info-time">
                {formattedDate(comment.timestamp)}
              </h3>
            </div>
            <div className="comment__card--text">
              <p className="comment__card--text-detail">{comment.comment}</p>
            </div>
            <div className="comment__card--divider"></div>
          </div>
        ))}
      </section>

      {/* Next Video Section */}
      <section className="next">
        <div className="next__heading">
          <h2 className="next__heading--text">NEXT VIDEOS</h2>
        </div>
        <div className="next__videos">
          {videos.map((video) => (
            <div key={video.id} className="next__videos--video">
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { Header };
export { Video };
export { Component };
