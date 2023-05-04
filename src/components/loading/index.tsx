import { Footer } from "../footer";
import { Header } from "../header";
import { DivLoading } from "./style";
import { iChildren } from "../../interfaces";
import { PulseLoader } from "react-spinners";
import { useLoadingContext } from "../../context";
import { TransitionAnimation } from "../transitionAnimation";

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
