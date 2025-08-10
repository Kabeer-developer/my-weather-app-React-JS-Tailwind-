// App.jsx
import { useState } from "react";
import "./output.css"; // Make sure Tailwind's compiled CSS is imported

function App() {
  // Declare a state variable 'count' and a function to update it
  const [count, setCount] = useState(0);

  // Increment counter
  const increment = () => setCount(count + 1);

  // Decrement counter
  const decrement = () => setCount(count - 1);

  // Reset counter to zero
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Counter App</h1>

      {/* Display count */}
      <div className="text-6xl font-mono text-blue-600 mb-6">{count}</div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
