import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled, darkmode }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
          darkmode={darkmode}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled, darkmode }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
          darkmode={darkmode}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
          darkmode={darkmode}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
