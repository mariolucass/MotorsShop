import { StyledHero } from "./style";
import { iUser } from "../../interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services";
import { Avatar, Container } from "@mui/material";
import { LoadingComponent } from "../../components/loading";
import { useAnnouncementContext } from "../../context";
import { Adverts, Footer, Header } from "../../components";
import { useLoadingContext } from "../../context/LoadingContext";
import { motion } from "framer-motion";
import { TransitionAnimation } from "../../components/transitionAnimation";

export const EspecificUser = () => {
  const { setUserAdverts } = useAnnouncementContext();
  const { setIsLoading } = useLoadingContext();

  const [userSpecific, setUserSpecific] = useState<iUser>({} as iUser);

  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getUserById(userId!);

      setUserSpecific(response);
      setUserAdverts(response.announcements);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoadingComponent>
      <TransitionAnimation>
        <motion.div className="advertBody">
          <Header />
          <>
            <StyledHero>
              <section>
                <div>
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    src={
                      userSpecific.profile
                        ? userSpecific.profile.url
                        : "https://www.example.com/example.png"
                    }
                  />
                  <div>
                    <span>{userSpecific?.name}</span>
                    <div>Anunciante</div>
                  </div>
                </div>
                <p>{userSpecific?.description}</p>
              </section>
            </StyledHero>

            <Container>
              <Adverts isProfile />
            </Container>
          </>

          <Footer />
        </motion.div>
      </TransitionAnimation>
    </LoadingComponent>
  );
};
