function CardBody(props) {
  return (
    <>
      {props.timeframe === "Daily" ? (
        <div id="body">
          <p id="time">{props.timeframes.daily.current}hrs</p>
          <p id="previous">Yesterday - {props.timeframes.daily.previous}hrs</p>
        </div>
      ) : null}
      {props.timeframe === "Weekly" ? (
        <div id="body">
          <p id="time">{props.timeframes.weekly.current}hrs</p>
          <p id="previous">Last Week - {props.timeframes.weekly.previous}hrs</p>
        </div>
      ) : null}
      {props.timeframe === "Monthly" ? (
        <div id="body">
          <p id="time">{props.timeframes.monthly.current}hrs</p>
          <p id="previous">
            Last Month - {props.timeframes.monthly.previous}hrs
          </p>
        </div>
      ) : null}
    </>
  );
}

export default CardBody;
