import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  // state to store the value of form input 1
  const [stringOne, setStringOne] = useState("");
  // state to store the value of form input 2
  const [stringTwo, setStringTwo] = useState("");
  // state to store the result of the anagram check
  const [result, setResult] = useState(false);

  const firstInputSelect = useRef()
  useEffect(() => {
    console.log(firstInputSelect.current.focus())
  }, [])

  /**
   * removePunctuationsAndSpaces takes a string and removes any punctuation and spaces in it.
   * @param {string} string - The input string.
   * @returns {string} The processed string without punctuations and spaces.
   */
  const removePunctuationsAndSpaces = (string) => {
    return string.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  };

  /**
   * checkAnagram takes two inputs and checks whether they are anagrams or not.
   * @param {string} [checkStringOne=stringOne] - A optional string param for the first input. Default value is the value of stringOne state.
   * @param {string} [checkStringTwo=stringTwo] - A optional string param for the second input. Default value is the value of stringTwo state.
   * @returns {boolean} True if the two inputs are anagrams, False otherwise.
   */
  const checkAnagram = (
    checkStringOne = stringOne,
    checkStringTwo = stringTwo
  ) => {

    // create two hash tables to store the character count of each input string
    const stringOneHash = {};
    const stringTwoHash = {};

    // remove punctuations and spaces from both inputs
    checkStringOne = removePunctuationsAndSpaces(checkStringOne);
    checkStringTwo = removePunctuationsAndSpaces(checkStringTwo);

    // check if both inputs have a length and if they have the same length
    if (checkStringOne.length && checkStringTwo.length) {
      if (checkStringOne.length != checkStringTwo.length) {

        // set the result state to false and return false if the inputs have different length
        setResult(false);
        return false;
      }

      // convert both inputs to lowercase and store their length
      checkStringOne = checkStringOne.toLowerCase();
      checkStringTwo = checkStringTwo.toLowerCase();
      const stringLength = checkStringOne.length;

      // fill up the hash tables with the character count of each input
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

      // check if the character count of both hash tables are the same
      let checkAnagram = true;
      for (let key in stringOneHash) {
        if (stringOneHash[key] != stringTwoHash[key]) {
          checkAnagram = false;
          break;
        }
      }
      // set the result state to checkAnagram Value and return it
      setResult(checkAnagram);
      return checkAnagram;
    }
  };

  return (
    <div className="App">
      <div>
        <span>First String: </span>
        <input
          type="text"
          name="stringOne"
          onChange={(e) =>
            setStringOne((preValue) => (preValue = e.target.value))
          }
          value={stringOne}
          ref={firstInputSelect}
        />
        <br/>
        <span>Second String: </span>
        <input
          type="text"
          name="stringTwo"
          onChange={(e) =>
            setStringTwo((preValue) => (preValue = e.target.value))
          }
          value={stringTwo}
        />
        <br />
        <button onClick={() => checkAnagram(stringOne, stringTwo)}>Check</button>
        <div>{result ? "TRUE" : "FALSE"}</div>
      </div>
    </div>
  );
}

export default App;
