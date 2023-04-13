import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import Adverts from "../../components/adverts";
import { ModalGeneral } from "../../components/modal";

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
    <section>
      <Menu />
      <main className="container--Main">
        <div className={widthSize < 700 ? "ocult" : ""}>filter</div>
        <Adverts />
      </main>
    </section>
  );
};

export default Home;
