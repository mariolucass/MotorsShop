import { StyledHero } from "./style";
import { motion } from "framer-motion";
import { iUser } from "../../interfaces";
import { useEffect, useState } from "react";
import { getUserById } from "../../services";
import { Avatar, Container } from "@mui/material";
import { redirect, useParams } from "react-router-dom";
import { animateTransitionPresence } from "../../libs/framer";
import { Adverts, Footer, Header, TransitionAnimation } from "../../components";
import {
  useAnnouncementContext,
  useLoadingContext,
  useUserContext,
} from "../../context";

export const EspecificUser = () => {
  const { setUserAdverts } = useAnnouncementContext();
  const { setIsLoading } = useLoadingContext();

  const [userSpecific, setUserSpecific] = useState<iUser>({} as iUser);
  const { userData } = useUserContext();

  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      if (userData) {
        userId === userData!.id && redirect("/profile");
      }

      const response = await getUserById(userId!);
      setUserSpecific(response);
      setUserAdverts(response.announcements);

      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userSpecific);

  return (
    <TransitionAnimation>
      <motion.div className="advertBody">
        <Header />

        <>
          <StyledHero>
            <motion.section
              animate={{ width: "100%", opacity: 1 }}
              initial={{ width: "35%", opacity: 0 }}
              transition={animateTransitionPresence}
            >
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
            </motion.section>
          </StyledHero>

          <Container>
            <Adverts isProfile />
          </Container>
        </>
      </motion.div>
      <Footer />
    </TransitionAnimation>
  );
};
