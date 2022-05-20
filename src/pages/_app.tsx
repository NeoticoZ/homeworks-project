import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import GlobalStyles from "../styles/global";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AuthProvider>
        <Header toggleTheme={toggleTheme} theme={theme} />

        <Component {...pageProps} />
      </AuthProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
