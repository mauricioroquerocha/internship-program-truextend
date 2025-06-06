import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaSearchPage from "./mediaSearch/MediaSearchPage";
import Header from "./layout/Header";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/search" element={<MediaSearchPage />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </Router>
  );
};

export default App;
