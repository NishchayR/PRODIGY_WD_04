import { Link } from "react-router-dom";
import "./AboutContent.css";
import IntroImg from "../assets/Nishchay.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <h3>Software Developer.</h3>
        <p>I am a creative developer committed to crafting exceptional, interactive, and intuitive websites that engage users. I possess strong proficiency in UI design, and features based on user feedback. I am eager to explore technologies and constantly strive to improve my technical competency.</p>
        <Link to="https://drive.google.com/file/d/18qrfEujSHXd4AAdbzo-M1FHFidCrv5lh/view?usp=drive_link" target="_blank">
        <button className="btn">Resume</button>
      </Link>
      </div>
      
      <div className="right">
        <div className="img-size">
        <img src={IntroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutContent

