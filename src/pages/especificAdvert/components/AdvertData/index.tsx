import Stack from "@mui/material/Stack";
import { StyledChip } from "../../../../components";
import { monetizeString } from "../../../../utils";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";
import { useUserContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

interface iProps {
  name: string | undefined;
  price: string | undefined;
  year: string | undefined;
  km: number | undefined;
}

const AdvertData = ({ name, price, km, year }: iProps) => {
  const { userData } = useUserContext();
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

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
        {name}
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
          <StyledChip label={year!} />
          <StyledChip label={`${km!} KM`} />
        </Stack>
        <span className="card--price">{monetizeString(+price!)}</span>
      </Stack>
      <CardActions sx={{ p: 0 }}>
        {userData ? (
          <Button
            variant="contained"
            className="buttonBrand"
            onClick={() => {}}
          >
            Comprar
          </Button>
        ) : (
          <Button
            variant="contained"
            className="buttonBrand"
            disabled
            onClick={handleNavigateLogin}
          >
            Comprar
          </Button>
        )}
      </CardActions>
    </CardContent>
  );
};

export default AdvertData;
