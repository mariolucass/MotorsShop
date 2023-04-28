import { IChildren } from "../interfaces/global.interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";

const Providers = ({ children }: IChildren) => {
  return (
    <FilterProvider>
      <MediaProvider>
        <UserProvider>
          <ModalProvider>{children}</ModalProvider>
        </UserProvider>
      </MediaProvider>
    </FilterProvider>
  );
};

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
export { useFilterContext } from "./FilterContext";
