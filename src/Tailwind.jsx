function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tailwind is Working 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          If you see colors, spacing, and rounded corners, your setup is 🔥
        </p>

        <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
