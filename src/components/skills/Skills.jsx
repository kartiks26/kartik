import React, { useEffect } from "react";
import SkillCard from "./SkillCard";
import "./skills.scss";

function Skills() {
  const [skills, setSkills] = React.useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kartiks26/kartik/master/public/data/skillsData.json"
    ).then((res) => {
      res.json().then((data) => {
        console.log(data.data);
        setSkills(data.data);
      });
    });
  }, []);
  return (
    <div className="skills">
      <div className="skillsHeader">
        <p>Skills</p>
        <h2>Specialized In .</h2>
      </div>
      <div className="skillsCards">
        {skills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
