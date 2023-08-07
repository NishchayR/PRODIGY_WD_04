import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub} from "react-icons/fa"
import { Link } from "react-router-dom"

import "./ContactContent.css";


const ContactContent = () => {
  return (
    <div className='connect'>
      <h1>Connect with me on...</h1>
      <p><FaPhone size={25} style={{color: "white", marginRight: "1rem"}}/>+919930988205</p>
      <p><FaLinkedin size={25} style={{color: "white", marginRight: "1rem"}}/> <Link to="https://www.linkedin.com/in/nishchay-rajpal-8b486b218/" target='_blank'>LinkedIn.com/in/nishchay-rajpal-8b486b218/</Link></p>
            <p><FaMailBulk size={25} style={{color: "white", marginRight: "1rem"}}/>nishchayrajpal8@gmail.com</p>
            <p><FaGithub size={25} style={{color: "white", marginRight: "1rem"}}/><Link to="https://github.com/NishchayR" target='_blank'>GitHub.com/NishchayR</Link></p>
            <p><FaTwitter size={25} style={{color: "white", marginRight: "1rem"}}/>@RajpalNish2438</p>
            <p><FaInstagram size={25} style={{color: "white", marginRight: "1rem"}}/>nishchaysrajpal</p>            
    </div>
  )
}

export default ContactContent
