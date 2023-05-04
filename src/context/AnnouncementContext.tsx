import { iAnnouncement, iAnnouncementRequest, iChildren } from "../interfaces";
import { createContext, useContext, useState } from "react";
import {
  patchAnnouncement,
  postAnnouncement,
  postImageAnnouncement,
  postImageAnnouncementCover,
} from "../services";
import { toast } from "react-toastify";

interface iContextProvider {
  announcementsProfile: iAnnouncement[];
  setannouncementsProfile: React.Dispatch<
    React.SetStateAction<iAnnouncement[]>
  >;
  createAnnouncement: (formData: iAnnouncementRequest) => Promise<void>;
  userAdverts: iAnnouncement[];
  setUserAdverts: React.Dispatch<React.SetStateAction<iAnnouncement[]>>;
  editAnnouncement: (id: string, formData: any) => Promise<void>;
}

const AnnouncementContext = createContext({} as iContextProvider);

export const useAnnouncementContext = () => {
  return useContext(AnnouncementContext);
};

export const AnnouncementProvider = ({ children }: iChildren) => {
  const [announcementsProfile, setannouncementsProfile] = useState<
    iAnnouncement[]
  >([]);

  const [userAdverts, setUserAdverts] = useState<iAnnouncement[]>([]);

  const createAnnouncement = async (formData: iAnnouncementRequest) => {
    try {
      const announcement = await postAnnouncement(formData);
      const data = new FormData();
      data.append("image", formData.imageCover);
      await postImageAnnouncementCover(data, announcement.id);

      if (!!formData.images.length) {
        formData.images.forEach(async (el) => {
          const data = new FormData();
          data.append("image", el);
          await postImageAnnouncement(data, announcement.id);
        });
      }
      toast.success(
        "Anúncio criado com sucesso, obrigado por usar nossa plataforma"
      );
    } catch (error) {
      console.log(error);
      toast.error(
        "Infelizmente não foi possivel cadastrar o anúncio, se possivel tente mais tarde"
      );
    }
  };

  const editAnnouncement = async (
    id: string,
    formData: iAnnouncementRequest
  ) => {
    try {
      await patchAnnouncement(id, formData);

      toast.success(
        "Anúncio editado com sucesso, obrigado por usar nossa plataforma"
      );
    } catch (error) {
      console.log(error);
      toast.error(
        "Infelizmente não foi possivel editar o anúncio, se possivel tente mais tarde"
      );
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        announcementsProfile,
        setannouncementsProfile,
        createAnnouncement,
        userAdverts,
        setUserAdverts,
        editAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
