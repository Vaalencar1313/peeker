import logo from "./logo.svg";
import "./App.css";

import { fetchReels, fetchUserStories } from "./api/api";

function App() {
  async function handleFetchUserStories(passedUsername) {
    try {
      const userStories = await fetchUserStories(passedUsername);
      console.log(userStories);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleFetchReels(passedHashtag) {
    try {
      const reels = await fetchReels(passedHashtag);
      console.log(reels);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleFetchUserStories("warhammerofficial")}>
          Fetch User Stories
        </button>
        <button onClick={() => handleFetchReels("winter")}>Fetch Reels</button>
      </header>
    </div>
  );
}

export default App;
