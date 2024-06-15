import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // Convert the input string to evaluable expressions
      const evalInput = input
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/√/g, "Math.sqrt")
        .replace(/inv/g, "1/")
        .replace(/π/g, "Math.PI")
        .replace(/deg/g, "* (Math.PI / 180)")
        // .replace(/avg/g, "average")
        .replace(/pow/g, "Math.pow");

      // Define an average function
      const average = (...args) =>
        args.reduce((a, b) => a + b, 0) / args.length;
      const result = eval(evalInput);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Scientific calculator by Asdesach 👨🏿‍💻</h1>
        <input type="text" value={input} readOnly />
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>←</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={handleCalculate}>
            =
          </button>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>
          <button onClick={() => handleClick("sin(")}>sin</button>
          <button onClick={() => handleClick("cos(")}>cos</button>
          <button onClick={() => handleClick("tan(")}>tan</button>
          <button onClick={() => handleClick("log(")}>log</button>
          <button onClick={() => handleClick("ln(")}>ln</button>
          <button onClick={() => handleClick("√(")}>√</button>
          <button onClick={() => handleClick("inv(")}>1/x</button>
          <button onClick={() => handleClick("π")}>π</button>
          {/* <button onClick={() => handleClick("avg(")}>avg</button> */}
          <button onClick={() => handleClick("pow(")}>pow</button>
          <button onClick={() => handleClick("deg")}>deg</button>
          <button onClick={() => handleClick("rad")}>rad</button>
        </div>
      </div>
    </div>
  );
}

export default App;
