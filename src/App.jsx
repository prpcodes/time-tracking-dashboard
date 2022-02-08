import Ellipsis from "./Images/icon-ellipsis.svg";
import Avatar from "./Images/image-jeremy.png";
import "./App.css";

function App() {
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
      <section>
        <div>
          <h2>Work</h2>
          <img src={Ellipsis} alt="Menu" />
        </div>
        <div>
          <h1>5hrs</h1>
          <h2>Previous - 7hrs</h2>
        </div>
      </section>
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

export default App;
