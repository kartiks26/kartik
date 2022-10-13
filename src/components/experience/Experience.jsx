import React from "react";
import "./Experiance.scss";
import data from "../../../public/data/Experiance.json";
function Experience() {
  const [experience, setExperience] = React.useState(data.data);
  const [current, setCurrent] = React.useState(0);
  function createMarkup(item) {
    return { __html: item };
  }
  return (
    <div className="mainGrid">
      <div className="leftGrid">
        <div>
          <h6>CAREER PATH</h6>
          <h1>Work Experience</h1>
        </div>
        <div className="CompanyToggle">
          {experience.map((item, index) => {
            return (
              <div>
                <p
                  style={{
                    color: current === index ? "#7E74F1" : "#000",
                  }}
                  onClick={() => setCurrent(index)}
                >
                  {item.CompanyName}
                </p>
                {current === index && (
                  <img src="/assets/right.svg" alt="right" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightGrid">
        <div className="companyBrief">
          <section>
            <h4>
              {experience[current].post} - {experience[current].CompanyName}
            </h4>
            <p>{experience[current].location}</p>
          </section>
          <section>
            {experience[current].start_date} - {experience[current].end_date} -{" "}
            {experience[current].type}
          </section>
          <section>
            {experience[current].Technology.map((item, index) => {
              return <button key={index}>{item}</button>;
            })}
          </section>
        </div>
        <div className="horizontalSeparation"></div>
        <div className="companyDesc">
          {experience[current].description.map((item, index) => {
            return (
              <p dangerouslySetInnerHTML={createMarkup(item)} key={index}></p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
