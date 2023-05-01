import { IChildren } from "../interfaces/global.interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { DataPrivider } from "./DataContext";

const Providers = ({ children }: IChildren) => (
  <FilterProvider>
    <DataPrivider>
      <MediaProvider>
        <UserProvider>
          <ModalProvider>{children}</ModalProvider>
        </UserProvider>
      </MediaProvider>
    </DataPrivider>
  </FilterProvider>
);

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
export { useFilterContext } from "./FilterContext";
export { useDataContext } from "./DataContext";
