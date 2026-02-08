// Search.jsx
import { useState, useEffect } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  // Set page title
  useEffect(() => {
    document.title = "GitHub User Search";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your search logic
    console.log({ username, location, minRepos });
  };
  return(

  <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">
      GitHub User Search
    </h1>

    <form className="space-y-5 text-left">
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block mb-2 font-bold text-gray-900"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="block mb-2 font-bold text-gray-900"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="e.g., Lagos"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Minimum Repositories */}
      <div>
        <label
          htmlFor="minRepos"
          className="block mb-2 font-bold text-gray-900"
        >
          Minimum Repositories
        </label>
        <input
          id="minRepos"
          type="number"
          placeholder="e.g., 10"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-base transition shadow-md hover:shadow-lg"
      >
        Search
      </button>
    </form>
  </div>
</div>
  );
}
export default Search;
