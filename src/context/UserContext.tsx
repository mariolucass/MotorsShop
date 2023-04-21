import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { iLogin } from "../components";
import { apiServerSide } from "../services";
import { iRegister } from "../components/register";

interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role: "BUYER" | "SELLER" | "ADMIN";
  created_at: Date;
  address: {
    id: string;
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  };
}

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  userData: iUser | null;
  loginUser: (formData: iLogin) => Promise<void>;
  registerUser: (formData: iRegister) => Promise<void>;
  logoutUser: () => void;
}

const UserContext = createContext({} as iContextProvider);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: iProps) => {
  const [userData, setUserData] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    autoLoginUser();
  }, []);

  const registerUser = async (formData: iRegister) => {
    try {
      await apiServerSide.post("/users", formData);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (formData: iLogin) => {
    try {
      const { data } = await apiServerSide.post("/login", formData);
      const { token } = data;

      apiServerSide.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@MotorsShop:token", token);

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const autoLoginUser = async () => {
    const token = localStorage.getItem("@MotorsShop:token");
    if (token) {
      try {
        apiServerSide.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await apiServerSide.get("/users/profile");
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("@MotorsShop:token");
    setUserData(null);
    navigate("/home");
  };

  return (
    <UserContext.Provider
      value={{ userData, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
