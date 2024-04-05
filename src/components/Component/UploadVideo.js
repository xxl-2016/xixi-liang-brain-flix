import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.css";

function UploadVideoPage() {
  return (
    <div className="upload">
      <div className="upload__divider-header"></div>
      <h2 className="upload__heading">Upload Video</h2>
      <div className="upload__video">
        <div className="upload__video--divider"></div>
        <h3 className="upload__video--subheading">VIDEO THUMBNAIL</h3>
        <img
          className="upload__video--image"
          src={uploadImage}
          alt="upload image"
        />
        <h3 className="upload__video--subheading">TITLE YOUR VIDEO</h3>
        <input
          className="upload__video--title"
          type="text"
          placeholder="Add a title to your video"
        />
        <h3 className="upload__video--subheading">ADD A VIDEO DESCRIPTION</h3>
        <textarea
          className="upload__video--input"
          name="upload-input-description"
          id="upload-text-area"
          cols="30"
          rows="10"
          placeholder="Add a description to your video"
        ></textarea>
        <div className="upload__video--divider"></div>
      </div>
      <div className="upload__button">
        <button className="upload__button--publish">PUBLISH</button>
        <button className="upload__button--cancel">CANCEL</button>
      </div>
    </div>
  );
}

export default UploadVideoPage;
