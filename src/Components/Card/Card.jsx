import React from "react";
import "./Card.css";

//Images
import Ellipsis from "../../Images/icon-ellipsis.svg";

//Components
import CardIcon from "./CardIcon";
import CardBody from "./CardBody";

function Card(props) {
  return (
    <section>
      <div id="banner">
        <CardIcon title={this.props.title} />
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
