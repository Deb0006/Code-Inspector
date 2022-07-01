import styles from "../styles/Playground.module.css";
import { useRef, useState } from "react";

const Playground = () => {
  const input = useRef();
  const example = useRef(
    "function uniteUnique(arr1, arr2, arr3) {\nconst finalArray = [];\nfor (let i = 0; i < arguments.length; i++){\nconst arrayArguments = arguments[i];\nfor (let j = 0; j < arrayArguments.length; j++) {\nlet indexValue = arrayArguments[j];\nif (finalArray.indexOf(indexValue) < 0) {\nfinalArray.push(indexValue);     \n}  \n}\n}\nreturn finalArray;\n}"
  );

  function submitHandler(event) {
    event.preventDefault();
    const enteredInput = input.current.value;
    console.log(enteredInput);
  }

  function onClick() {
    console.log("button clicked!");
    input.current.value = example.current;
  }

  return (
    <section className={styles.playground}>
      <h2 className={styles.title}>
        Get a simple explanation of a piece of code
      </h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>
          Type code here to generate an explanation:
          <textarea
            type="text"
            id="input"
            ref={input}
            className={styles.input}
            placeholder={"Your code..."}
          />
        </label>

        <div className={styles.btnsContainer}>
          <button className={styles.btn}>Generate</button>
          <button className={[styles.btn2]} onClick={onClick}>
            Try an example
          </button>
        </div>
        <div className={styles.display}>
          <a className={styles.response}>
            <b>this code does the following:</b>
            {"\n"} takes in arguments in the form of arrays loops through each
            array loops through each item in the array if the item doesn't exist
            in the final array, add it return the final array
          </a>
        </div>
      </form>
    </section>
  );
};

export default Playground;
