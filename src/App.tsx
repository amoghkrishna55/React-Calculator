import { useState } from "react";
import "./App.css";

const arr = [
  "AC",
  "/",
  "x",
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
  const [Type1, onType1] = useState("");
  const [Type2, onType2] = useState("");
  const [Fur, onFur] = useState("");
  const [Opt, onOpt] = useState("");
  const [Res, onRes] = useState("");

  const magic = (input: string) => {
    if (Res != "") {
      onFur(`${Res}`);
      onType1(`${Res}`);
      onType2("");
      onOpt("");
      onRes("");
    }
    if (input == "AC") {
      onFur("");
      onType1("");
      onType2("");
      onOpt("");
      onRes("");
    } else if (input == "=") {
      if (Type1 == "") {
        onType1("0");
      }
      if (Type2 == "") {
        onType2("0");
      }
      if (Opt == "") {
        onOpt("+");
      }
      const a = parseInt(Type1);
      const b = parseInt(Type2);
      if (Opt == "+") {
        onRes(`${a + b}`);
      } else if (Opt == "-") {
        onRes(`${a - b}`);
      } else if (Opt == "x") {
        onRes(`${a * b}`);
      } else if (Opt == "/") {
        onRes(`${a / b}`);
      }
    } else {
      if (input === "+" || input === "-" || input === "x" || input === "/") {
        onOpt(input);
      } else {
        if (Opt != "") {
          onType2(Type2 + input);
        } else {
          onType1(Type1 + input);
        }
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
          <div className="typed">{Res}</div>
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
