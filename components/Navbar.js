import styles from ".//Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
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
        <Link href="/">
          <span className={styles.menuOptions}>Inspector</span>
        </Link>
        <Link href="/examples">
          <span className={styles.menuOptions}>Examples</span>
        </Link>
        <Link href="/about">
          <span className={styles.menuOptions}>About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
