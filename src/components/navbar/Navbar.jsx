import "./navbar.css"
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.png"
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className="navbar-container">

      <div className="logo">
        <img src={logo} alt="medic-logo" />
        <h1>Sushruta Hospital</h1>
      </div>

      <div className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
        <div className="nav-items">
          <h3>Medical Care</h3>
          <h3>Medical Health</h3>
          <h3>Medical Test</h3>
          <h3>Medical Lab</h3>
          <h3>Medical Contact</h3>
        </div>

        <div className="side-nav-items">
          <h3>Login</h3>
          <img src={search} alt="search" />
        </div>
      </div>


    </div>
  )
}

export default Navbar