import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AdvertPage from "./pages/especificAdvert";

const PageRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={} />
    <Route path="/register" element={} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/advert/" element={<AdvertPage />} />
    </Routes>
  );
};

export default PageRoutes;
