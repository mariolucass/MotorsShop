import { useNavigate } from "react-router-dom";
import { ILogin, IRegister } from "../interfaces";
import { IChildren } from "../interfaces/global.interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserProfile,
  iAnnouncement,
  iUser,
  postUser,
  postUserCreate,
} from "../services";

interface iContextProvider {
  userData: iUser | null;
  announcementsData: iAnnouncement[] | null;
  loading: boolean;
  registerUser: (formData: IRegister) => Promise<void>;
  loginUser: (formData: ILogin) => Promise<void>;
  autoLoginUser: () => Promise<void>;
  logoutUser: () => void;
  userProfile: () => void
}

const UserContext = createContext({} as iContextProvider);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<iUser | null>(null);
  const [announcementsData, setAnnouncementsData] =
    useState<Array<iAnnouncement> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    autoLoginUser();
  }, []);

  const registerUser = async (formData: IRegister) => {
    try {
      await postUserCreate(formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (formData: ILogin) => {
    try {
      const { token } = await postUser(formData);
      localStorage.setItem("@MotorsShop:token", token);
      const response = await getUserProfile(token);
      setUserData(response);
      setAnnouncementsData(response.announcement);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const autoLoginUser = async () => {
    const token = localStorage.getItem("@MotorsShop:token");
    if (token) {
      try {
        setLoading(true);
        const response = await getUserProfile(token);
        setUserData(response);
        setAnnouncementsData(response.announcement);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("@MotorsShop:token");
    setUserData(null);
    setAnnouncementsData(null);
    navigate("/login");
  };

  const userProfile = async () => {
    const token = localStorage.getItem("@MotorsShop:token");
    if (token) {
      try {
        setLoading(true);
        const response = await getUserProfile(token);
        setUserData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        announcementsData,
        loading,
        registerUser,
        loginUser,
        autoLoginUser,
        logoutUser,
        userProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
