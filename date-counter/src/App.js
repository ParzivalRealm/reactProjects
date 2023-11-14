import { useState } from "react";
import "./App.css";

export default function App() {
  const counterConfig = [
    { textToDisplay: "count", type: "step" },
    { textToDisplay: "step", type: "single" },
  ];
  const [stepCounter, setStepCounter] = useState(0);
  const [singleCounter, setSingleCounter] = useState(0);

  return (
    <div className="App">
      {counterConfig.map((config, index) => {
        return (
          <Counter
            key={index}
            text={config.textToDisplay}
            type={config.type}
            stepCounter={stepCounter}
            setStepCounter={setStepCounter}
            singleCounter={singleCounter}
            setSingleCounter={setSingleCounter}
          />
        );
      })}
    </div>
  );
}

function Counter({
  text,
  type,
  stepCounter,
  setStepCounter,
  singleCounter,
  setSingleCounter,
}) {
  function handleAddInputValue() {
    if (type === "single") {
      setSingleCounter((prev) => prev + stepCounter);
    } else {
      setStepCounter((prev) => prev + 1);
    }
  }

  function handleMinusInputValue() {
    if (type === "single") {
      setSingleCounter((prev) => prev - stepCounter);
    } else {
      setStepCounter((prev) => prev - 1);
    }
  }

  function getFutureDate(daysToAdd) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + parseInt(daysToAdd));
    return futureDate.toLocaleDateString();
  }

  function getMessage(singleCounter, stepCounter) {
    return `in ${
      singleCounter + stepCounter
    } days we will be at ${getFutureDate(singleCounter + stepCounter)}`;
  }

  const displayValue = type === "single" ? singleCounter : stepCounter;

  return (
    <>
      <div className="container">
        <button onClick={handleMinusInputValue}>-</button>
        <p>{`${text === "count" ? "Count" : "Steps"}: ${displayValue}`}</p>
        <button onClick={handleAddInputValue}>+</button>
      </div>

      <div className="container">
        <p>
          {text === "step"
            ? singleCounter >= 0
              ? getMessage(singleCounter, stepCounter)
              : `in ${
                  singleCounter + stepCounter
                } days we were at ${getFutureDate(singleCounter + stepCounter)}`
            : ""}
        </p>
      </div>
    </>
  );
}
