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
