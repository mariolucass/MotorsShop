import React from "react";
import { motion } from "framer-motion";
import { iUser } from "../../../../interfaces";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Typography,
  Stack,
  Box,
  Skeleton,
} from "@mui/material";
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
      sx={{ p: 2, borderRadius: 1, maxHeight: 500 }}
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
        {data ? (
          <Avatar
            src={data?.profile?.url}
            alt={data?.name}
            sx={{ width: 104, height: 104 }}
          />
        ) : (
          <Skeleton
            variant="circular"
            width={104}
            height={104}
            animation="wave"
          />
        )}
        <Typography className="card--title" sx={{ fontFamily: "Lexend" }}>
          {data ? data?.name : "Loading..."}
        </Typography>
        <Typography className="Advertdesc" sx={{ fontFamily: "Inter" }}>
          {data ? data?.description : "Loading..."}
        </Typography>

        <Button
          variant="contained"
          className="buttonGrey-1"
          onClick={salesmanRedirect}
        >
          {data ? "Ver Anuncios" : "Loading..."}
        </Button>
      </Stack>
    </Box>
  );
};

export default SalesmanData;
