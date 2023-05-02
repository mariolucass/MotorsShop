import { iChildren } from "../interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { AnnouncementProvider } from "./AnnouncementContext";
import { DataPrivider } from "./DataContext";

const Providers = ({ children }: iChildren) => (
  <FilterProvider>
    <MediaProvider>
      <DataPrivider>
        <AnnouncementProvider>
          <UserProvider>
            <ModalProvider>{children}</ModalProvider>
          </UserProvider>
        </AnnouncementProvider>
      </DataPrivider>
    </MediaProvider>
  </FilterProvider>
);

export default Providers;
export { useAnnouncementContext } from "./AnnouncementContext";
export { useFilterContext } from "./FilterContext";
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
export { useDataContext } from "./DataContext";
