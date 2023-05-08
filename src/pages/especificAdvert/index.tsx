import { DivAdvert } from "./style";
import { AdvertPageSize } from "./windowSize";
import { Footer, Header, TransitionAnimation } from "../../components";
import { ModalUpdateComment } from "../../components/modal/modalUpdateComment";

const AdvertPage = () => (
  <TransitionAnimation>
    <div className="advertBody">
      <Header />

      <DivAdvert>
        <AdvertPageSize />
      </DivAdvert>

      <Footer />

      <ModalUpdateComment />
    </div>
  </TransitionAnimation>
);

export default AdvertPage;
