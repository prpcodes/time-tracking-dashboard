import React, { useState, useEffect } from "react";
import "./App.css";
//Components
import Card from "./Components/Card/Card";
//Images
import Avatar from "./Images/image-jeremy.png";

function App() {
  // set the data used for title and timeframes
  const [data, setData] = useState({});
  // set the desired timeframe
  const [timeframe, setTimeframe] = useState("Weekly");
  // adds "active" class to the currently selected button
  const [activeButton, setActiveButton] = useState("Weekly");

  // fetch Data from API (local)
  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        const jsonResponse = res.json();
        return jsonResponse;
      })
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // available timeframes
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
  // (both objects must have the same amount of items)
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
              key={name}
              className={name === activeButton ? "active" : ""}
              onClick={() => {
                setTimeframe(name);
                setActiveButton(name);
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
