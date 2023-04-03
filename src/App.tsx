import { useState } from "react";
import "./styles.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value: string) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="result">{result ? `(${result})` : ""}</div>
        <div className="current-operand">{calc || 0}</div>
      </div>
      <button
        onClick={() => {
          clearAll();
        }}
        className="span-two"
      >
        AC
      </button>
      <button onClick={() => deleteLast()}>DEL</button>
      <button onClick={() => updateCalc("/")}>/</button>
      <button onClick={() => updateCalc("1")}>1</button>
      <button onClick={() => updateCalc("2")}>2</button>
      <button onClick={() => updateCalc("3")}>3</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("4")}>4</button>
      <button onClick={() => updateCalc("5")}>5</button>
      <button onClick={() => updateCalc("6")}>6</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("7")}>7</button>
      <button onClick={() => updateCalc("8")}>8</button>
      <button onClick={() => updateCalc("9")}>9</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("0")}>0</button>
      <button className="span-two" onClick={() => calculate()}>
        =
      </button>
    </div>
  );
}

export default App;
