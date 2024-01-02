import "./AchiveCard.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const AchiveCard = (props) => {
  return (
    <div className="proj-card">
    <img src={props.imgsrc} alt="Image" />
    <h2 className="proj-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} target="_blank" className="btn">View</NavLink>
        </div>
    </div>
</div>
  )
}

export default AchiveCard
