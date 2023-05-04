import { DivAdvert } from "./style";
import { AdvertPageSize } from "./windowSize";
import { Footer, Header, TransitionAnimation } from "../../components";

const AdvertPage = () => (
  <TransitionAnimation>
    <div className="advertBody">
      <Header />

      <DivAdvert>
        <AdvertPageSize />
      </DivAdvert>

      <Footer />
    </div>
  </TransitionAnimation>
);

export default AdvertPage;
