//Images
import Ellipsis from "../../Images/icon-ellipsis.svg";
import IconWork from "../../Images/icon-work.svg";
import IconExercise from "../../Images/icon-exercise.svg";
import IconPlay from "../../Images/icon-play.svg";
import IconSelfCare from "../../Images/icon-self-care.svg";
import IconSocial from "../../Images/icon-social.svg";
import IconStudy from "../../Images/icon-study.svg";

function CardBody(props) {
  return (
    <>
      {props.timeframe === "Daily" ? (
        <div id="body">
          <p id="time">{props.timeframes.daily.current}hrs</p>
          <p id="previous">Previous - {props.timeframes.daily.previous}hrs</p>
        </div>
      ) : null}
      {props.timeframe === "Weekly" ? (
        <div id="body">
          <p id="time">{props.timeframes.weekly.current}hrs</p>
          <p id="previous">Previous - {props.timeframes.weekly.previous}hrs</p>
        </div>
      ) : null}
      {props.timeframe === "Monthly" ? (
        <div id="body">
          <p id="time">{props.timeframes.monthly.current}hrs</p>
          <p id="previous">Previous - {props.timeframes.monthly.previous}hrs</p>
        </div>
      ) : null}
    </>
  );
}

export default CardBody;
