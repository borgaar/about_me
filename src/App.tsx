import { useState } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-start">
      <span>Hello, world!</span>
      <span>Counter value: {counter}</span>
      <button className="px-0" onClick={() => setCounter(counter + 1)}>
        Increase counter
      </button>
    </div>
  );
}
