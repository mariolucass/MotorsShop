import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AdvertImage, AdvertImageList } from "./components/AdvertImage";
import { useDataContext, useMediaContext } from "../../context";
import AdvertData from "./components/AdvertData";
import AdvertDesc from "./components/AdvertDescription";
import SalesmanData from "./components/SalesmanData";
import { useEffect } from "react";
import { apiUsingNow } from "../../services";

const AdvertPageSize = () => {
  const { matches500, matches700, matches900 } = useMediaContext();
  const { specificAdvertData, setSpecificAdvertData, AdvertId } =
    useDataContext();

  useEffect(() => {
    try {
      apiUsingNow
        .get(`/announcements/${AdvertId}`)
        .then((res) => {
          setSpecificAdvertData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [AdvertId]);
  console.log(specificAdvertData?.listImage);
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
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <SalesmanData data={specificAdvertData?.user} />
        </Grid>
      </Grid>
    </Container>
  );
};

export { AdvertPageSize };
