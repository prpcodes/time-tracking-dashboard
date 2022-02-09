import React from "react";
import "./App.css";
//Components
import Card from "./Components/Card/Card";
//Images
import Avatar from "./Images/image-jeremy.png";
//Data
import data from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="user">
            <img src={Avatar} alt="Menu" width="78" height="78" />
            <h2>Report for</h2>
            <h1 id="name">Jeremy Robson</h1>
          </div>
          <div id="timeframes">
            <a>Daily</a>
            <a>Weekly</a>
            <a>Monthly</a>
          </div>
        </header>
        {data &&
          data.map((card) => (
            <Card
              background=""
              title={card.title}
              timeframes={card.timeframes}
              key={card.title}
            />
          ))}
      </div>
    );
  }
}

export default App;
