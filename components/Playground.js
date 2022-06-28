import styles from "../styles/Playground.module.css";
import FiSearch from "react-icons/fi";
const Playground = () => {
  return (
    <section className={styles.playground}>
      <h2 className={styles.title}>
        Ask OpenAI to brainstorm ideas combining two terms
      </h2>
      <form className={styles.form}>
        <label>
          Type an idea
          <input
            type="text"
            id="word1"
            placeholder="e.g sports"
            className={styles.input}
          ></input>
        </label>
        <label>
          Type another idea
          <input
            type="text"
            id="word2"
            placeholder="e.g apples"
            className={styles.input}
          ></input>
        </label>
        <button className={styles.btn}>Generate</button>
        <div className={styles.display}></div>
      </form>
    </section>
  );
};

export default Playground;
