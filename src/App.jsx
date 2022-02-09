import React from "react";
import "./App.css";
//Components
import Card from "./Components/Card/Card";
//Images
import Avatar from "./Images/image-jeremy.png";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
            <img src={Avatar} alt="Menu" />
            <h2>Report for</h2>
            <h1>Jeremy Robson</h1>
            <div>Daily Weekly Monthly</div>
          </section>
        </header>
        <Card background="" title="Work" time="5" time_previous="7" />
        <footer>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/prpwien/time-tracking-dashboard">
              Philipp Proksch
            </a>
            .
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
