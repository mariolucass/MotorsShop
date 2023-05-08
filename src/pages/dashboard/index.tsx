import { marcas } from "../../data";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { capitalizeString } from "../../utils";
import { useDataContext } from "../../context";
import Logo from "../../assets/logoColored.svg";
import { iAnnouncement } from "../../interfaces";
import { ImageSwiper } from "../../components/imagesSwiper";
import { AutoCompletes } from "../../components/autoCompletes";
import { DashboardCards } from "../../components/dashboardCard";
import { LastPromotionAdverts } from "../../components/mostSearched";
import { Footer, Header, TransitionAnimation } from "../../components";
import {
  getAnnouncementWithQuery,
  getCountAnnouncements,
} from "../../services";
import {
  animateHiddenItens,
  animateShownItens,
  animateTransitionItens,
} from "../../libs";
import {
  BelowContent,
  DivContainersShow,
  DivLoadingInDash,
  DivSearch,
  DivSlogan,
  MainStyled,
} from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<iAnnouncement[]>([]);
  const [count, setCount] = useState(0);
  const { AdvertsData } = useDataContext();

  useEffect(() => {
    if (brand.length) {
      (async () =>
        setModels(await getAnnouncementWithQuery(capitalizeString(brand))))();
    }
  }, [brand]);

  useEffect(() => {
    (async () => {
      const countAnnouncements = await getCountAnnouncements();
      setCount(countAnnouncements);
    })();
  }, []);

  const handleSearchChange = () => {
    if (brand && model) {
      navigate(`/home/${brand}/${model}`);
    }
  };

  return (
    <TransitionAnimation>
      <Header />

      <MainStyled>
        <ImageSwiper />

        <DivSlogan
          initial={animateHiddenItens}
          animate={animateShownItens}
          transition={animateTransitionItens}
        >
          <div className="logoDiv">
            <img src={Logo} alt="Logo" />
          </div>

          <h1 className="heading2-600">
            Encontre o veículo incrível para você
          </h1>
          <span className="heading5-600">
            Sinta a velocidade, compre na MotorsShop
          </span>
        </DivSlogan>

        <DivSearch
          initial={animateHiddenItens}
          animate={animateShownItens}
          transition={animateTransitionItens}
        >
          <AutoCompletes
            setBrand={setBrand}
            setModel={setModel}
            modelsDash={models}
          />

          <Button onClick={handleSearchChange} className="filterButton">
            Ver ofertas ({count})
          </Button>
        </DivSearch>

        <BelowContent
          initial={animateHiddenItens}
          animate={animateShownItens}
          transition={animateTransitionItens}
        >
          <DivContainersShow>
            <h2>Montadoras</h2>

            <DashboardCards list={marcas} />
          </DivContainersShow>

          <DivContainersShow>
            <h2>Últimas Ofertas</h2>

            {AdvertsData.length === 0 ? (
              <DivLoadingInDash>
                <PulseLoader size={64} color={"#4529e6"} />
              </DivLoadingInDash>
            ) : (
              <LastPromotionAdverts />
            )}
          </DivContainersShow>
        </BelowContent>
      </MainStyled>

      <Footer />
    </TransitionAnimation>
  );
};
