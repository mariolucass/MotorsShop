import { useNavigate } from "react-router-dom";
import { iLogin, iRegister, iChildren, iUser } from "../interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import {
  deleteUser,
  getUserProfile,
  postImageUser,
  postUser,
  postUserCreate,
} from "../services";
import { toast } from "react-toastify";

interface iContextProvider {
  userData: iUser | null;
  loading: boolean;
  registerUser: (formData: iRegister) => Promise<void>;
  loginUser: (formData: iLogin) => Promise<void>;
  autoLoginUser: () => Promise<void>;
  logoutUser: () => void;
  destroyUser: (id: string) => Promise<void>;
  userProfile: () => void;
  imageProfile: string;
}

const UserContext = createContext({} as iContextProvider);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: iChildren) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageProfile, setImageProfile] = useState(
    "https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg"
  );

  useEffect(() => {
    autoLoginUser();
  }, []);

  const toggleImageProfile = () => {
    let profile = "";
    if (userData) {
      userData.listImage.forEach((el) => {
        if (el.is_profile) {
          profile = el.url;
        }
      });
    }
    setImageProfile(profile);
  };

  const registerUser = async (formData: iRegister) => {
    try {
      const user = await postUserCreate(formData);
      const data = new FormData();
      data.append("image", formData.image);
      await postImageUser(data, user.id);
      toast.success(
        "Conta criada com sucesso, realize seu login para ter acessoa a plataforma"
      );
      navigate("/login");
    } catch (error) {
      toast.error("Conta já existe, tente recuperar sua senha");
      navigate("/login");
    }
  };

  const loginUser = async (formData: iLogin) => {
    try {
      const { token } = await postUser(formData);
      localStorage.setItem("@MotorsShop:token", token);
      const response = await getUserProfile(token);
      setUserData(response);
      toast.success("Login realizado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Combinação de Email e Senha incorretos");
    }
  };

  const autoLoginUser = async () => {
    const token = localStorage.getItem("@MotorsShop:token");
    if (token) {
      try {
        setLoading(true);
        const response = await getUserProfile(token);
        setUserData(response);
        toggleImageProfile();
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
    navigate("/login");
  };

  const destroyUser = async (id: string) => {
    await deleteUser(id);
    localStorage.removeItem("@MotorsShop:token");
    setUserData(null);
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
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        loading,
        registerUser,
        loginUser,
        autoLoginUser,
        logoutUser,
        destroyUser,
        userProfile,
        imageProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
