import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaSearchPage from "./mediaSearch/MediaSearchPage";
import Header from "./layout/Header";
import { ToastContainer } from "react-toastify";
import Home from "./home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/search" element={<MediaSearchPage />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </Router>
  );
};

export default App;
