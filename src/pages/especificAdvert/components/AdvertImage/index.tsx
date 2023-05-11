import { motion } from "framer-motion";
import { StyledImg, ListImageEmpty } from "./style";
import { useDataContext, useLoadingContext } from "../../../../context";
import { iImage, iListImage } from "../../../../interfaces";
import {
  Typography,
  ImageList,
  Stack,
  ImageListItem,
  Skeleton,
  Box,
  Modal,
  Button,
} from "@mui/material";
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
  const cardSx = {
    objectFit: "contain",
    width: "70%",
    height: "100%",
    padding: 2,
    maxHeight: 350,
  };

  return (
    <StyledImg>
      {src ? (
        <Box component={"img"} src={src?.url} sx={cardSx} />
      ) : (
        <Skeleton sx={cardSx} />
      )}
    </StyledImg>
  );
};

const AdvertImageList = ({ src }: iPropsList) => {
  const { isLoading } = useLoadingContext();
  const { open, setOpen, setImage } = useDataContext();
  const showModal = () => setOpen(!open);

  return (
    <Box
      className="AdvertCard"
      sx={{ p: 2, borderRadius: 1, maxHeight: 370, height: "100%" }}
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
          ) : src && Array.isArray(src) && src.length > 0 ? (
            src.map((item, index) => (
              <ImageListItem
                key={index}
                onClick={() => {
                  setImage(item?.image?.url);
                  showModal();
                }}
                sx={{ cursor: "pointer" }}
              >
                <img src={item?.image?.url} alt="" />
              </ImageListItem>
            ))
          ) : (
            <ListImageEmpty>
              <span>Não há outras imagens do produto...</span>
            </ListImageEmpty>
          )}
        </ImageList>
      </Stack>
    </Box>
  );
};

const AdvertImageModal = () => {
  const { open, setOpen, image } = useDataContext();
  const showModal = () => setOpen(!open);

  return (
    <Modal open={open} onClose={showModal}>
      <Box
        sx={{
          backgroundColor: "#fff",
          width: 500,
          height: 500,
          p: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography className="card--title">Imagem Do Veiculo</Typography>

          <Button
            sx={{ width: "5%" }}
            className="buttonGrey-2"
            onClick={showModal}
          >
            X
          </Button>
        </Stack>
        <Box
          sx={{ objectFit: "contain", width: "100%" }}
          component={"img"}
          src={image}
          alt="imagem do carro"
        />
      </Box>
    </Modal>
  );
};

export { AdvertImage, AdvertImageList, AdvertImageModal };
