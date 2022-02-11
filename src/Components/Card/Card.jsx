import React from "react";
import "./Card.css";

//Components
import CardIcon from "./CardIcon";
import CardBody from "./CardBody";

function Card(props) {
  return (
    <section style={{ backgroundColor: props.color }}>
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
