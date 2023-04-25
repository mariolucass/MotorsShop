import { Avatar, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";

const SalesmanData = () => {
  return (
    <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Avatar sx={{ bgcolor: "green" }}>FC</Avatar>
        <Typography className="card--title">Filipe Costa</Typography>
        <Typography className="Advertdesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button variant="contained">Ver Anuncios</Button>
      </Stack>
    </Box>
  );
};

export default SalesmanData;
