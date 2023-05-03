import Box from "@mui/material/Box";
import React from "react";
import { StyledImg } from "./style";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import { iListImage } from "../../../../interfaces";

interface iProps {
  src: string;
}
interface iPropsList {
  src: Array<iListImage> | undefined;
}

const AdvertImage = ({ src }: iProps) => {
  return (
    <StyledImg>
      <Box
        component={"img"}
        src={src}
        sx={{
          objectFit: "contain",
          width: "70%",
          height: "100%",
          padding: 2,
        }}
      />
    </StyledImg>
  );
};

const AdvertImageList = ({ src }: iPropsList) => {
  return (
    <Box className="AdvertCard" sx={{ p: 2, borderRadius: 1 }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Typography className="card--title">Fotos</Typography>
        <ImageList sx={{ width: "100%" }}>
          {/* <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={src} alt="" />
          </ImageListItem> */}
        </ImageList>
      </Stack>
    </Box>
  );
};

export { AdvertImage, AdvertImageList };
