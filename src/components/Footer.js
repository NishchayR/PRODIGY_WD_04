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
            <p>Bachelor of Engineering student with a strong passion for software development and data analytics. Proven adaptability to diverse environments and a quick learner of new skills, tools, and technologies. Solid foundation in engineering principles and hands-on experience in programming languages. Eager to contribute to innovative projects, demonstrate technical expertise, and collaborate within dynamic teams. Seeking opportunities to apply and expand knowledge in a challenging and growth-oriented environment.</p>
            <div className="social">
            <Link to="https://www.linkedin.com/in/nishchay-rajpal-8b486b218/" target='_blank'><FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}} />
</Link>
            <Link Link to="https://github.com/NishchayR" target='_blank'><FaGithub size={25} style={{color: "white", marginRight: "1rem"}}/>
</Link>
<Link  to="https://twitter.com/RajpalNish2438" target='_blank'><FaTwitter size={30} style={{color: "white", marginRight: "1rem"}} /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

