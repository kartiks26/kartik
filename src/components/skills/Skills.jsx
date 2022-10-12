import React from "react";
import SkillCard from "./SkillCard";
import "./skills.scss";

function Skills() {
  return (
    <div className="skills">
      <div className="skillsHeader">
        <p>Skills</p>
        <h2>Specialized In .</h2>
      </div>
      <div className="skillsCards">
        {[1, 2, 3].map((skill) => (
          <SkillCard />
        ))}
      </div>
    </div>
  );
}

export default Skills;
