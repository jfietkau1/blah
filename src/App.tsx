import React from "react";
import logo from "./logo.svg";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {welcomebanner()}
        {introduction()}
        <TeamList></TeamList>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function welcomebanner() {
  return <h1>Welcome to March Madness!!</h1>;
}
function introduction() {
  return (
    <h3>
      This Website shows some information about all teams participating in March
      madness
    </h3>
  );
}
function TeamList() {
  return (
    <div>
      <h1>College Basketball Teams</h1>
      <ul>
        {teamData.teams.map((team) => (
          <li key={team.tid}>
            {team.school} {team.name} - {team.city}, {team.state}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
