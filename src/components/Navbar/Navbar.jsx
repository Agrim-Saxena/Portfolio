import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () =>{
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className="nav-wrapper">
        <div className="nav-content">
            <img className="logo" src="./images/logo.png" alt="" />

            <ul>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setOpenMenu("home")}>Home</p> </AnchorLink>
                    {/* <a className="menu-item">Home</a> */}
                </li>
                <li>
                <AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setOpenMenu("skills")}>Skills</p> </AnchorLink>
                    {/* <a className="menu-item">Skills</a> */}
                </li>
                <li>
                <AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>setOpenMenu("projects")}>Projects</p> </AnchorLink>
                    {/* <a className="menu-item">Projects</a> */}
                </li>
                <li>
                <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setOpenMenu("Contact Me")}>Contact Me</p> </AnchorLink>
                    {/* <a className="menu-item">Contact Me</a> */}
                </li>
                <div className="contact-btn"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setOpenMenu("Contact Me")}>Hire Me</p></AnchorLink></div>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
                <span 
                class={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem" }}
                >
                    {openMenu ? "close" : "menu"}
                </span>
            </button>
        </div>
    </nav>
    </> 
  )
}

export default Navbar