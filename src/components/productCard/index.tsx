import { StyledChip } from "../chip";
import { IPropsProductCard } from "../../interfaces";
import { monetizeString, usernameLimiter } from "../../utils";
import { useMediaContext, useUserContext } from "../../context";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Card,
} from "@mui/material";

export const ProductCard = ({
  element,
  isProfile,
  onClick,
}: IPropsProductCard) => {
  const { userData } = useUserContext();

  const { matches500, matches700, matches1200, matches900 } = useMediaContext();

  if (isProfile) {
    isProfile = element.user.id === userData?.id;
  }

  const cardSize = () => {
    if (matches500) {
      return { width: "85%", cursor: "pointer" };
    }

    if (matches700) {
      return { width: "40%", cursor: "pointer" };
    }

    if (matches900) {
      return { width: "40%", cursor: "pointer" };
    }

    if (matches1200) {
      return { width: "30%", maxWidth: 312, cursor: "pointer" };
    }

    return { width: "30%", cursor: "pointer" };
  };

  return (
    <Card
      variant="outlined"
      sx={cardSize}
      onClick={onClick}
      component={motion.div}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.75 }}
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
        >
          {element.model}
        </Typography>

        <Typography
          className="card--description"
          variant="body2"
          sx={{ overflowX: "auto" }}
        >
          {element.description}
        </Typography>

        <>
          {!isProfile && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={element.user.name} src={element.user.profile.url} />

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
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={0.5}
          >
            <StyledChip label={`${element.mileage} KM`} />

            <StyledChip label={element.manufacture_year} />
          </Stack>

          <span className="card--price">{monetizeString(+element.price)}</span>
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
                sx={{ fontWeight: 600, textTransform: "unset", fontSize: 12 }}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 600, textTransform: "unset", fontSize: 12 }}
              >
                Ver detalhes
              </Button>
            </Stack>
          )}
        </>
      </CardContent>
    </Card>
  );
};
