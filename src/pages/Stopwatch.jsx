import { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <h1 className="text-4xl font-bold mb-6">Stopwatch</h1>
      <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>
      <div className="space-x-4">
        <button onClick={start} className="px-6 py-2 bg-green-500 rounded-xl hover:bg-green-600">
          Start
        </button>
        <button onClick={stop} className="px-6 py-2 bg-red-500 rounded-xl hover:bg-red-600">
          Stop
        </button>
        <button onClick={reset} className="px-6 py-2 bg-yellow-500 rounded-xl hover:bg-yellow-600">
          Reset
        </button>
      </div>
    </div>
  );
}
