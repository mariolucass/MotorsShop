import Stack from "@mui/material/Stack";
import { StyledChip } from "../../../../components";
import { monetizeString } from "../../../../utils";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";
import { useUserContext } from "../../../../context";
import { useNavigate } from "react-router-dom";
import { iAnnouncement } from "../../../../interfaces";

interface iProps {
  element: iAnnouncement | undefined;
}

const AdvertData = ({ element }: iProps) => {
  const { userData } = useUserContext();
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const whatsappURL = `https://api.whatsapp.com/send/?phone=55${element?.user
    ?.phone!}&text=Olá gostaria de comprar o seu carro: ${
    element?.model
  } da marca ${element?.brand}`;

  return (
    <CardContent
      className="AdvertCard"
      sx={{
        maxHeight: 300,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: 1,
        p: 6,
      }}
      component={motion.div}
      initial={animateHiddenItens}
      animate={animateShownItens}
      transition={animateTransitionItens}
    >
      <Typography
        component="div"
        variant="h6"
        gutterBottom
        className="card--title"
        sx={{ mb: 2, fontFamily: "Lexend" }}
      >
        {element ? element?.model : "Loading..."}
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <StyledChip
            label={element ? element?.manufacture_year! : "Loading..."}
          />
          <StyledChip
            label={element?.mileage ? `${element?.mileage!} KM` : "Loading..."}
          />
        </Stack>
        <span className="card--price">
          {element?.price ? monetizeString(+element?.price!) : "Loading..."}
        </span>
      </Stack>
      <CardActions sx={{ p: 0 }}>
        {userData ? (
          <Button
            variant="contained"
            className="buttonBrand"
            component={motion.a}
            target="_blank"
            href={whatsappURL}
          >
            {element ? "Comprar" : "Loading..."}
          </Button>
        ) : (
          <Button
            variant="contained"
            className="buttonBrand"
            onClick={handleNavigateLogin}
          >
            {element ? "Comprar" : "Loading..."}
          </Button>
        )}
      </CardActions>
    </CardContent>
  );
};

export default AdvertData;
