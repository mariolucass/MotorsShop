import { Avatar, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import { iUser } from "../../../../interfaces";

interface iProps {
  data: iUser | undefined;
}

const SalesmanData = ({ data }: iProps) => {
  return (
    <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Avatar src={data?.profile?.url} alt={data?.name} />
        <Typography className="card--title">{data?.name}</Typography>
        <Typography className="Advertdesc">{data?.description}</Typography>
        <Button variant="contained" className="buttonGrey-1">
          Ver Anuncios
        </Button>
      </Stack>
    </Box>
  );
};

export default SalesmanData;
