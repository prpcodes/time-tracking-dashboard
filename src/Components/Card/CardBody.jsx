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
