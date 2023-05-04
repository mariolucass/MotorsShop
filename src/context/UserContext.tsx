import { useNavigate } from "react-router-dom";
import {
  iLogin,
  iRegister,
  iChildren,
  iUser,
  IUpdateUser,
  IUpdateAddress,
} from "../interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import {
  deleteUser,
  getUserProfile,
  patchUser,
  postImageUser,
  postUser,
  postUserCreate,
} from "../services";
import { toast } from "react-toastify";
import { useAnnouncementContext } from "./AnnouncementContext";
import { useLoadingContext } from "./LoadingContext";

interface iContextProvider {
  userData: iUser | null;
  registerUser: (formData: iRegister) => Promise<void>;
  loginUser: (formData: iLogin) => Promise<void>;
  autoLoginUser: () => Promise<void>;
  logoutUser: () => void;
  destroyUser: (id: string) => Promise<void>;
  userProfile: () => void;
  updateUser: (data: IUpdateUser, id: string) => Promise<void>;
  updateAddress: (data: IUpdateAddress, id: string) => Promise<void>;
}

const UserContext = createContext({} as iContextProvider);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: iChildren) => {
  const navigate = useNavigate();
  const { setannouncementsProfile } = useAnnouncementContext();
  const [userData, setUserData] = useState<iUser | null>(null);
  const { setIsLoading } = useLoadingContext();

  useEffect(() => {
    autoLoginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      setannouncementsProfile(response.announcements);
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
        setIsLoading(true);
        const response = await getUserProfile(token);
        setUserData(response);
        setannouncementsProfile(response.announcements);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
        setIsLoading(true);
        const response = await getUserProfile(token);
        setUserData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const updateUser = async (data: IUpdateUser, id: string) => {
    try {
      await patchUser(data, id);
      toast.success("Dados alterados com sucesso");
    } catch (error) {
      toast.warning("Houve um erro ao alterar os dados");
    }
  };

  const updateAddress = async (data: IUpdateAddress, id: string) => {
    try {
      await patchUser({ address: data }, id);
      toast.success("Dados alterados com sucesso");
    } catch (error) {
      toast.warning("Houve um erro ao alterar os dados");
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        registerUser,
        loginUser,
        autoLoginUser,
        logoutUser,
        destroyUser,
        userProfile,
        updateUser,
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
