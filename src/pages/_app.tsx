import type { AppProps } from "next/app";
import { ModalProvider } from "../hooks/useModal";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />

      <GlobalStyles />
    </ModalProvider>
  );
}

export default MyApp;
