function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">SociaLink 🚀</h1>
        <p className="text-gray-600 mb-6">
          Welcome to your new social platform! If you can see this styled
          beautifully, Tailwind CSS is working perfectly.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
            Get Started
          </button>

          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
          <p className="text-green-700 font-medium">
            ✅ Tailwind CSS is working!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
