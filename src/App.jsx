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

  // possible banner colors
  const styles = [
    { title: "Work", color: "hsl(15, 100%, 70%)" },
    { title: "Play", color: "hsl(195, 74%, 62%)" },
    { title: "Study", color: "hsl(348, 100%, 68%)" },
    { title: "Exercise", color: "hsl(145, 58%, 55%)" },
    { title: "Social", color: "hsl(264, 64%, 52%)" },
    { title: "Self Care", color: "hsl(43, 84%, 65%)" },
  ];

  // 1. get the corresponding items from data and styles
  // 2. if the title matches, push them together into activities
  // (objects have to have the same amount of items)
  let activities = [];
  const keys = Object.keys(data);

  keys.forEach((key) => {
    if (data[key].title === styles[key].title) {
      activities.push({
        title: data[key].title,
        timeframes: data[key].timeframes,
        color: styles[key].color,
      });
    }
  });

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
      {activities ? (
        activities.map((card) => (
          <Card
            title={card.title}
            color={card.color}
            timeframe={timeframe}
            timeframes={card.timeframes}
            key={card.title}
          />
        ))
      ) : (
        <p>Error: Data could not be fetched!</p>
      )}
    </div>
  );
}

export default App;
