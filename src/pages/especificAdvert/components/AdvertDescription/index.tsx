import { Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";

interface iProps {
  desc: string | undefined;
}

const AdvertDesc = ({ desc }: iProps) => (
  <Box
    className="AdvertCard"
    sx={{ p: 6, borderRadius: 1 }}
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
        {desc}
      </Typography>
    </Stack>
  </Box>
);

export default AdvertDesc;
