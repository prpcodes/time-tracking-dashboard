import "./Card.css";

//Images
import Ellipsis from "../../Images/icon-ellipsis.svg";
import IconWork from "../../Images/icon-work.svg";
import IconExercise from "../../Images/icon-exercise.svg";
import IconPlay from "../../Images/icon-play.svg";
import IconSelfCare from "../../Images/icon-self-care.svg";
import IconSocial from "../../Images/icon-social.svg";
import IconStudy from "../../Images/icon-study.svg";

function Card(props) {
  return (
    <section>
      <div id="banner">
        <img src={IconWork} alt="Work" width="78" height="78" />
      </div>
      <div id="card">
        <div id="header">
          <h1>{props.title}</h1>
          <img src={Ellipsis} alt="Menu" />
        </div>
        <div id="body">
          <p id="time">{props.timeframes.daily.current}hrs</p>
          <p id="previous">Previous - {props.timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
