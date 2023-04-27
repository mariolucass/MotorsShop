import { IChildren } from "../interfaces/global.interfaces";
import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";
import { UserProvider } from "./UserContext";

const Providers = ({ children }: IChildren) => (
  <MediaProvider>
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  </MediaProvider>
);

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
export { useUserContext } from "./UserContext";
