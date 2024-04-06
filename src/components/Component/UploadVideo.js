import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.css";

function UploadVideoPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      alert(
        `Uploading video with title: ${title} and description: ${description}`
      );
    } catch (error) {
      console.error("Failed to upload video:", error);
      alert("Failed to upload video.");
    }
  };

  return (
    <div className="upload">
      <div className="upload__divider-header"></div>
      <h2 className="upload__heading">Upload Video</h2>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__video">
          <div className="upload__video--divider"></div>
          <div className="upload__video--current">
            <h3 className="upload__video--subheading">VIDEO THUMBNAIL</h3>
            <img
              className="upload__video--current-image"
              src={uploadImage}
              alt="upload image"
            />
          </div>
          <div className="upload__video--form">
            <h3 className="upload__video--subheading">TITLE YOUR VIDEO</h3>
            <input
              className="upload__video--form-title"
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3 className="upload__video--subheading">
              ADD A VIDEO DESCRIPTION
            </h3>
            <textarea
              className="upload__video--form-input"
              name="upload-input-description"
              id="upload-text-area"
              cols="30"
              rows="10"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="upload__video--divider"></div>
        </div>
        <div className="upload__button">
          <button type="submit" className="upload__button--publish">
            PUBLISH
          </button>
          <Link to="/" className="upload__button--cancel">
            <button className="upload__button--cancel-button">CANCEL</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UploadVideoPage;
