import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import GlobalStyles from "../styles/global";
import { useState } from "react";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header toggleTheme={toggleTheme} />

      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
