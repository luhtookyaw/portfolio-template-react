import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GiSun, GiMoon } from "react-icons/gi";
import { mainBody, repos, about, skills, education } from "../editable-stuff/config.js";
import { Sling } from "hamburger-react";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );
  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      bg={isTop && "transparent"}
      variant = {`${props.darkmode ? "dark" : "light"}`}
      ref={navbarMenuRef}
      className={`fixed-top navbar-${props.darkmode ? "dark" : "white"}`}
      expand="lg"
    >
      <Navbar.Brand className={`brand ${props.darkmode && "dark"}`} href={process.env.PUBLIC_URL + "/#home"}>
        {`${mainBody.firstName}`}{!props.darkmode ? <GiSun size={26}/> : <GiMoon size={26}/>}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
        <Sling toggled={isOpen} toggle={setOpen} size={26}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}
          {about.show && (
            <Nav.Link
              className={`nav-link lead ${props.darkmode && "white"}`}
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </Nav.Link>
          )}

          {education.show && (
            <Nav.Link
              className={`nav-link lead ${props.darkmode && "white"}`}
              href={process.env.PUBLIC_URL + "/#education"}
            >
              Education
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className={`nav-link lead ${props.darkmode && "white"}`}
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </Nav.Link>
          )}
          {repos.show && (
            <Nav.Link
              className={`nav-link lead ${props.darkmode && "white"}`}
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </Nav.Link>
          )}
        </Nav>
        {props.children}
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
