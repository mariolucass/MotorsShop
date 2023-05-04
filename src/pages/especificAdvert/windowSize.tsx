import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import AdvertData from "./components/AdvertData";
import SalesmanData from "./components/SalesmanData";
import { getAnnouncementById } from "../../services";
import AdvertDesc from "./components/AdvertDescription";
import { AdvertComments } from "./components/AdvertComments";
import { AdvertCreateComment } from "./components/AdvertCreateComment";
import { AdvertImage, AdvertImageList } from "./components/AdvertImage";
import {
  useDataContext,
  useLoadingContext,
  useMediaContext,
  useUserContext,
} from "../../context";

const AdvertPageSize = () => {
  const { matches500, matches700, matches900 } = useMediaContext();
  const { userData } = useUserContext();
  const { specificAdvertData, setSpecificAdvertData } = useDataContext();
  const { setIsLoading } = useLoadingContext();

  const { advertId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getAnnouncementById(advertId!);
      setSpecificAdvertData(response);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (matches700) {
    return (
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertImage src={specificAdvertData?.cover} />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertData
              name={specificAdvertData?.model}
              price={specificAdvertData?.price}
              km={specificAdvertData?.mileage}
              year={specificAdvertData?.manufacture_year}
            />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertDesc desc={specificAdvertData?.description} />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
            <AdvertImageList src={specificAdvertData?.listImage} />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <SalesmanData data={specificAdvertData?.user} />
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertImage src={specificAdvertData?.cover} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <AdvertImageList src={specificAdvertData?.listImage} />
        </Grid>
        <Grid
          item
          xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <AdvertData
            name={specificAdvertData?.model}
            price={specificAdvertData?.price}
            km={specificAdvertData?.mileage}
            year={specificAdvertData?.manufacture_year}
          />

          <AdvertDesc desc={specificAdvertData?.description} />

          <AdvertComments comments={specificAdvertData?.listComment} />

          {userData && <AdvertCreateComment id={specificAdvertData?.id} />}
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <SalesmanData data={specificAdvertData?.user} />
        </Grid>
      </Grid>
    </Container>
  );
};

export { AdvertPageSize };
