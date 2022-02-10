import React, { useState } from "react";
import "./App.css";
//Components
import Card from "./Components/Card/Card";
//Images
import Avatar from "./Images/image-jeremy.png";
//Data
import data from "./data.json";

function App() {
  // set the desired timeframe and send it to the card component
  const [timeframe, setTimeframe] = useState("Weekly");

  const navigation = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="App">
      <header>
        <div id="user">
          <img src={Avatar} alt="Menu" width="78" height="78" />
          <div>
            <h2>Report for</h2>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <nav id="timeframes">
          {navigation.map((name) => (
            <button
              onClick={() => {
                setTimeframe(name);
              }}
            >
              {name}
            </button>
          ))}
        </nav>
      </header>
      {data &&
        data.map((card) => (
          <Card
            title={card.title}
            timeframe={timeframe}
            timeframes={card.timeframes}
            key={card.title}
          />
        ))}
    </div>
  );
}

export default App;
