import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);

  return (
    <div className="App">
      <h1>Github Commit History</h1>
      <select>
        {branches.map(({ name }, i) => (
          <option key={i} value={name}>{name}</option>
        ))}
      </select>
      {commits.map((commit: any, i) => (
        <li key={i}> {commit.message} </li>
      ))}
    </div>
  );
}

export default App;
