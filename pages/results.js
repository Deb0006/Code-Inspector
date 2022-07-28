import data from "./codedata.js";
import Examples from "../components/Examples";
import { useState, useEffect } from "react";
import { db } from "./api/firebase-config.js";
import { collection, getDocs, addDocs, doc } from "firebase/firestore";
import styles from "../styles/Results.module.css";

const Results = () => {
  const [examples, setExamples] = useState([]);

  const datafromserver = examples.map((item) => {
    return <Examples key={item.id} code={item.code} result={item.result} />;
  });

  useEffect(() => {
    async function getExamples() {
      const response = await fetch("/api/firebase-config");
      const data = await response.json();
      setExamples(data);
      // setExamples(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getExamples();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Examples</h1>
      <p className={styles.description}>
        These code descriptions were generated in this website:
      </p>
      {datafromserver}
    </>
  );
};

export default Results;
