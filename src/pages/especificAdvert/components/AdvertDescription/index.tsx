import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

interface iProps {
  desc: string | undefined;
}

const AdvertDesc = ({ desc }: iProps) => {
  return (
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
};

export default AdvertDesc;
