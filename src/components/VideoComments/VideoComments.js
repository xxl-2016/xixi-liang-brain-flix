import React, { useState } from "react";
import "./VideoComments.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import { BrainFlixApi } from "../../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

// Date Format Function
function formattedDate(timeStamp) {
  return Intl.DateTimeFormat("en-US").format(timeStamp);
}

function VideoComments({ currentVideo, onNewComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setIsNameValid(false);
      alert("Please enter a name.");
      return;
    } else if (!comment.trim()) {
      setIsCommentValid(false);
      alert("Please enter a comment.");
      return;
    } else {
      try {
        const newComment = {
          name: name,
          comment: comment,
        };
        await api.postComment(currentVideo.id, newComment);
        setComment("");
        setName("");
        setIsNameValid(true);
        setIsCommentValid(true);
        onNewComment();
        console.log("Comment posted successfully.");
      } catch (error) {
        console.log("Failed to post comment: ", error);
      }
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (!isCommentValid) setIsCommentValid(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!isNameValid) setIsNameValid(true);
  };

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
        <form className="comment__form" onSubmit={handleSubmit}>
          <div className="comment__form--avatar"></div>
          <div className="comment__form--input">
            <label className="comment__form--input-label" htmlFor="join">
              JOIN THE CONVERSATION
            </label>
            <input
              type="text"
              className={`comment__form--input-name ${
                isNameValid ? "" : "comment__form--input-name-error"
              }`}
              placeholder="Add a name"
              onChange={handleNameChange}
            />
            <textarea
              className={`comment__form--input-add ${
                isCommentValid ? "" : "comment__form--input-add-error"
              }`}
              name="comment"
              id="form-text-area"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="comment__form--button">
            <button type="submit" className="comment__form--button-comment">
              COMMENT
            </button>
          </div>
        </form>
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
