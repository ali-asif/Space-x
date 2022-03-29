import React from "react";
import "./header.css";
import { Nav, Navbar } from "react-bootstrap";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" onClick={() => scroll.scrollToTop()}>
        {/* <img src={Rocket} alt="" /> */}
        Space-X
      </Navbar.Brand>
      
    </Navbar>
  );
};

export default Header;
