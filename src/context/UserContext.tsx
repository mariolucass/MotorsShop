import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { iLogin, iRegister } from "../components";
import {
  getUserProfile,
  iAnnouncement,
  iUser,
  postUser,
  postUserCreate,
} from "../services";

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  userData: iUser | null;
  announcementsData: iAnnouncement[] | null;
  loading: boolean;
  registerUser: (formData: iRegister) => Promise<void>;
  loginUser: (formData: iLogin) => Promise<void>;
  autoLoginUser: () => Promise<void>;
  logoutUser: () => void;
}

const UserContext = createContext({} as iContextProvider);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: iProps) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<iUser | null>(null);
  const [announcementsData, setAnnouncementsData] =
    useState<Array<iAnnouncement> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    autoLoginUser();
  }, []);

  const registerUser = async (formData: iRegister) => {
    try {
      await postUserCreate(formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (formData: iLogin) => {
    try {
      const { token } = await postUser(formData);
      localStorage.setItem("@MotorsShop:token", token);
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
    navigate("/");
  };

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
