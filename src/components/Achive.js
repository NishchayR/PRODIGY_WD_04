import "./AchiveCard.css";
import AchiveCard from "./AchiveCard";
import AchiveCardData from "./AchiveCardData"
import React from 'react'

const Achive = () => {
  return (
    <div className="work-container">
        <h1 className="proj-head">Achievements.</h1>
        <div className="proj-container">
            {AchiveCardData.map((val, ind) => {
                return(
                    <AchiveCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            })}
        </div>
      
    </div>
  )
}

export default Achive
