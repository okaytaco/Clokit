import { useState, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(60); // default 60s
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running && time > 0) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            alert("Time’s up! ⏰");
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(60); // reset to default
  };

  const formatTime = (s) => {
    const minutes = String(Math.floor(s / 60)).padStart(2, "0");
    const seconds = String(s % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 to-blue-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Timer</h1>
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
