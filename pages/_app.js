import "../styles/globals.css";
import ThemeContextWrapper from "../components/context/themeContextWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  );
}

export default MyApp;
