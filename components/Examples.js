import styles from ".//Examples.module.css";

function Examples(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <pre>
            <code>{props.code}</code>
          </pre>
        </div>
        <div className={styles.right}>
          <h2>Results:</h2>
          <p>{props.result}</p>
        </div>
      </div>
    </>
  );
}

export default Examples;
