import { Container } from "@mui/material";
import { AdvertsMenu } from "./style";
import { Adverts, Footer, Header, Menu, NavBar } from "../../components";

const Home = () => {
  return (
    <>
      <Header isHome={true} />

      <Menu />
      <Container className="container">
        <AdvertsMenu>
          <NavBar />
          <Adverts />
        </AdvertsMenu>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
