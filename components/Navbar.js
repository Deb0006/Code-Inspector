import styles from ".//Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { signInWithGoogle, auth } from "../components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          Code
          <br />
          Inspector
        </h1>
        <h2 className={styles.description}>AI-powered website</h2>
      </div>
      <div className={styles.animatedIcon}>
        <label htmlFor="hamburguer" aria-label="Open or close other options">
          <Hamburger
            className={styles.hamburger}
            id="hamburguer"
            toggled={isOpen}
            toggle={setOpen}
            size={26}
            label="Show menu"
            rounded
          />
        </label>
      </div>
      <div className={isOpen ? styles.dropdownMenu : styles.dropdownMenuHidden}>
        <Link href="/">
          <span className={styles.menuOptions}>Inspector</span>
        </Link>
        <Link href="/results">
          <span className={styles.menuOptions}>Results</span>
        </Link>
        <Link href="/about">
          <span className={styles.menuOptions}>About</span>
        </Link>
        {user ? (
          <button className={styles.signIn} onClick={() => auth.signOut()}>
            Sign out
          </button>
        ) : (
          <button className={styles.signOut} onClick={signInWithGoogle}>
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
