import React, { useState, useEffect } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);

  // Set page title
  useEffect(() => {
    document.title = "GitHub User Search";
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const query = `${username}+location:${location}+repos:>=${minRepos}`;

      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );

      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          GitHub User Search
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Username */}
          <div>
            <label className="block mb-2 font-bold text-gray-900">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-bold text-gray-900">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g., Lagos"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Minimum Repositories */}
          <div>
            <label className="block mb-2 font-bold text-gray-900">
              Minimum Repositories
            </label>
            <input
              type="number"
              placeholder="e.g., 10"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl"
          >
            Search
          </button>
        </form>

        {/* Conditional rendering using && */}
        {users.length > 0 && (
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl shadow"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-semibold">{user.login}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;