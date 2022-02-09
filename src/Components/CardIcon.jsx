import React from "react";
import "./Card.css";
//Components
import CardBody from "./CardBody";

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
      <img
        src={`Icon${props.title}`}
        alt={props.title}
        width="78"
        height="78"
      />
    </>
  );
}

export default CardIcon;
