import React from "react";
import "./Card.css";

//Images
import Ellipsis from "../../Images/icon-ellipsis.svg";

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
    case "Self Care":
      styles.backgroundColor = "hsl(43, 84%, 65%)";
      break;
    default:
      break;
  }
  return (
    <section>
      <div id="banner" style={styles}>
        <CardIcon title={props.title} />
      </div>
      <div id="card">
        <div id="header">
          <h1>{props.title}</h1>
          <img src={Ellipsis} alt="Menu" />
        </div>
        <CardBody timeframe={props.timeframe} timeframes={props.timeframes} />
      </div>
    </section>
  );
}

export default Card;
