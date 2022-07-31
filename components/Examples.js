import styles from ".//Examples.module.css";
import { useState, useEffect } from "react";

function Examples(props) {
  const createdAt = props.timestamp;
  var date = new Date(createdAt.seconds * 1000).toLocaleDateString("en-US");

  // console.log(date);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <pre>
            <code>{props.code}</code>
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
          <h2 className={styles.title}>Results:</h2>
          <p className={styles.response}>{props.result}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}

export default Examples;
