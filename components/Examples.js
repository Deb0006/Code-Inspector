import styles from ".//Examples.module.css";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-jsx.min";
function Examples(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // const createdAt = props.timestamp;
  // var date = new Date(createdAt.seconds * 1000).toLocaleDateString("en-US");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <pre className={styles.preTag}>
            <code className={"language-jsx"}>{props.code}</code>
          </pre>
          <style jsx>{`
            pre {
              overflow-x: auto;
              white-space: pre-wrap; /* Since CSS 2.1 */
              white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
              white-space: -pre-wrap; /* Opera 4-6 */
              white-space: -o-pre-wrap; /* Opera 7 */
              word-wrap: break-word;
            }
          `}</style>
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
