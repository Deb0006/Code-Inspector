import styles from ".//Examples.module.css";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-jsx.min";
function Examples(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <pre className={styles.preTag}>
            <code className={"language-jsx"}>{props.code}</code>
          </pre>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Result:</h2>
          <p className={styles.response}>{props.result}</p>
        </div>
      </div>
    </>
  );
}

export default Examples;
