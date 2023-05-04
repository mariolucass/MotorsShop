import { DivAdvert } from "./style";
import { AdvertPageSize } from "./windowSize";
import {
  Footer,
  Header,
  LoadingComponent,
  TransitionAnimation,
} from "../../components";

const AdvertPage = () => (
  <LoadingComponent>
    <TransitionAnimation>
      <div className="advertBody">
        <Header />

        <DivAdvert>
          <AdvertPageSize />
        </DivAdvert>

        <Footer />
      </div>
    </TransitionAnimation>
  </LoadingComponent>
);

export default AdvertPage;
