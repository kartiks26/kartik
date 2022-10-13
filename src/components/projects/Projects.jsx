import React from "react";
import "./projects.scss";
function Projects() {
  return (
    <div className="project">
      <div>
        <h6>MY WORKS</h6>
        <h4>Featured Portfolio</h4>
      </div>
      <div className="projects">
        {[
          {
            title: "Music App",
            img: "/assets/project1.jpg",
            link: "https://musicapp-kohl.vercel.app/",
          },
          {
            title: "Expense Tracker",
            img: "/assets/project2.jpg",
            link: "https://expenseit.vercel.app/",
          },
        ].map((item) => (
          <div className="ProjectCard">
            <iframe src={item.link} />
            <div>
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="MobileProjects">
        {[
          {
            title: "Music App",
            img: "/assets/project1.jpg",
            link: "https://musicapp-kohl.vercel.app/",
          },
          {
            title: "Expense Tracker",
            img: "/assets/project2.jpg",
            link: "https://expenseit.vercel.app/",
          },
        ].map((item) => (
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
