import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Component/Header";
import HomePage from "./pages/HomePage";
import UploadVideoPage from "./pages/UploadVideoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="uploadvideo" element={<UploadVideoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
