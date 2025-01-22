export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Blog
        </h1>
        <p className="text-gray-700 mb-6">
          Discover amazing stories, insights, and more.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="/register"
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          >
            Register
          </a>
          <a
            href="/login"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
