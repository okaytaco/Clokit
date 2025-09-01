import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clock from "./pages/Clock";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
