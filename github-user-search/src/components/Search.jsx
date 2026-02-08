import { useState } from "react";
import "./Search.css"; 

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
   
    console.log({ username, location, minRepos });
  };

  return (
    <div className="container">
      <div className="search-card">
        <h1>GitHub User Search</h1>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              placeholder="GitHub username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={location}
              placeholder="e.g., Lagos"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Minimum Repositories</label>
            <input
              type="number"
              value={minRepos}
              placeholder="e.g., 10"
              onChange={(e) => setMinRepos(e.target.value)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
