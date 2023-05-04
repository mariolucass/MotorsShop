import moment from "moment";
import "moment/locale/pt-br";
import { CommentsList, LiStyled, NoComments } from "./style";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { iComment } from "../../../../interfaces";
import { useDataContext, useUserContext } from "../../../../context";
import { deleteComment, getAnnouncementById } from "../../../../services";
import { FaCommentSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
  liVariants,
  ulVariants,
} from "../../../../libs";
import { usernameLimiter } from "../../../../utils";
import { useNavigate, useParams } from "react-router-dom";

interface iAdvertCommentsProps {
  comments?: Array<iComment>;
}

export const AdvertComments = ({ comments }: iAdvertCommentsProps) => {
  const navigate = useNavigate();
  const { userData } = useUserContext();
  const { setSpecificAdvertData } = useDataContext();
  const { advertId } = useParams();

  const commentsLiRender =
    comments &&
    comments.map((elem) => {
      const handleDate = () => {
        moment.locale("pt-br");

        const time = moment(elem.created_at).fromNow();

        return time;
      };

      const handleUserClick = () => {
        navigate(`/users/${elem.user.id}`);
      };

      return (
        <LiStyled key={elem.id} variants={liVariants}>
          <div className="user">
            <Avatar src={elem.user.profile.url} />

            <h3 onClick={handleUserClick}>{usernameLimiter(elem.user.name)}</h3>

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
                const response = await getAnnouncementById(advertId!);
                setSpecificAdvertData(response);
              }}
            >
              Excluir
            </Button>
          )}
        </LiStyled>
      );
    });

  return (
    <Box
      className="AdvertCard"
      sx={{ p: 6, borderRadius: 1, ...(!userData && { mb: 12 }) }}
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
        <Typography className="card--title" sx={{ fontFamily: "Lexend" }}>
          Comentários
        </Typography>
        {comments?.length ? (
          <CommentsList variants={ulVariants} initial="hidden" animate="show">
            {commentsLiRender}
          </CommentsList>
        ) : (
          <NoComments>
            <FaCommentSlash size={72} />
            <h2>Esse anúncio ainda não possui comentários, seja o primeiro!</h2>
          </NoComments>
        )}
      </Stack>
    </Box>
  );
};
