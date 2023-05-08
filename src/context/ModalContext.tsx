import { iChildren } from "../interfaces";
import { createContext, useContext, useState } from "react";

interface iContextProvider {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;

  openAddress: boolean;
  handleOpenAddress: () => void;
  handleCloseAddress: () => void;

  openEditAnnouncement: boolean;
  handleOpenEditAnnouncement: () => void;
  handleCloseEditAnnouncement: () => void;

  openUpdateUser: boolean;
  handleOpenUpdateUser: () => void;
  handleCloseUpdateUser: () => void;

  openEditComment: boolean;
  handleOpenEditComment: () => void;
  handleCloseEditComment: () => void;
}

const ModalContext = createContext({} as iContextProvider);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: iChildren) => {
  const [open, setOpen] = useState(false);

  const [openAddress, setOpenAddress] = useState(false);

  const [openUpdateUser, setOpenUpdateUser] = useState(false);

  const [openEditComment, setOpenEditComment] = useState(false);

  const [openEditAnnouncement, setOpenEditAnnouncement] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenAddress = () => setOpenAddress(true);
  const handleCloseAddress = () => setOpenAddress(false);

  const handleOpenUpdateUser = () => setOpenUpdateUser(true);
  const handleCloseUpdateUser = () => setOpenUpdateUser(false);

  const handleOpenEditComment = () => setOpenEditComment(true);
  const handleCloseEditComment = () => setOpenEditComment(false);

  const handleOpenEditAnnouncement = () => setOpenEditAnnouncement(true);
  const handleCloseEditAnnouncement = () => setOpenEditAnnouncement(false);

  return (
    <ModalContext.Provider
      value={{
        open,
        handleOpen,
        handleClose,
        openAddress,
        handleOpenAddress,
        handleCloseAddress,
        openEditAnnouncement,
        handleCloseEditAnnouncement,
        handleOpenEditAnnouncement,
        openUpdateUser,
        handleOpenUpdateUser,
        handleCloseUpdateUser,
        openEditComment,
        handleOpenEditComment,
        handleCloseEditComment,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
