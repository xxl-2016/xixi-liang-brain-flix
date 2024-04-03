import React, { useState, useEffect } from "react";
import "./HomePage.css";
import CurrentVideo from "../components/Component/CurrentVideo";
import videoDetailData from "../data/video-details.json";
import { BrainFlixApi } from "../api/BrainFlixApi";

// Store API key
const api = new BrainFlixApi("c31ccc68-d2c8-4700-808f-71f5037605c2");

function UploadVideoPage () {
    return (
        <p>Upload</p>
    )
}

export default UploadVideoPage;