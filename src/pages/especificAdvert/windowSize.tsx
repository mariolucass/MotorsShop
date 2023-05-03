import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AdvertImage, AdvertImageList } from "./components/AdvertImage";
import { useDataContext, useMediaContext } from "../../context";
import AdvertData from "./components/AdvertData";
import AdvertDesc from "./components/AdvertDescription";
import SalesmanData from "./components/SalesmanData";
import { useEffect } from "react";
import { localApi } from "../../services";

const AdvertPageSize = () => {
  const { matches500, matches700, matches900 } = useMediaContext();
  const { specificAdvertData, setSpecificAdvertData, AdvertId } =
    useDataContext();

  useEffect(() => {
    try {
      localApi
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

  if (matches700) {
    return (
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertImage
              src={
                "https://s7d1.scene7.com/is/image/hyundai/compare-vehicle-1225x619?wid=276&hei=156&fmt=webp-alpha"
              }
            />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertData
              name={specificAdvertData?.model}
              price={specificAdvertData?.price}
            />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <AdvertDesc desc={specificAdvertData?.description} />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
            <AdvertImageList src={specificAdvertData?.listImage} />
          </Grid>
          <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
            <SalesmanData />
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertImage
            src={
              "https://s7d1.scene7.com/is/image/hyundai/compare-vehicle-1225x619?wid=276&hei=156&fmt=webp-alpha"
            }
          />
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
          />
          <AdvertDesc desc={specificAdvertData?.description} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <SalesmanData />
        </Grid>
      </Grid>
    </Container>
  );
};

export { AdvertPageSize };
