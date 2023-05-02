import { iAnnouncement, iAnnouncementRequest, iChildren } from "../interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserProfile,
  postAnnouncement,
  postImageAnnouncement,
  postImageAnnouncementCover,
} from "../services";
import { toast } from "react-toastify";

interface iContextProvider {
  announcementsProfile: iAnnouncement[] | null;
  createAnnouncement: (formData: iAnnouncementRequest) => Promise<void>;
  coverImage: (data: iAnnouncement) => string;
  profileImageCard: (data: iAnnouncement) => string;
}

const AnnouncementContext = createContext({} as iContextProvider);

export const useAnnouncementContext = () => {
  return useContext(AnnouncementContext);
};

export const AnnouncementProvider = ({ children }: iChildren) => {
  const [announcementsProfile, setannouncementsProfile] =
    useState<Array<iAnnouncement> | null>(null);

  useEffect(() => {
    reloadAnnouncements();
  }, []);

  const coverImage = (data: iAnnouncement) => {
    let imageCover =
      "https://s7d1.scene7.com/is/image/hyundai/compare-vehicle-1225x619?wid=276&hei=156&fmt=webp-alpha";
    data.listImage.forEach((el) => {
      if (el.is_cover) {
        imageCover = el.url;
      }
    });
    return imageCover;
  };
  const profileImageCard = (data: iAnnouncement) => {
    let profile =
      "https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg";
    if (data.user) {
      data.user.listImage.forEach((el) => {
        if (el.is_profile) {
          profile = el.url;
        }
      });
    }
    return profile;
  };

  const reloadAnnouncements = async () => {
    const token = localStorage.getItem("@MotorsShop:token");
    if (token) {
      try {
        const response = await getUserProfile(token);
        setannouncementsProfile(response.announcement);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
        createAnnouncement,
        coverImage,
        profileImageCard,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
