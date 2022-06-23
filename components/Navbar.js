import styles from "../styles/Navbar.module.css";
import { FiAlignCenter, FiX } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src={"./images/Pattern.png"}
        alt="universe"
        className={styles.background}
      />
      <div className={styles.container}>
        <h1 className={styles.logo}>
          OpenAI <br />
          Inspector
        </h1>
        <a href="" className={styles.description}>
          Quick view to OpenAI
        </a>
      </div>
      <div className={styles.animatedIcon}>
        <FiAlignCenter />
        <FiX />
      </div>
    </nav>
  );
};

export default Navbar;
