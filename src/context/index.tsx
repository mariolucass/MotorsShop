import { IChildren } from "../interfaces/global.interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { UploadProvider } from "./UploadContext";

const Providers = ({ children }: IChildren) => (
  <FilterProvider>
    <MediaProvider>
      <UserProvider>
        <UploadProvider>
          <ModalProvider>{children}</ModalProvider>
        </UploadProvider>
      </UserProvider>
    </MediaProvider>
  </FilterProvider>
);

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
export { useFilterContext } from "./FilterContext";
export { useUploadContext } from "./UploadContext";
