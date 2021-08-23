import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    repository: 'daniel-hcn/github-commit-history-server',
    branch: 'master',
  });
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);

  const getBranches = async (): Promise<void> => {
    const response = await axios.get(`/github/repository/${encodeURIComponent(state.repository)}/branches`);
    setBranches(response.data);
  };

  const getCommits = async (): Promise<void> => {
    const response = await axios.get(`/github/repository/${encodeURIComponent(state.repository)}/commits?branchName=${state.branch}`);
    setCommits(response.data);
  };

  const handleChange = (attrName: string, selectedOption: string) => {
    setState({ ...state, [attrName]: selectedOption });
  };

  return (
    <div className="App">
      <h1>Github Commit History</h1>

      <select onChange={(e) => handleChange('repository', e.currentTarget.value)}>
        <option value='daniel-hcn/github-commit-history-server'>daniel-hcn/github-commit-history-server</option>
        <option value='daniel-hcn/github-commit-history-client'>daniel-hcn/github-commit-history-client</option>
      </select>
      <button onClick={() => getBranches()}>Get Branches</button>

      <select onChange={(e) => handleChange('branch', e.currentTarget.value)}>
        {branches.map(({ name }, i) => (
          <option key={i} value={name}>{name}</option>
        ))}
      </select>
      <button onClick={() => getCommits()}>Get Commits</button>

      {commits.map((commit: any, i) => (
        <li key={i}> {commit.message} </li>
      ))}
    </div>
  );
}

export default App;
