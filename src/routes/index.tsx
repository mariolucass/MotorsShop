import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import AdvertPage from "../pages/especificAdvert";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={} />
    <Route path="/register" element={} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/advert/" element={<AdvertPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
