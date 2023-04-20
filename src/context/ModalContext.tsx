import { ReactNode, createContext, useContext, useState } from "react";

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const ModalContext = createContext({} as iContextProvider);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: iProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};
