import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const level = (value) => {
  if (value >= 50) {
    return "info";
  } else if (value >= 30) {
    return "warning";
  } else {
    return "danger";
  }
}
function SkillsBar({ skill, value, isScrolled, darkmode }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : `progress-bar-animation ${darkmode && "bg-dark"}`}
        variant={level(value)}
        now={value}
      />
    </div>
  );
}

export default SkillsBar;
