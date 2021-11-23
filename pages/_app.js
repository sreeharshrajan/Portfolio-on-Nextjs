import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import Theme, { lightTheme, darkTheme } from "../styles/theme";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <Layout toggleTheme={toggleTheme} theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
