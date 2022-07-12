import styles from ".//Playground.module.css";
import { useRef, useState } from "react";

const Playground = () => {
  const input = useRef();
  const [output, setoutput] = useState("");
  const example = {
    exp: "for (let i = 0; i < arr.length; i++) {\n      let removeElement = false;\n      for (let j = 0; j < valsToRemove.length; j++) {\n        if (arr[i] === valsToRemove[j]) {\n          removeElement = true;\n        }\n      }\n      if (!removeElement) {\n        filteredArray.push(arr[i]);\n      }\n    }",
    response:
      "The previous code is written in JavaScript. It takes in an array and an array of values to remove from the original array. It then loops through the original array and checks if each element is in the array of values to remove. If it is not, it adds it to the filtered array. Finally, it returns the filtered array.",
  };

  function submitHandler(event) {
    event.preventDefault();
    const enteredInput = input.current.value; //code input by user
    console.log(enteredInput);
    generateDescription(enteredInput);
  }

  async function generateDescription(entered) {
    console.log(entered);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: entered }),
    });

    const data = await response.json();
    console.log(data.result);
    setoutput(data.result);
    // setAnimalInput("");

    // setoutput((prev) => {
    //   return (output =
    //     enteredInput === example.exp
    //       ? example.response
    //       : data.result);
    // })
  }

  function onClick() {
    console.log("button2 clicked!");
    input.current.value = example.exp;
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
            name="input"
            ref={input}
            className={styles.input}
            placeholder={"Your code..."}
            spellcheck="false"
            required
          />
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
    </section>
  );
};

export default Playground;
