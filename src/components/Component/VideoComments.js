import React, { useState, useEffect } from "react";
import "./VideoComments.css";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

// Date Format Function
function formattedDate(timeStamp) {
  return Intl.DateTimeFormat("en-US").format(timeStamp);
}

function VideoComments({ currentVideo }) {
  console.log(currentVideo);
  return (
    <>
      {/* Comment Section */}
      <div className="comment">
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
      </div>
    </>
  );
}

export default VideoComments;
