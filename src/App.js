import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [stringOne, setStringOne] = useState("");
  const [stringTwo, setStringTwo] = useState("");
  const resut = useState(false);
  const removePunctuationsAndSpaces = (string) => {
    return string.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  };
  const checkAnagram = () => {
    const hashCheck = {};
    let checkStringOne = removePunctuationsAndSpaces(stringOne);
    let checkStringTwo = removePunctuationsAndSpaces(stringTwo);
    console.log(checkStringOne, checkStringTwo);
    if (checkStringOne.length && checkStringTwo.length) {
      if (checkStringOne.length != checkStringTwo.length) {
        return;
      }
      checkStringOne = checkStringOne.toLowerCase();
      checkStringTwo = checkStringTwo.toLowerCase();
      const stringLength = checkStringOne.length;
      for (let i = 0; i < stringLength; i++) {
        if (!(checkStringOne[i] in hashCheck)) {
          hashCheck[checkStringOne[i]] = 1;
        } else {
          console.log("test 1", hashCheck[checkStringTwo[i]]);
          hashCheck[checkStringOne[i]] = hashCheck[checkStringOne[i]] + 1;
        }
      }
      for (let i = 0; i < stringLength; i++) {
        console.log((hashCheck[checkStringTwo[i]] += 1));
      }
      console.log(hashCheck);
      let result = true;
      for (let i = 0; i < stringLength; i++) {
        console.log(hashCheck[checkStringOne[i]] % 2)
        if (hashCheck[checkStringOne[i]] % 2 != 0) {
          result = false;
          break;
        }
      }
      console.log(result);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="stringOne"
          onChange={(e) =>
            setStringOne((preValue) => (preValue = e.target.value))
          }
          value={stringOne}
        />
        <input
          type="text"
          name="stringTwo"
          onChange={(e) =>
            setStringTwo((preValue) => (preValue = e.target.value))
          }
          value={stringTwo}
        />
        <button onClick={checkAnagram}>Check</button>
        <div></div>
      </div>
    </div>
  );
}

export default App;
