import React, { useState } from 'react';
import * as Component from "../components/Component/Component";
import axios from 'axios';

class BrainFlixApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
    }
  
    async getVideos () {
      const url = `${this.baseUrl}videos?api_key=${this.apiKey}`;
      try {
        const response = await axios.get(url);
        const videos = response.data;
        return videos;
      } catch (error) {
        console.log(error);
      }
    }
  }

  export { BrainFlixApi };