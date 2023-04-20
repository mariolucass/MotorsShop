import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import AdvertPage from "../pages/especificAdvert";
import Profile from "../pages/profile";
import { LoginPage } from "../pages/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/advert" element={<AdvertPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
