import moment from "moment";
import "moment/locale/pt-br";
import { CommentsList, LiStyled } from "./style";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { iComment } from "../../../../interfaces";
import { useUserContext } from "../../../../context";
import { deleteComment } from "../../../../services";

interface iAdvertCommentsProps {
  comments?: Array<iComment>;
}

export const AdvertComments = ({ comments }: iAdvertCommentsProps) => {
  const { userData } = useUserContext();
  const commentsLiRender = comments ? (
    comments.map((elem) => {
      const handleDate = () => {
        moment.locale("pt-br");

        const time = moment(elem.created_at).fromNow();

        return time;
      };

      return (
        <LiStyled key={elem.id}>
          <div className="user">
            <Avatar src={elem.user.profile.url} />

            <h3>{elem.user.name}</h3>

            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#ADB5BD" />
            </svg>

            <span>{handleDate()}</span>
          </div>

          <p>{elem.comment}</p>
          {userData?.id === elem.user.id && (
            <Button
              onClick={async () => {
                await deleteComment(elem.id);
              }}
            >
              Excluir
            </Button>
          )}
        </LiStyled>
      );
    })
  ) : (
    <></>
  );

  return (
    <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Typography className="card--title">Comentários</Typography>

        <CommentsList>{commentsLiRender}</CommentsList>
      </Stack>
    </Box>
  );
};
