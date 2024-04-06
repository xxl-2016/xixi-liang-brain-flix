import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.css";

function UploadVideoPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const navigate = useNavigate();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    if (!isTitleValid) setIsTitleValid(true);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    if (!isDescriptionValid) setDescription(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      setIsTitleValid(false);
      alert("Please enter a title.");
      return;
    } else if (!description.trim()) {
      setIsDescriptionValid(false);
      alert("Please enter a description.");
      return;
    } else {
      alert("Video uploaded successfully.");
      navigate("/");
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
              className={`upload__video--form-title ${
                !isTitleValid ? "upload__video--form-title-error" : ""
              }`}
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleChangeTitle}
            />
            <h3 className="upload__video--subheading">
              ADD A VIDEO DESCRIPTION
            </h3>
            <textarea
              className={`upload__video--form-input ${
                !isDescriptionValid ? "upload__video--form-input-error" : ""
              }`}
              name="upload-input-description"
              id="upload-text-area"
              cols="30"
              rows="10"
              placeholder="Add a description to your video"
              value={description}
              onChange={handleChangeDescription}
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
