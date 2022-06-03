import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import GlobalStyles from "../styles/global";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AuthProvider } from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../components/ErrorBoundary";
import { Loading } from "../components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AuthProvider>
        <ErrorBoundary>
          <Header toggleTheme={toggleTheme} theme={theme} />

          {isLoading && <Loading />}

          <Component {...pageProps} />

          <ToastContainer theme="colored" />
        </ErrorBoundary>
      </AuthProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
