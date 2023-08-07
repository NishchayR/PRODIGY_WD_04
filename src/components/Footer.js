import "./Footer.css"
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook, FaGithub} from "react-icons/fa"
import { Link } from "react-router-dom"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
                <div>
                    <p>Tolaram Nagar, Chembur.</p>
                    <p>Mumbai 400074.</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />
            +919930988205</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />
            nishchayrajpal8@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>About</h4>
            <p>I am a creative developer committed to crafting exceptional, interactive, and intuitive websites that engage users. I possess strong proficiency in UI design, and features based on user feedback. I am eager to explore technologies and constantly strive to improve my technical competency.</p>
            <div className="social">
            <Link to="https://www.linkedin.com/in/nishchay-rajpal-8b486b218/" target='_blank'><FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}} />
</Link>
            <Link Link to="https://github.com/NishchayR" target='_blank'><FaGithub size={25} style={{color: "white", marginRight: "1rem"}}/>
</Link>
            <FaTwitter size={30} style={{color: "white", marginRight: "1rem"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

