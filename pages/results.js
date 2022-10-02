import Examples from "../components/Examples";
import { useState, useEffect } from "react";
import styles from "../styles/Results.module.css";

const Results = () => {
  const [examples, setExamples] = useState([]);
  const datafromserver = examples.map((item) => {
    return (
      <Examples
        key={item.id}
        code={item.code}
        result={item.result}
        timestamp={item.timestamp}
      />
    );
  });

  useEffect(() => {
    async function getExamples() {
      const response = await fetch("/api/firebase-config");
      const data = await response.json();
      setExamples(data);
    }
    getExamples();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Examples</h1>
      <p className={styles.description}>
        These are code descriptions were generated in this website:
      </p>
      {datafromserver}
    </div>
  );
};

export default Results;
