import { useState } from "react";
import "./App.css";

const arr = [
  "AC",
  "/",
  "X",
  "9",
  "8",
  "7",
  "-",
  "6",
  "5",
  "4",
  "+",
  "3",
  "2",
  "1",
  "=",
  "0",
  ".",
];

const App = () => {
  const [Type1, onType1] = useState(0);
  const [Type2, onType2] = useState(0);
  const [Fur, onFur] = useState("");
  const [Opt, onOpt] = useState("");

  const magic = (input: string) => {
    if (input == "AC") {
      onFur("");
      onType1(0);
      onType2(0);
      onOpt("");
    } else {
      onFur(Fur + input);
      if (input == "+" || "-" || "X" || "/") {
        onOpt(input);
      }
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="formula">
            <h1> {Fur} </h1>
          </div>
          <div className="typed"></div>
        </div>
        <div className="keypad">
          {arr.map((id) => (
            <button
              onClick={() => magic(id)}
              key={id}
              id={id}
              className={`item-${id != "=" ? id : "equal"}`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
