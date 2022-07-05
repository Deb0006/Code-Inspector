import styles from "../styles/Playground.module.css";
import { useRef, useState } from "react";

const Playground = () => {
  const input = useRef();
  const example = {
    exp: "function uniteUnique(arr1, arr2, arr3) {\nconst finalArray = [];\nfor (let i = 0; i < arguments.length; i++){\nconst arrayArguments = arguments[i];\nfor (let j = 0; j < arrayArguments.length; j++) {\nlet indexValue = arrayArguments[j];\nif (finalArray.indexOf(indexValue) < 0) {\nfinalArray.push(indexValue);     \n}  \n}\n}\nreturn finalArray;\n}",
    response:
      "takes in arguments in the form of arrays loops through each array loops through each item in the array if the item doesn't exist in the final array, add it return the final array",
  };

  let codeDescription = "";
  function submitHandler(event) {
    event.preventDefault();
    const enteredInput = input.current.value; //code input by user
    // displayCode();
    enteredInput === example.exp
      ? (codeDescription = example.response)
      : (codeDescription = "props with response from OPENAI");
    codeDescription =
      enteredInput === example.exp
        ? example.response
        : "props with response from OPENAI";
    console.log("input:", codeDescription);
  }

  function onClick() {
    console.log("button2 clicked!");
    input.current.value = example.exp;
    // console.log(example.exp);
  }
  const variable = "hola";
  // const codeDescription = "something";
  function displayCode() {}
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
            name="input"
            required
          />
        </label>

        <div className={styles.btnsContainer}>
          <button className={styles.btn}>Generate</button>
          <button className={styles.btn2} onClick={onClick} type="button">
            Try an example
          </button>
        </div>
        <div className={styles.display}>
          <a className={styles.response}>
            <b>this code does the following:</b>
            <br />
            <span>{codeDescription}</span>
          </a>
        </div>
      </form>
    </section>
  );
};

export default Playground;
