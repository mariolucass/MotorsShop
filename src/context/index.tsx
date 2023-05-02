import { iChildren } from "../interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { AnnouncementProvider } from "./AnnouncementContext";

const Providers = ({ children }: iChildren) => (
  <FilterProvider>
    <MediaProvider>
      <UserProvider>
        <AnnouncementProvider>
          <ModalProvider>{children}</ModalProvider>
        </AnnouncementProvider>
      </UserProvider>
    </MediaProvider>
  </FilterProvider>
);

export default Providers;
export { useAnnouncementContext } from "./AnnouncementContext";
export { useFilterContext } from "./FilterContext";
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
