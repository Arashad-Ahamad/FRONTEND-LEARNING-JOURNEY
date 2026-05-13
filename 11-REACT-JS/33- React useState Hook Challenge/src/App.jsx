import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);
  const handleReset = () => setCount(0);

  return (
    <div className="container state-container">
      <p>
        Count:
        <span>{count}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="grid-three-cols">
        <button onClick={handleIncrement} disabled={count >= 100} >Increment</button>
        <button onClick={handleDecrement}  disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
