import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { 
    color: `${props.darkmode ? "white" : "black"}`, 
    backgroundColor:  `${props.darkmode ? "black" : "white"}`
  };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
      </Container>
    </footer>
  );
};

export default Footer;
