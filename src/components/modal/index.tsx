import { ReactNode } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "./style";
import { useModalContext } from "../../context";

interface iModalGeneralProps {
  children: ReactNode;
}

export const ModalGeneral = ({ children }: iModalGeneralProps) => {
  const { open, handleClose } = useModalContext();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box>{children}</Box>
      </Fade>
    </Modal>
  );
};
