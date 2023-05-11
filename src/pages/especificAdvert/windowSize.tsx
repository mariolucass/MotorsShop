import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import AdvertData from "./components/AdvertData";
import SalesmanData from "./components/SalesmanData";
import { getAnnouncementById } from "../../services";
import AdvertDesc from "./components/AdvertDescription";
import { AdvertComments } from "./components/AdvertComments";
import { AdvertCreateComment } from "./components/AdvertCreateComment";
import {
  AdvertImage,
  AdvertImageList,
  AdvertImageModal,
} from "./components/AdvertImage";
import {
  useDataContext,
  useLoadingContext,
  useMediaContext,
  useUserContext,
} from "../../context";
import { motion } from "framer-motion";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../libs";

const AdvertPageSize = () => {
  const { userData } = useUserContext();
  const { matches700 } = useMediaContext();
  const { setIsLoading } = useLoadingContext();
  const { specificAdvertData, setSpecificAdvertData } = useDataContext();
  const { advertId } = useParams();

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    (async () => {
      const response = await getAnnouncementById(advertId!);
      if (isMounted) {
        setSpecificAdvertData(response);
        setIsLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsLoading, advertId]);

  if (matches700) {
    return (
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"column"}>
          <Grid item xs={5}>
            <AdvertImage src={specificAdvertData?.cover} />
          </Grid>

          <Grid item xs={5}>
            <AdvertData element={specificAdvertData} />
          </Grid>

          <Grid item xs={5}>
            <AdvertDesc desc={specificAdvertData?.description} />
          </Grid>

          <Grid item xs={5}>
            <AdvertImageList src={specificAdvertData?.listImage} />
          </Grid>

          <Grid item xs={5}>
            <SalesmanData data={specificAdvertData?.user} />
          </Grid>

          <Grid item xs={5}>
            <AdvertDesc desc={specificAdvertData?.description} />
          </Grid>

          <Grid item xs={5}>
            <AdvertComments comments={specificAdvertData?.listComment} />
          </Grid>

          {userData && (
            <Grid item xs={5}>
              <AdvertCreateComment id={specificAdvertData?.id} />
            </Grid>
          )}
        </Grid>
        <AdvertImageModal />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={"row"}>
        <Grid
          item
          xs={8}
          component={motion.div}
          initial={animateHiddenItens}
          animate={animateShownItens}
          transition={animateTransitionItens}
          sx={{ minHeight: 350 }}
        >
          <AdvertImage src={specificAdvertData?.cover} />
        </Grid>
        <Grid
          item
          xs={4}
          component={motion.div}
          initial={animateHiddenItens}
          animate={animateShownItens}
          transition={animateTransitionItens}
        >
          <AdvertImageList src={specificAdvertData?.listImage} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <AdvertData element={specificAdvertData} />

          <AdvertDesc desc={specificAdvertData?.description} />

          <AdvertComments comments={specificAdvertData?.listComment} />

          {userData && <AdvertCreateComment id={specificAdvertData?.id} />}
        </Grid>

        <Grid item xs={4}>
          <SalesmanData data={specificAdvertData?.user} />
        </Grid>
      </Grid>
      <AdvertImageModal />
    </Container>
  );
};

export { AdvertPageSize };
