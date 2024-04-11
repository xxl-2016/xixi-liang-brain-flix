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
        console.log("Failed to get videos: ", error);
      }
    }

    async getVideo (videoId) {
      const url = `${this.baseUrl}videos/${videoId}?api_key=${this.apiKey}`;
      try {
        const response = await axios.get(url);
        const video = response.data;
        return video;
      } catch (error) {
        console.log("Failed to get video: ", error);
      }
    }

    async postComment(videoId, comment) {
      const url = `${this.baseUrl}videos/${videoId}/comments?api_key=${this.apiKey}`;
      try {
        const response = await axios.post(url, comment);
        const newComment = response.data;
        return newComment;
      } catch (error) {
        console.log("Failed to post comment: ", error);
      }
    }

    async deleteComment(videoId, commentId) {
      const url = `${this.baseUrl}videos/${videoId}/comments/${commentId}?api_key=${this.apiKey}`;
      try {
        const response = await axios.delete(url);
        const deleteComment = response.data;
        return deleteComment;
      } catch (error) {
        console.log("Failed to delete comment: ", error);
      }
    }
  }

  export { BrainFlixApi };