import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <h1>Logo</h1>
            <p>Native wears</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-links'>
        <FaSquareInstagram />
        <SiFacebook/>
        <FaWhatsappSquare />
        <BsTwitterX/>
        </div>
        <div className='copy'>
            <hr />
            <p>Copyright @ 2025, All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer