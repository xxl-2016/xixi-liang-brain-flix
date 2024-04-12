import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import UploadVideoPage from "./pages/UploadVideoPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="upload" element={<UploadVideoPage />} />
          <Route path="videos/:videoId" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
