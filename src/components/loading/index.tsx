import { useLoadingContext } from "../../context";
import { iChildren } from "../../interfaces";
import { Footer } from "../footer";
import { Header } from "../header";
import { TransitionAnimation } from "../transitionAnimation";
import { DivLoading } from "./style";
import { PulseLoader } from "react-spinners";

export const LoadingComponent = ({ children }: iChildren) => {
  const { isLoading } = useLoadingContext();

  return isLoading ? (
    <TransitionAnimation>
      <Header />

      <DivLoading>
        <PulseLoader size={75} color={"#4529e6"} />
      </DivLoading>

      <Footer />
    </TransitionAnimation>
  ) : (
    <>{children}</>
  );
};
