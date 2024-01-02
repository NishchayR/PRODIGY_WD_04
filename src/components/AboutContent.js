import { Link } from "react-router-dom";
import "./AboutContent.css";
import IntroImg from "../assets/Nishchay.jpg"


import React from 'react'

const AboutContent = () => {
  return (
     <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <h3>Student</h3>
        <p>Bachelor of Engineering in Computer Science student with a fervent interest in software development and data analytics. Proficient in engineering principles, programming languages, and data analysis techniques. Demonstrated adaptability in various environments and a proactive learner of emerging tools and technologies. Possesses strong problem-solving skills and a keen eye for detail. Eager to contribute to cutting-edge projects, leverage analytical abilities, and collaborate effectively within diverse teams. Proven ability to quickly grasp new concepts and translate them into practical solutions. Seeking an internship or entry-level position to apply and enhance skills, and to be part of an innovative work environment that fosters continuous learning and professional growth.</p>
        <Link to="https://drive.google.com/file/d/1Q9s-zWGzaVGMmDf6CUt_2rE08dB-JSS_/view?usp=drive_link" target="_blank">
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

