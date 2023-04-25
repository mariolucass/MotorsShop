import { Footer, Header } from "../../components";
import { useMediaContext } from "../../context";
import { WindowSize, WindowSizeMobile } from "./windowSize";

const AdvertPage = () => {
  const { matches500, matches700, matches900, matches1200 } = useMediaContext();

  return (
    <div className="advertBody">
      <Header />
      {matches700 ? <WindowSizeMobile /> : <WindowSize />}
      <Footer />
    </div>
  );
};

export default AdvertPage;
