import { useEffect } from "react";
import { AdvertsMenu } from "./style";
import { Box, Button, Container } from "@mui/material";
import MyPagination from "../../components/pagination";
import {
  useDataContext,
  useFilterContext,
  useMediaContext,
} from "../../context";
import {
  Adverts,
  Footer,
  Header,
  Menu,
  NavBar,
  TransitionAnimation,
} from "../../components";

const Home = () => {
  const { matches700 } = useMediaContext();
  const { searchParams } = useDataContext();
  const { setShowFilter, showFilter } = useFilterContext();

  useEffect(() => {
    const data = Array.from(searchParams.keys());
    const keys = data.reduce(
      (elem, v) => ({ ...elem, [v]: searchParams.get(v) }),
      {}
    );

    if (data.length) {
      localStorage.setItem("@MotorsShop:filter", JSON.stringify(keys));
    }
  }, [searchParams]);

  return (
    <TransitionAnimation>
      <Header />

      <Menu />
      <Container className="container">
        <AdvertsMenu>
          <NavBar />
          <Adverts isHome />
        </AdvertsMenu>
        <MyPagination />

        {matches700 && (
          <Box sx={{ width: "95%", m: 1, mt: 5, mb: 5 }}>
            <Button
              sx={{ width: "100%" }}
              className="buttonBrand"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filtros
            </Button>
          </Box>
        )}
      </Container>
      <Footer />
    </TransitionAnimation>
  );
};

export default Home;
