import { iAnnouncement, iAnnouncementRequest, iChildren } from "../interfaces";
import { createContext, useContext, useState } from "react";
import {
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
        const data = new FormData();
        formData.images.forEach(async (el) => {
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

  return (
    <AnnouncementContext.Provider
      value={{
        announcementsProfile,
        setannouncementsProfile,
        createAnnouncement,
        userAdverts,
        setUserAdverts,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
