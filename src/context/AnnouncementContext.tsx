import {
  iAnnouncement,
  iAnnouncementRequest,
  iChildren,
  iComment,
} from "../interfaces";
import { createContext, useContext, useState } from "react";
import {
  deleteAnnouncement,
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
  announcementToEdit: iAnnouncement;
  setAnnouncementToEdit: React.Dispatch<React.SetStateAction<iAnnouncement>>;
  excludeAnnouncement: (id: string) => Promise<void>;

  commentToEdit: iComment;
  setCommentToEdit: React.Dispatch<React.SetStateAction<iComment>>;
}

const AnnouncementContext = createContext({} as iContextProvider);

export const useAnnouncementContext = () => {
  return useContext(AnnouncementContext);
};

export const AnnouncementProvider = ({ children }: iChildren) => {
  const [announcementsProfile, setannouncementsProfile] = useState<
    iAnnouncement[]
  >([]);
  const [announcementToEdit, setAnnouncementToEdit] = useState<iAnnouncement>(
    {} as iAnnouncement
  );
  const [commentToEdit, setCommentToEdit] = useState<iComment>({} as iComment);

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

      setannouncementsProfile((prevState) => [...prevState, announcement]);
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

  const excludeAnnouncement = async (id: string) => {
    try {
      await deleteAnnouncement(id);

      setannouncementsProfile(
        announcementsProfile.filter((elem) => elem.id !== id)
      );

      toast.success("Anuncio excluido com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("A exclusão do anúncio falhou, tente novamente mais tarde.");
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
        announcementToEdit,
        setAnnouncementToEdit,
        excludeAnnouncement,
        commentToEdit,
        setCommentToEdit,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
