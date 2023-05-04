import { Stack, Typography, Box } from "@mui/material";
import React from "react";

interface iProps {
  desc: string | undefined;
}

const AdvertDesc = ({ desc }: iProps) => (
  <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={4}
    >
      <Typography className="card--title">Descrição</Typography>
      <Typography className="Advertdesc">{desc}</Typography>
    </Stack>
  </Box>
);

export default AdvertDesc;
