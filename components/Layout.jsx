import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children, toggleTheme, theme }) => (
  <>
    <Navbar toggle={toggleTheme} theme={theme} />

    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
