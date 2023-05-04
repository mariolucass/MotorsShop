import { iCommentRequest } from "../../../../interfaces";
import { usernameLimiter } from "../../../../utils";
import { useUserContext } from "../../../../context";
import { zodResolver } from "@hookform/resolvers/zod";
import { postComment } from "../../../../services";
import { hoverButton, tapButton } from "../../../../libs";
import { Avatar, Box, Stack } from "@mui/material";
import { createCommentSchema } from "../../../../schemas";
import { AutoCompletes, ButtonDiv, ButtonSubmit, DivStyled } from "./style";
import { FormContainer, TextareaAutosizeElement } from "react-hook-form-mui";
import { useState } from "react";

interface iAdvertCreateCommentProps {
  id?: string;
}

export const AdvertCreateComment = ({ id }: iAdvertCreateCommentProps) => {
  const { userData } = useUserContext();
  const [values, setValues] = useState<iCommentRequest>();

  const handleButtonComplete = (event: any) => {
    setValues({ comment: event.target.textContent });
  };

  const createComment = async (data: iCommentRequest) => {
    if (id) {
      await postComment(data, id);
    }
  };

  const defaultTexts = [
    "Gostei Muito",
    "Incrível",
    "Recomendarei para os meus amigos!",
  ];

  const renderCompleteButtons = defaultTexts.map((elem, index) => (
    <AutoCompletes
      key={index}
      onClick={handleButtonComplete}
      whileHover={hoverButton}
      whileTap={tapButton}
    >
      {elem}
    </AutoCompletes>
  ));

  return (
    <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
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

            <ButtonSubmit
              type="submit"
              whileHover={hoverButton}
              whileTap={tapButton}
            >
              Comentar
            </ButtonSubmit>
          </FormContainer>

          <ButtonDiv>{renderCompleteButtons}</ButtonDiv>
        </DivStyled>
      </Stack>
    </Box>
  );
};
