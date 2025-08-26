export default function Navbar({ setPage, current }) {
  const tabs = [
    { key: "clock", label: "Clock" },
    { key: "stopwatch", label: "Stopwatch" },
    { key: "timer", label: "Timer" },
  ];

  return (
    <nav className="flex space-x-6 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-lg mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setPage(tab.key)}
          className={`uppercase tracking-wide font-semibold transition-all ${
            current === tab.key
              ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
