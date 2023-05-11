import { iChildren } from "../interfaces";
import { UserProvider } from "./UserContext";
import { DataProvider } from "./DataContext";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { FilterProvider } from "./FilterContext";
import { LoadingProvider } from "./LoadingContext";
import { AnnouncementProvider } from "./AnnouncementContext";

const Providers = ({ children }: iChildren) => (
  <FilterProvider>
    <MediaProvider>
      <DataProvider>
        <AnnouncementProvider>
          <LoadingProvider>
            <UserProvider>
              <ModalProvider>{children}</ModalProvider>
            </UserProvider>
          </LoadingProvider>
        </AnnouncementProvider>
      </DataProvider>
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
