import { useState } from "react";

const messages = ["Hola 1", "Hola 2", "Valeria ya llego"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      // these lines are to exemplify how it's a good practice to set the state using a callback function instead of assigning it,
      // the reason is because if you assign it, the state on scope is going to be the same, so without call back step would be 1, and on next setStep
      // instruction it would be on 1 again, but with callback function each time the funtion it is executed it fetches the last state.
      // last setStep commented for project functionality purposes.
      setStep((s) => s + 1);
      //setStep((s) => s + 1);
    }
  }
  //return a react fragment cause we want 2 elements, the button and the other big element returned from javascript mode
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#FFF" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#FFF" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
