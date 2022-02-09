import React from "react";
import "./Card.css";

//Images
import IconWork from "../../Images/icon-work.svg";
import IconExercise from "../../Images/icon-exercise.svg";
import IconPlay from "../../Images/icon-play.svg";
import IconSelfCare from "../../Images/icon-self-care.svg";
import IconSocial from "../../Images/icon-social.svg";
import IconStudy from "../../Images/icon-study.svg";

function CardIcon(props) {
  return (
    <>
      {props.title === "Work" ? (
        <img src={IconWork} alt={props.title} width="78" height="78" />
      ) : null}
      {props.title === "Exercise" ? (
        <img src={IconExercise} alt={props.title} width="78" height="78" />
      ) : null}
      {props.title === "Play" ? (
        <img src={IconPlay} alt={props.title} width="78" height="78" />
      ) : null}
      {props.title === "Self Care" ? (
        <img src={IconSelfCare} alt={props.title} width="78" height="78" />
      ) : null}
      {props.title === "Social" ? (
        <img src={IconSocial} alt={props.title} width="78" height="78" />
      ) : null}
      {props.title === "Study" ? (
        <img src={IconStudy} alt={props.title} width="78" height="78" />
      ) : null}
    </>
  );
}

export default CardIcon;
