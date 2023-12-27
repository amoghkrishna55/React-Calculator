import { useState } from "react";
import "./App.css";
import Developed from "./Developed";

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
let end = false;
const App = () => {
  const [Type1, onType1] = useState("");
  const [Type2, onType2] = useState("");
  const [Fur, onFur] = useState("");
  const [Opt, onOpt] = useState("");
  const [Res, onRes] = useState("0");

  const magic = (input: string) => {
    if (input == "AC") {
      onFur("");
      onType1("");
      onType2("");
      onOpt("");
      onRes("0");
      end = false;
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
      end = true;
      const a = parseInt(Type1);
      const b = parseInt(Type2);
      let result;
      if (Opt == "+") {
        result = a + b;
      } else if (Opt == "-") {
        result = a - b;
      } else if (Opt == "x") {
        result = a * b;
      } else if (Opt == "/") {
        result = a / b;
      }
      onRes(`${result}`);
      onFur(Type1 + Opt + Type2 + input + result);
    } else {
      if (input === "+" || input === "-" || input === "x" || input === "/") {
        if (end === true) {
          onType1(Res);
          onType2("");
          onOpt(input);
          onRes(input);
          onFur(Res + input);
          end = false;
        } else {
          if (Type1 == "") {
            onType1("0");
          }
          onOpt(input);
          onRes(input);
          onFur(Type1 + input);
        }
      } else {
        if (end === true) {
          onType1(input);
          onType2("");
          onOpt("");
          onRes(input);
          onFur(input);
          end = false;
        } else {
          if (Opt != "") {
            onType2(Type2 + input);
            onRes(Type2 + input);
            onFur(Fur + input);
          } else {
            onType1(Type1 + input);
            onRes(Type1 + input);
            onFur(Fur + input);
          }
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
          <div className="typed">
            <h1>{Res}</h1>
          </div>
        </div>
        <div className="keypad">
          {arr.map((id) => (
            <button
              onClick={() => magic(id)}
              key={id}
              id={id}
              className={`item-${
                id !== "+"
                  ? id !== "-"
                    ? id !== "/"
                      ? id !== "x"
                        ? id !== "="
                          ? id
                          : "equal"
                        : "multiply"
                      : "divide"
                    : "subtract"
                  : "add"
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      <Developed />
    </>
  );
};

export default App;
