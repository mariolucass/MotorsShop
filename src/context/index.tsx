import { iChildren } from "../interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { UploadProvider } from "./UploadContext";

const Providers = ({ children }: iChildren) => (
  <FilterProvider>
    <MediaProvider>
      <UploadProvider>
        <UserProvider>
          <ModalProvider>{children}</ModalProvider>
        </UserProvider>
      </UploadProvider>
    </MediaProvider>
  </FilterProvider>
);

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
export { useFilterContext } from "./FilterContext";
export { useUploadContext } from "./UploadContext";
