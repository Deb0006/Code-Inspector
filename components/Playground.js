import styles from ".//Playground.module.css";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import { db } from "../pages/api/firebase-config";
import { collection, addDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Playground = () => {
  const [output, setoutput] = useState("");
  const [codeInput, setInput] = useState("");
  const resultsCollectionRef = collection(db, "examples");
  const example = {
    exp: "for (let i = 0; i < arr.length; i++) {\n      let removeElement = false;\n      for (let j = 0; j < valsToRemove.length; j++) {\n        if (arr[i] === valsToRemove[j]) {\n          removeElement = true;\n        }\n      }\n      if (!removeElement) {\n        filteredArray.push(arr[i]);\n      }\n    }",
    response:
      "The previous code is written in JavaScript. It takes in an array and an array of values to remove from the original array. It then loops through the original array and checks if each element is in the array of values to remove. If it is not, it adds it to the filtered array. Finally, it returns the filtered array.",
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [codeInput, submitHandler]);

  function submitHandler(event) {
    event.preventDefault();
    const enteredInput = codeInput;
    generateDescription(enteredInput);
  }
  async function generateDescription(enteredCode) {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: enteredCode }),
    });
    const data = await response.json();
    setoutput(data.result);

    createResult(enteredCode, data.result);
  }
  async function createResult(enteredCode, response) {
    await addDoc(resultsCollectionRef, { code: enteredCode, result: response });
  }
  //createdaT: serverTimestamp()

  function onClick() {
    setInput(() => example.exp);
  }
  function handleChange(event) {
    setInput(() => (event.target.name = event.target.value));
  }

  return (
    <>
      <h2 className={styles.title}>
        Get a simple explanation of a piece of code
      </h2>

      <form className={styles.form} onSubmit={submitHandler}>
        <label>
          Type code here to generate a description:
          <div className={styles.codeContainer}>
            <pre id="editor" className={[styles.editor]}>
              <code className={"language-javascript"} id="editor-code">
                {codeInput}
              </code>
              <textarea
                type="text"
                className={styles.editorContent}
                name="codeInput"
                value={codeInput}
                onChange={handleChange}
                placeholder={"//... your code"}
                spellCheck="false"
                maxLength="500"
                required
              />
            </pre>
          </div>
        </label>

        <div className={styles.btnsContainer}>
          <button className={styles.btn}>Generate</button>
          <button className={styles.btn2} onClick={onClick} type="button">
            Try an example
          </button>
        </div>
        <h3>Result</h3>
        <div className={styles.display}>
          <a className={styles.response}>
            <span>{output}</span>
          </a>
        </div>
      </form>
    </>
  );
};

export default Playground;
