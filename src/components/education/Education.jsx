import React, { useEffect } from "react";
import "./education.scss";
function Education() {
  const [eduData, setEduData] = React.useState();
  const [descIndex, setDescIndex] = React.useState(0);
  useEffect(() => {
    fetch("/data/Education.json")
      .then((res) => res.json())
      .then((data) => {
        setEduData(data.edu);
        console.log(data.edu);
      });
  }, []);

  return (
    <div className="eduContainerMain">
      <div className="eduHeader">
        <h6>LEARNING PATH</h6>
        <h1>Education</h1>
      </div>
      <div className="eduContainer">
        <div className="eduBodyL">
          {eduData &&
            eduData.map((item, index) => (
              <div
                onClick={() => {
                  setDescIndex(index);
                }}
                className={
                  index == descIndex
                    ? "educationSection active"
                    : "educationSection"
                }
              >
                <h4>{item.title}</h4>
                <h5>{item.smDesc}</h5>
                <p>{item.fromTo}</p>
              </div>
            ))}
        </div>
        <div className="eduBodyR">{eduData && eduData[descIndex].lgDesc}</div>
      </div>
    </div>
  );
}

export default Education;
