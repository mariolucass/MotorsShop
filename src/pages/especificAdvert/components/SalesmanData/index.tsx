import React from "react";
import { iUser } from "../../../../interfaces";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Typography, Stack, Box } from "@mui/material";

interface iProps {
  data: iUser | undefined;
}

const SalesmanData = ({ data }: iProps) => {
  const navigate = useNavigate();
  const salesmanRedirect = () => {
    navigate(`/users/${data!.id}`);
  };

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
