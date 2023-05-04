import { useForm } from "react-hook-form";
import { IComment } from "../../../../interfaces";
import { usernameLimiter } from "../../../../utils";
import { useUserContext } from "../../../../context";
import { zodResolver } from "@hookform/resolvers/zod";
import { postComment } from "../../../../services/apiComments";
import { hoverButton, tapButton } from "../../../../libs/framer";
import { Avatar, Box, Stack, TextareaAutosize } from "@mui/material";
import { createCommentSchema } from "../../../../schemas/commentsSchema";
import { AutoCompletes, ButtonDiv, ButtonSubmit, DivStyled } from "./style";

export const AdvertCreateComment = () => {
  const { userData } = useUserContext();
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<IComment>({
    resolver: zodResolver(createCommentSchema),
  });

  const handleButtonComplete = (event: any) => {
    setValue("comment", event.target.textContent);
  };

  const createComment = async (data: any) => {
    await postComment(data);
  };

  const defaultTexts = [
    "Gostei Muito",
    "Incrível",
    "Recomendarei para os meus amigos!",
  ];

  const renderCompleteButtons = defaultTexts.map((elem) => (
    <AutoCompletes
      onClick={handleButtonComplete}
      whileHover={hoverButton}
      whileTap={tapButton}
    >
      {elem}
    </AutoCompletes>
  ));

  return (
    <form onSubmit={handleSubmit(createComment)}>
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

            <TextareaAutosize
              {...register("comment")}
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

            <ButtonDiv>{renderCompleteButtons}</ButtonDiv>
          </DivStyled>
        </Stack>
      </Box>
    </form>
  );
};
