import { StyledImg, ListImageEmpty } from "./style";
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
import { useLoadingContext } from "../../../../context";

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
  const { isLoading } = useLoadingContext();

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

        <ImageList sx={{ width: "100%", height: "100%" }} id="image_list">
          {isLoading ? (
            <>
              <Skeleton height={128} sx={{ mx: 0 }} />
              <Skeleton height={128} sx={{ mx: 0 }} />
            </>
          ) : (
            src && Array.isArray(src) && src.length > 0 ? (
              src.map((item, index) => (
                <ImageListItem key={index}>
                  <img src={item?.image?.url} alt="" />
                </ImageListItem>
              ))
            ) : (
              <ListImageEmpty>
                <span>Não há outras imagens do produto...</span>
              </ListImageEmpty>
            )
          )}
        </ImageList>
      </Stack>
    </Box>
  );
};

export { AdvertImage, AdvertImageList };
