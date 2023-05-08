import React from "react";
import { motion } from "framer-motion";
import { iUser } from "../../../../interfaces";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Typography, Stack, Box } from "@mui/material";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";
interface iProps {
  data: iUser | undefined;
}

const SalesmanData = ({ data }: iProps) => {
  const navigate = useNavigate();
  const salesmanRedirect = () => {
    navigate(`/users/${data!.id}`);
  };
  return (
    <Box
      className="AdvertCard"
      sx={{ p: 2, borderRadius: 1 }}
      component={motion.div}
      initial={animateHiddenItens}
      animate={animateShownItens}
      transition={animateTransitionItens}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Avatar
          src={data?.profile?.url}
          alt={data?.name}
          sx={{ width: 104, height: 104 }}
        />
        <Typography className="card--title" sx={{ fontFamily: "Lexend" }}>
          {data?.name}
        </Typography>
        <Typography className="Advertdesc" sx={{ fontFamily: "Inter" }}>
          {data?.description}
        </Typography>

        <Button
          variant="contained"
          className="buttonGrey-1"
          onClick={salesmanRedirect}
        >
          Ver Anuncios
        </Button>
      </Stack>
    </Box>
  );
};

export default SalesmanData;
