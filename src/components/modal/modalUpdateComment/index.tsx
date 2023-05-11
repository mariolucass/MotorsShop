import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { usernameLimiter } from "../../../utils";
import { getAnnouncementById, patchComment } from "../../../services";
import { zodResolver } from "@hookform/resolvers/zod";
import { iCommentRequest } from "../../../interfaces";
import { hoverButton, tapButton } from "../../../libs";
import { createCommentSchema } from "../../../schemas";
import { Backdrop, Fade, Modal, Avatar, Button } from "@mui/material";
import { Container, Box, AutoCompleterComment, DivButtonSubmit } from "./style";
import { FormContainer, TextareaAutosizeElement } from "react-hook-form-mui";
import {
  useAnnouncementContext,
  useDataContext,
  useModalContext,
  useUserContext,
} from "../../../context";
import { ButtonDiv } from "../../../pages/especificAdvert/components/AdvertCreateComment/style";

export const ModalUpdateComment = () => {
  const { userData } = useUserContext();
  const { commentToEdit } = useAnnouncementContext();
  const { handleCloseEditComment, openEditComment } = useModalContext();
  const { setSpecificAdvertData } = useDataContext();

  const [values, setValues] = useState<iCommentRequest>();

  const handleButtonComplete = (event: any) => {
    setValues({ comment: event.target.textContent });
  };

  const editComment = async (data: iCommentRequest) => {
    const response = await patchComment(data, commentToEdit.id);
    const responseAdvert = await getAnnouncementById(response.announcement_id!);
    setSpecificAdvertData(responseAdvert);

    toast.success("Comentário editado com sucesso.");
    handleCloseEditComment();
  };

  const formContext = useForm<{ comment: string }>({
    defaultValues: {
      comment: commentToEdit.comment,
    },
  });

  const defaultTexts = [
    "Gostei Muito",
    "Incrível",
    "Recomendarei para os meus amigos!",
  ];

  const renderCompleteButtons = defaultTexts.map((elem, index) => (
    <AutoCompleterComment
      key={index}
      onClick={handleButtonComplete}
      whileHover={hoverButton}
      whileTap={tapButton}
    >
      {elem}
    </AutoCompleterComment>
  ));

  useEffect(() => {
    if (commentToEdit) {
      setValues({ comment: commentToEdit.comment });
    }
  }, [commentToEdit]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openEditComment}
      onClose={handleCloseEditComment}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openEditComment}>
        <Box>
          <Container>
            <FormContainer
              context={formContext}
              resolver={zodResolver(createCommentSchema)}
              onSuccess={editComment}
              values={values}
            >
              <div className="user">
                <Avatar src={userData?.profile.url} />
                <h3>{usernameLimiter(userData?.name || "Usuário")}</h3>
              </div>

              <TextareaAutosizeElement
                maxRows={4}
                name="comment"
                className="textArea"
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              />

              <ButtonDiv>{renderCompleteButtons}</ButtonDiv>

              <DivButtonSubmit>
                <Button
                  type="submit"
                  variant="contained"
                  className="buttonBrand"
                >
                  Editar Comentário
                </Button>
              </DivButtonSubmit>
            </FormContainer>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};
