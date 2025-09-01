// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center gap-6 shadow-md">
      <Link to="/" className="hover:text-yellow-400 transition">Clock</Link>
      <Link to="/stopwatch" className="hover:text-yellow-400 transition">Stopwatch</Link>
      <Link to="/timer" className="hover:text-yellow-400 transition">Timer</Link>
    </nav>
  );
}

export default Navbar;
