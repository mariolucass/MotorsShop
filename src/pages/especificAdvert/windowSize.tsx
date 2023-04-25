import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AdvertImage, AdvertImageList } from "./components/AdvertImage";
import { useMediaContext } from "../../context";
import AdvertData from "./components/AdvertData";
import { listMockedCars } from "../../data";
import AdvertDesc from "./components/AdvertDescription";
import SalesmanData from "./components/SalesmanData";

const WindowSizeMobile = () => {
  const { matches500, matches700, matches900 } = useMediaContext();

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertImage src={listMockedCars[0].img} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertData
            name={listMockedCars[0].title}
            price={listMockedCars[0].price}
          />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertDesc desc={listMockedCars[2].description} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <AdvertImageList src={listMockedCars[0].img} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <SalesmanData />
        </Grid>
      </Grid>
    </Container>
  );
};

const WindowSize = () => {
  const { matches500, matches700, matches900 } = useMediaContext();

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={matches700 ? "column" : "row"}>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}>
          <AdvertImage src={listMockedCars[0].img} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <AdvertImageList src={listMockedCars[0].img} />
        </Grid>
        <Grid
          item
          xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 8 : 8}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <AdvertData
            name={listMockedCars[0].title}
            price={listMockedCars[0].price}
          />
          <AdvertDesc desc={listMockedCars[2].description} />
        </Grid>
        <Grid item xs={matches500 ? 0 : matches700 ? 5 : matches900 ? 4 : 4}>
          <SalesmanData />
        </Grid>
      </Grid>
    </Container>
  );
};

export { WindowSizeMobile, WindowSize };
