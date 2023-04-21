import { MediaProvider } from "./MediaContext";
import { ModalProvider } from "./ModalContext";

type iProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: iProvidersProps) => {
  return (
    <MediaProvider>
      <ModalProvider>{children}</ModalProvider>
    </MediaProvider>
  );
};

export default Providers;
export { useMediaContext } from "./MediaContext";
export { useModalContext } from "./ModalContext";
