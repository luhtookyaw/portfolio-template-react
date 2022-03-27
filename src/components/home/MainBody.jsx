import React from "react";
import Typed from "react-typed";
import { FaChevronDown } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, darkmode }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: !darkmode ? `linear-gradient(136deg,${gradient})` : "black",
          backgroundSize: "1200% 1200%",
        }}
        className={`title ${!darkmode && "bg-transparent"} bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0`}
      >
        {darkmode && <div id="stars"></div>}
        <Container 
          className={`text-center ${darkmode && "darkmode-text"}`}
        >
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typed
            style={{fontSize: "23px"}}
            strings={[
              'I am a programmer.',
              'I am ML Engineer.',
              'I am AI Enthusiast.',
            ]}
              typeSpeed={50}
              backSpeed={55}
              loop >
          </Typed>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons ${darkmode && "darkmode-icon"}`} />
              </a>
            ))}
          </div>
          <a
            className="down-arrow"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            <FaChevronDown size={30}/>
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
