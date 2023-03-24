import "./Nav.css";
import React, { useEffect, useState } from "react";
import Logo from "./Netflix.png";
import avatar from "./Netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(false);
        } else handleShow(true);
      });
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={avatar} alt="" />
    </nav>
  );
}

export default Nav;
