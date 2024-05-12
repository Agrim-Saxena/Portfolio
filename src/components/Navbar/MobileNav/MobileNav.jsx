import React from "react";
import "./MobileNav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MobileNav = ({ isOpen , toggleMenu }) =>{
  return (
    <>
    <div
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
            <img className="logo" src="./images/logo.svg" alt="" />

            <ul>
                <li>
                <AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>MobileNav("home")}>Home</p> </AnchorLink>
                    {/* <a className="menu-item">Home</a> */}
                </li>

                <li>
                <AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>MobileNav("skills")}>Skills</p> </AnchorLink>
                    {/* <a className="menu-item">Skills</a> */}
                </li>

                <li>
                <AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>MobileNav("projects")}>Projects</p> </AnchorLink>
                    {/* <a className="menu-item">Work Experience</a> */}
                </li>

                <li>
                <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>MobileNav("Contact Me")}>Contact Me</p> </AnchorLink>
                    {/* <a className="menu-item">Contact Me</a> */}
                </li>
                
                <div className="contact-btn"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>MobileNav("Contact Me")}>Hire Me</p></AnchorLink></div>
                {/* <button className="contact-btn" onClick={() => {}}>
                    Hire Me
                </button> */}
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav