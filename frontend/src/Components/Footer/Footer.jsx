import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pintester_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_logo">
            <img src={footer_logo} alt="" />
            <p>E-SELLER</p>
        </div>
        <ui className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ui>
        <div className="footer_social_icon">
            <div className="footer_icon_container">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pintester_logo} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
            <div className="footer_copyright">
                <hr/>
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer