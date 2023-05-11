import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Avatar, Box, Stack, Button } from "@mui/material";
import { usernameLimiter } from "../../../../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { iCommentRequest } from "../../../../interfaces";
import { createCommentSchema } from "../../../../schemas";
import { useDataContext, useUserContext } from "../../../../context";
import { getAnnouncementById, postComment } from "../../../../services";
import { FormContainer, TextareaAutosizeElement } from "react-hook-form-mui";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
  hoverButton,
  tapButton,
} from "../../../../libs";
import {
  AutoCompleterComment,
  ButtonDiv,
  DivButtonSubmit,
  DivStyled,
} from "./style";

interface iAdvertCreateCommentProps {
  id?: string;
}

export const AdvertCreateComment = ({ id }: iAdvertCreateCommentProps) => {
  const { userData } = useUserContext();
  const [values, setValues] = useState<iCommentRequest>();
  const { setSpecificAdvertData } = useDataContext();

  const handleButtonComplete = (event: any) => {
    setValues({ comment: event.target.textContent });
  };

  const createComment = async (data: iCommentRequest) => {
    if (id) {
      await postComment(data, id);

      toast.success("Comentário criado com sucesso.");
      setValues({ comment: "" });

      const response = await getAnnouncementById(id);
      setSpecificAdvertData(response);
    }
  };

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

  return (
    <Box
      className="AdvertCard"
      sx={{ p: 6, borderRadius: 1, mb: 12 }}
      component={motion.div}
      initial={animateHiddenItens}
      animate={animateShownItens}
      transition={animateTransitionItens}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <DivStyled>
          <div className="user">
            <Avatar src={userData?.profile.url} />

            <h3>{usernameLimiter(userData?.name || "Usuário")}</h3>
          </div>

          <FormContainer
            values={values}
            resolver={zodResolver(createCommentSchema)}
            onSuccess={createComment}
          >
            <TextareaAutosizeElement
              name="comment"
              maxRows={10}
              className="textArea"
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            />

            <DivButtonSubmit>
              <Button type="submit" variant="contained" className="buttonBrand">
                Comentar
              </Button>
            </DivButtonSubmit>
          </FormContainer>

          <ButtonDiv>{renderCompleteButtons}</ButtonDiv>
        </DivStyled>
      </Stack>
    </Box>
  );
};
