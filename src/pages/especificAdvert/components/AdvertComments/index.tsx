import moment from "moment";
import "moment/locale/pt-br";
import { CommentsList, LiStyled } from "./style";
import { Avatar, Box, Stack, Typography } from "@mui/material";

export const AdvertComments = ({ comments }: any) => {
  comments = [
    {
      created_at: "2023-05-03T17:34:53.380Z",
    },
    {
      created_at: "2023-05-03T17:34:53.380Z",
    },
    {
      created_at: "2023-05-03T17:34:53.380Z",
    },
    {
      created_at: "2023-05-03T17:34:53.380Z",
    },
  ];

  const commentsLiRender = comments.map((elem: any) => {
    const handleDate = () => {
      moment.locale("pt-br");

      const time = moment(elem.created_at, "YYYYMMDD").fromNow();

      return time;
    };

    return (
      <LiStyled>
        <div className="user">
          <Avatar />

          <h3>Julia Albuquerque</h3>

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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
          labore culpa, animi vero ducimus sequi molestiae vitae earum debitis
          blanditiis maxime repellendus voluptatibus autem cupiditate asperiores
          nesciunt dolore! Magni.
        </p>
      </LiStyled>
    );
  });

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
