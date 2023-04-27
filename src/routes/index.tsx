import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import AdvertPage from "../pages/especificAdvert";
import Profile from "../pages/profile";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { PasswordReset } from "../pages/passwordReset";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/advert" element={<AdvertPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login/indentify/recover" element={<PasswordReset />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
