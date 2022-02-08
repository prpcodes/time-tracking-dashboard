import ellipsis from "./icon-ellipsis.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h2>Report for </h2>
          <h1>Jeremy Robson</h1>
          <div>Daily Weekly Monthly</div>
        </section>
      </header>
      <section>
        <h3>Work</h3>
        5hrs {/* <!-- daily --> */}
        Previous - 7hrs {/* <!-- daily --> */}
        32hrs {/* <!-- weekly --> */}
        Previous - 36hrs {/* <!-- weekly --> */}
        103hrs {/* <!-- monthly --> */}
        Previous - 128hrs {/* <!-- monthly --> */}
      </section>
      <footer>
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
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
