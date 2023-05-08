import Home from "../pages/home/index";
import Profile from "../pages/profile";
import { LoginPage } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { AnimatePresence } from "framer-motion";
import { RegisterPage } from "../pages/register";
import AdvertPage from "../pages/especificAdvert";
import { EspecificUser } from "../pages/especificUser";
import { PasswordReset } from "../pages/passwordResetFields";
import { EmailForPasswordReset } from "../pages/passwordReset";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resetpassword" element={<EmailForPasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to={"/"} />} />

        <Route path="/advert/:advertId" element={<AdvertPage />} />
        <Route path="/users/:userId" element={<EspecificUser />} />
        <Route
          path="/resetpassword/:userId/:token"
          element={<PasswordReset />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
