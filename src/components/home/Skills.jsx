import React from "react";
import SkillsTab from "./SkillsTab";
import FrameworkCard from "./FrameworkCard";
import { Jumbotron, Container, Row } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";


function Skills({ heading, hardSkills, softSkills, frameworks, darkmode }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className={`${darkmode && "bg-dark"} m-0`} id="skills">
      <Container className={`p-5 ${darkmode && "text-white"}`}>
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <div className="flextab">
        <div className="w-full">
          <ul
            className="tablist"
            role="tablist"
          >
            <li className="tab">
              <a
                className={`shadow-lg ${openTab === 1 ? "text-white bg-info" : `${darkmode ? 'bg-black' : 'bg-white'} text-info`} tab-label`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Codings
              </a>
            </li>
            <li className="tab">
              <a
                className={`shadow-lg ${openTab === 2 ? "text-white bg-info" : `${darkmode ? 'bg-black' : 'bg-white'} text-info`} tab-label`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Overall
              </a>
            </li>
          </ul>
          <div className={`shadow-lg ${darkmode ? "bg-black" : "bg-white"} tab-content`}>
            <div className="tab-content-flex">
              <div className="tab-content-item tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    <Row className="pt-3 px-1">
                      <SkillsTab skills={hardSkills} isScrolled={isScrolled} darkmode={darkmode}/>
                    </Row>
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    <Row className="pt-3 px-1">
                      <SkillsTab skills={softSkills} isScrolled={isScrolled} darkmode={darkmode}/>
                    </Row>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row className={`shadow-lg ${darkmode ? 'bg-black' : 'bg-white'} framework-card`}>
        {
          frameworks.map(({name, logo, value}) => (
            <FrameworkCard name={name} logo={logo} value={value} darkmode={darkmode}/>
          ))
        }
      </Row>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
