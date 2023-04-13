import { AdvertsMenu, MainStyled } from "./style";
import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import Adverts from "../../components/adverts";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";

const Home = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const setSize = () => {
    setWidthSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [widthSize]);

  return (
    <>
      <Header isHome={true} />

      <MainStyled className="container--Main">
        <section>
          <Menu />

          <AdvertsMenu>
            <NavBar widthSize={widthSize} />
            <Adverts />
          </AdvertsMenu>
        </section>
      </MainStyled>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
