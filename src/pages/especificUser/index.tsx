import { StyledHero } from "./style";
import { motion } from "framer-motion";
import { iUser } from "../../interfaces";
import { useEffect, useState } from "react";
import { getUserById } from "../../services";
import { Avatar, Container, Skeleton } from "@mui/material";
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
                {userSpecific.profile ? (
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    src={userSpecific.profile.url}
                  />
                ) : (
                  <Skeleton
                    variant="circular"
                    width={80}
                    height={80}
                    animation="wave"
                  />
                )}
                <div>
                  <span>
                    {userSpecific.name ? userSpecific?.name : "Loading..."}
                  </span>

                  {userSpecific?.role === "SELLER" && <div>Anunciante</div>}
                </div>
              </div>
              <p>
                {userSpecific.description
                  ? userSpecific?.description
                  : "Loading..."}
              </p>
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
