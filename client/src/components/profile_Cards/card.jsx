import React from "react";
import ProfileCardCSS from "./card.module.css"

function Card(props) {
  return (
    <div className={ProfileCardCSS.card}>
      <div className={ProfileCardCSS.top}>
        <h2 className={ProfileCardCSS.name}>{props.name}</h2>
        <img className={ProfileCardCSS.circle_img} src={props.img} alt="avatar_img" />
      </div>
      <div className={ProfileCardCSS.bottom}>
        <p className={ProfileCardCSS.info}>{props.tel}</p>
        <p className={ProfileCardCSS.info}>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
