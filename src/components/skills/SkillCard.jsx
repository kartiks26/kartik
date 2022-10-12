import React from "react";
import "./skills.scss";
function SkillCard({ skill }) {
  return (
    <div className="skillsCard">
      <img src={skill.img} />
      <h6>{skill.Title}</h6>
      <p>{skill.description}</p>
    </div>
  );
}

export default SkillCard;
