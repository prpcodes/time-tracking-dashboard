import Ellipsis from "../../Images/icon-ellipsis.svg";

import "./Card.css";

function Card(props) {
  return (
    <>
      <div>
        <div>
          <h2>{props.title}</h2>
          <img src={Ellipsis} alt="Menu" />
        </div>
        <div>
          <h1>{props.timeframes.daily.current}hrs</h1>
          <h2>Previous - {props.timeframes.daily.previous}hrs</h2>
        </div>
      </div>
    </>
  );
}

export default Card;
