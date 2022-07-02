import styles from "../styles/Navbar.module.css";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import { FiAlignCenter, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  function fadeOut() {}
  return (
    <nav className={styles.navbar}>
      <img
        src={"./images/Pattern.png"}
        alt="universe"
        className={styles.background}
      />
      <div className={styles.container}>
        <h1 className={styles.logo}>
          Code
          <br />
          Inspector
        </h1>
        <h2 className={styles.description}>Code explained with OpenAI</h2>
      </div>
      <div className={styles.animatedIcon}>
        <Hamburger
          className={styles.hamburger}
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          label="Show menu"
        />
      </div>
      <div className={isOpen ? styles.dropdownMenu : styles.dropdownMenuHidden}>
        <a className={styles.menuOptions}>Examples</a>
        <a className={styles.menuOptions}>About</a>
      </div>
    </nav>
  );
};

export default Navbar;
