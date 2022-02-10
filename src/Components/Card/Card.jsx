import React from "react";
import "./Card.css";

//Components
import CardIcon from "./CardIcon";
import CardBody from "./CardBody";

function Card(props) {
  let styles = {};
  switch (props.title) {
    case "Work":
      styles.backgroundColor = "hsl(15, 100%, 70%)";
      break;
    case "Play":
      styles.backgroundColor = "hsl(195, 74%, 62%)";
      break;
    case "Study":
      styles.backgroundColor = "hsl(348, 100%, 68%)";
      break;
    case "Exercise":
      styles.backgroundColor = "hsl(145, 58%, 55%)";
      break;
    case "Social":
      styles.backgroundColor = "hsl(264, 64%, 52%)";
      break;
    default:
      // Self Care
      styles.backgroundColor = "hsl(43, 84%, 65%)";
      break;
  }

  return (
    <section style={styles}>
      <div id="banner">
        <CardIcon title={props.title} />
      </div>
      <div id="card">
        <div id="header">
          <h1>{props.title}</h1>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
          </svg>
        </div>
        <CardBody timeframe={props.timeframe} timeframes={props.timeframes} />
      </div>
    </section>
  );
}

export default Card;
