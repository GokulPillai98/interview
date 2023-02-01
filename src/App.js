import "./App.css";
import { useState } from "react";

function App() {

  const [stringOne, setStringOne] = useState(""); // form input 1 state 
  const [stringTwo, setStringTwo] = useState(""); // form input 2 state
  const [result, setResult] = useState(false); // result state
  
  /**
   * Remove Punctuations And Spaces
   * @param {*} string 
   * @returns {boolean}
   */
  const removePunctuationsAndSpaces = (string) => {
    return string.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  };


/**
 * checkAnagram takes two inputs and check whether both are anagrams or not.
 * @author Gokul
 * @param {string} [d=stringOne] - A optional string param
 * @param {string} [d=stringTwo] - A optional string param
 * @returns {boolean}
 */
  const checkAnagram = (checkStringOne = stringOne, checkStringTwo = stringTwo) => {

    const stringOneHash = {};
    const stringTwoHash = {};

    checkStringOne = removePunctuationsAndSpaces(checkStringOne);
    checkStringTwo = removePunctuationsAndSpaces(checkStringTwo);

    if (checkStringOne.length && checkStringTwo.length) { 
      if (checkStringOne.length != checkStringTwo.length) {
        setResult(false)
        return false;
      }
      checkStringOne = checkStringOne.toLowerCase();
      checkStringTwo = checkStringTwo.toLowerCase();
      const stringLength = checkStringOne.length;
      for (let i = 0; i < stringLength; i++) {
        if (!(checkStringOne[i] in stringOneHash)) {
          stringOneHash[checkStringOne[i]] = 1;
        } else {
          stringOneHash[checkStringOne[i]] += 1;
        }
        if (!(checkStringTwo[i] in stringTwoHash)) {
          stringTwoHash[checkStringTwo[i]] = 1;
        } else {
          stringTwoHash[checkStringTwo[i]] += 1;
        }
      }

      let checkAnagram = true;
      for (let key in stringOneHash) {
        if (stringOneHash[key] != stringTwoHash[key]) { 
          checkAnagram = false;
          break;
        }
      }
      setResult(checkAnagram)
    }
    return checkAnagram;
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
        <div>{result ? 'TRUE' : 'FALSE'}</div>
      </div>
    </div>
  );
}

export default App;