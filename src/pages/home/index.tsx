import { Box, Button, Container } from "@mui/material";
import { AdvertsMenu } from "./style";
import { Adverts, Footer, Header, Menu, NavBar } from "../../components";
import { useFilterContext, useMediaContext } from "../../context";

const Home = () => {
  const { matches700 } = useMediaContext();
  const { setShowFilter, showFilter } = useFilterContext();

  return (
    <>
      <Header />

      <Menu />
      <Container className="container">
        <AdvertsMenu>
          <NavBar />
          <Adverts />
        </AdvertsMenu>
        {matches700 ? (
          <Box sx={{ width: "95%", m: 1, mt: 5, mb: 5 }}>
            <Button
              sx={{ width: "100%" }}
              className="buttonBrand"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filtros
            </Button>
          </Box>
        ) : (
          false
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
