import Home from "../pages/home/index";
import Profile from "../pages/profile";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import AdvertPage from "../pages/especificAdvert";
import { Navigate, Route, Routes } from "react-router-dom";
import { PasswordReset } from "../pages/passwordResetFields";
import { EmailForPasswordReset } from "../pages/passwordReset";
import { EspecificUser } from "../pages/especificUser";

const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/advert" element={<AdvertPage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/resetpassword" element={<EmailForPasswordReset />} />
    <Route path="/resetpassword/:userId/:token" element={<PasswordReset />} />
    <Route path="/users/:userId" element={<EspecificUser />} />
    <Route path="/" element={<Home />} />
    <Route path="/*" element={<Navigate to={"/"} />} />
  </Routes>
);

export default Router;
