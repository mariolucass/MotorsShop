import { createContext, useContext, useState } from "react";
import { iChildren } from "../interfaces";

interface iContextProvider {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  openAddress: boolean;
  handleOpenAddress: () => void;
  handleCloseAddress: () => void;
}

const ModalContext = createContext({} as iContextProvider);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: iChildren) => {
  const [open, setOpen] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenAddress = () => setOpenAddress(true);
  const handleCloseAddress = () => setOpenAddress(false);

  return (
    <ModalContext.Provider
      value={{
        open,
        handleOpen,
        handleClose,
        openAddress,
        handleOpenAddress,
        handleCloseAddress,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
