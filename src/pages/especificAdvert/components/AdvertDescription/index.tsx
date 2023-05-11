import { Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";
import { useMediaContext } from "../../../../context";

interface iProps {
  desc: string | undefined;
}

const AdvertDesc = ({ desc }: iProps) => {
  const { matches500 } = useMediaContext();

  const size = () => {
    if (matches500) {
      return { p: 4, borderRadius: 1, maxHeight: 400 };
    }
    return { p: 6, borderRadius: 1, maxHeight: 400 };
  };

  return (
    <Box
      className="AdvertCard"
      sx={size}
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
          Descrição
        </Typography>
        <Typography className="Advertdesc" sx={{ fontFamily: "Inter" }}>
          {desc ? desc : "Loading..."}
        </Typography>
      </Stack>
    </Box>
  );
};

export default AdvertDesc;
