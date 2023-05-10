import { StyledChip } from "../chip";
import { IPropsProductCard } from "../../interfaces";
import { monetizeString, usernameLimiter } from "../../utils";
import {
  useAnnouncementContext,
  useMediaContext,
  useModalContext,
  useUserContext,
} from "../../context";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Card,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";

import { EditAdvertise } from "../editAdvertise";
import { Box } from "../modal/style";

export const ProductCard = ({
  element,
  isProfile,
  onClick,
}: IPropsProductCard) => {
  const { userData } = useUserContext();
  const {
    openEditAnnouncement,
    handleCloseEditAnnouncement,
    handleOpenEditAnnouncement,
  } = useModalContext();
  const { setAnnouncementToEdit } = useAnnouncementContext();

  const { matches500, matches700, matches1200, matches900, minMatches1500 } =
    useMediaContext();

  if (isProfile) {
    isProfile = element.user.id === userData?.id;
  }

  const cardSize = () => {
    if (matches500) {
      return { width: "85%", cursor: "pointer", maxWidth: 450 };
    }

    if (matches700) {
      return { width: "40%", cursor: "pointer", maxWidth: 450 };
    }

    if (matches900) {
      return { width: "40%", cursor: "pointer", maxWidth: 450 };
    }

    if (matches1200) {
      return { width: "30%", cursor: "pointer", maxWidth: 450 };
    }

    if (minMatches1500) {
      return { width: "40%", cursor: "pointer", maxWidth: 450 };
    }

    return { width: "30%", cursor: "pointer", maxWidth: 450 };
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={cardSize}
        onClick={!isProfile ? onClick : () => {}}
        component={motion.div}
        whileHover={!isProfile ? { scale: 0.95 } : {}}
        whileTap={!isProfile ? { scale: 0.75 } : {}}
      >
        <CardMedia
          component={"img"}
          height={"175"}
          image={element.cover.url}
          alt={element.model}
        />

        <CardContent
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="div"
            variant="h6"
            gutterBottom
            className="card--title"
            sx={{ fontFamily: "Lexend", minHeight: 60 }}
          >
            {element.model}
          </Typography>

          <Typography
            className="card--description"
            variant="body2"
            sx={{ overflowX: "auto", minHeight: 60 }}
          >
            {element.description}
          </Typography>

          <>
            {!isProfile && (
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  alt={element.user.name}
                  src={element.user.profile.url}
                />

                <span className="card--user">
                  {usernameLimiter(element.user.name)}
                </span>
              </Stack>
            )}
          </>

          <Stack
            direction={matches1200 ? "column" : "row"}
            justifyContent="space-between"
            alignItems={matches1200 ? "flex-start" : "center"}
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0.5}
            >
              <StyledChip label={`${element.mileage} KM`} />

              <StyledChip label={element.manufacture_year} />
            </Stack>

            <span className="card--price">
              {monetizeString(+element.price)}
            </span>
          </Stack>

          <>
            {isProfile && (
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1.5}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontWeight: 600,
                    textTransform: "unset",
                    fontSize: 12,
                    fontFamily: "Inter",
                  }}
                  onClick={() => {
                    setAnnouncementToEdit(element);
                    handleOpenEditAnnouncement();
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={isProfile ? onClick : () => {}}
                  sx={{
                    fontWeight: 600,
                    textTransform: "unset",
                    fontSize: 12,
                    fontFamily: "Inter",
                  }}
                >
                  Ver detalhes
                </Button>
              </Stack>
            )}
          </>
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEditAnnouncement}
        onClose={handleCloseEditAnnouncement}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openEditAnnouncement}>
          <Box>
            <EditAdvertise />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
