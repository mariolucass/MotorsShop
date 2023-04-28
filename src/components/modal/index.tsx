import { Box } from "./style";
import { IChildren } from "../../interfaces";
import { useModalContext } from "../../context";
import { Backdrop, Fade, Modal } from "@mui/material";

export const ModalGeneral = ({ children }: IChildren) => {
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
