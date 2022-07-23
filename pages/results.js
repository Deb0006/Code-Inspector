import data from "./codedata.js";
import Examples from "../components/Examples";
import { useState, useEffect } from "react";
import { db } from "./api/firebase-config.js";
import { collection, getDocs, addDocs, doc } from "firebase/firestore";

const Results = () => {
  const [examples, setExamples] = useState([]);
  const examplesCollectionRef = collection(db, "examples");
  const cards = data.map((item) => {
    return <Examples key={item.id} code={item.code} result={item.result} />;
  });

  useEffect(() => {
    const getExamples = async () => {
      const data = await getDocs(examplesCollectionRef);
      setExamples(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getExamples();
    // console.log("*", examples);
  }, []);
  const datafromserver = examples.map((item) => {
    return (
      <div>
        <h1>result: {item.result}</h1>
      </div>
    );
  });
  return (
    <>
      <h1>Examples</h1>
      <p>These code descriptions were generated in this website:</p>
      {cards}
      {datafromserver}
    </>
  );
};

export default Results;
