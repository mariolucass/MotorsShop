import { StyledImg } from "./style";
import { iImage, iListImage } from "../../../../interfaces";
import {
  Typography,
  ImageList,
  Stack,
  ImageListItem,
  Skeleton,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../../../libs";

interface iProps {
  src: iImage | undefined;
}
interface iPropsList {
  src: Array<iListImage> | undefined;
}

const AdvertImage = ({ src }: iProps) => {
  return (
    <StyledImg>
      <Box
        component={"img"}
        src={src?.url}
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
        alignItems="flex-start"
        spacing={4}
      >
        <Typography className="card--title" sx={{ fontFamily: "Lexend" }}>
          Fotos
        </Typography>

        <ImageList sx={{ width: "100%" }}>
          {src ? (
            src!.map((iten, index) => (
              <ImageListItem key={index}>
                <img src={iten?.image?.url} alt="" />
              </ImageListItem>
            ))
          ) : (
            <>
              <Skeleton height={128} sx={{ mx: 0 }} />
              <Skeleton height={128} sx={{ mx: 0 }} />
            </>
          )}
        </ImageList>
      </Stack>
    </Box>
  );
};

export { AdvertImage, AdvertImageList };
