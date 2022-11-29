// import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from ".//Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
