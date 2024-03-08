import React, { useEffect } from "react";
import "./projects.scss";
function Projects() {
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.data));
  }, []);
  return (
    <div className="project">
      <div>
        <h6>MY WORKS</h6>
        <h4>Featured Portfolio</h4>
      </div>
      <div className="projects">
        {projects.map((item) => (
          <div className="ProjectCard">
            <iframe src={item.link} />
            <div>
              <a href={item.link} target="_popup">
                <h5>{item.title}</h5>
              </a>
              <div className="TechStack">
                <button>React</button>
                <button>Express</button>
                <button>Firebase</button>
                <button>MongoDb</button>
                <button>Node JS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="MobileProjects">
        {projects.map((item) => (
          <div className="ProjectCard">
            <a href={item.link} target="popup">
              <img
                src={item.img}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </a>
            <div>
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
