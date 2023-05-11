import { marcasMocked } from "../../data";
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
  getFilteredAnnouncements,
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
  const { announcementsDash, setAnnouncementsDash, setCount, count } =
    useDataContext();

  useEffect(() => {
    if (brand.length) {
      (async () =>
        setModels(
          await getAnnouncementWithQuery({ brand: capitalizeString(brand) })
        ))();
    }
  }, [brand]);

  useEffect(() => {
    (async () => {})();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      const countAnnouncements = await getCountAnnouncements();
      setCount(countAnnouncements);

      const pagination = "?page=0&";
      const announcements = await getFilteredAnnouncements(pagination);

      setAnnouncementsDash(announcements);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = async () => {
    if (brand && model) {
      const brandFormatted = capitalizeString(brand);
      const modelFormatted = capitalizeString(model).split(" ")[0];

      const data = {
        page: "0",
        brand: brandFormatted,
        model: modelFormatted,
      };

      localStorage.setItem("@MotorsShop:filter", JSON.stringify(data));

      navigate(`/?brand=${brandFormatted}&model=${modelFormatted}&page=0`);
    } else {
      localStorage.removeItem("@MotorsShop:filter");
      navigate(`/`);
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
            brand={brand}
            setBrand={setBrand}
            setModel={setModel}
            modelsDash={models}
          />

          <Button
            variant="contained"
            className="buttonBrand"
            onClick={handleSearchChange}
          >
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

            <DashboardCards list={marcasMocked} />
          </DivContainersShow>

          <DivContainersShow>
            <h2>Últimas Ofertas</h2>

            {!announcementsDash.length ? (
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
