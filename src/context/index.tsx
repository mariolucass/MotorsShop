import { iChildren } from "../interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";
import { FilterProvider } from "./FilterContext";
import { AnnouncementProvider } from "./AnnouncementContext";
import { DataPrivider } from "./DataContext";
import { LoadingProvider } from "./LoadingContext";

const Providers = ({ children }: iChildren) => (
  <FilterProvider>
    <MediaProvider>
      <DataPrivider>
        <AnnouncementProvider>
          <LoadingProvider>
            <UserProvider>
              <ModalProvider>{children}</ModalProvider>
            </UserProvider>
          </LoadingProvider>
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
export { useLoadingContext } from "./LoadingContext";
