import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (timeRef.current !== null) {
      return;
    }

    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  }

  const stopTimer = () => {
    clearInterval(timeRef.current)
    timeRef.current = null;
  };

  const resetTime = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime(0);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-8">Stopwatch</h1>
        <div className="bg-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-5xl font-bold text-white tracking-widest">
            {formatTime(time)}
          </h2>
        </div>

        <div className="flex justify-center gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold" onClick={startTimer}>
            Start
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold" onClick={stopTimer}>
            Stop
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold" onClick={resetTime}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
