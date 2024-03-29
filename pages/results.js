import Examples from "../components/Examples";
import { useState, useEffect } from "react";
import styles from "../styles/Results.module.css";

const Results = () => {
  const [examples, setExamples] = useState([]);
  useEffect(() => {
    async function getExamples() {
      const response = await fetch("/api/firebase-config");
      const data = await response.json();
      setExamples(data);
    }
    getExamples();
  }, []);
  const datafromserver = examples.map((item) => {
    if (item.visible === true) {
      return (
        <Examples
          key={item.id}
          code={item.code}
          result={item.result}
          timestamp={item.timestamp}
        />
      );
    }
  });

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Examples</h1>
        <p className={styles.description}>
          Previous code descriptions generated in this website:
        </p>
        {datafromserver}
      </div>
    </>
  );
};

export default Results;
