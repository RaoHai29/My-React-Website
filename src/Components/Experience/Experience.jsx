import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="Expert" id="Experience">
      {list.map(({years, title1, title2})=>(
        <div className="achieve">
          <div className="circle">{years}</div>
          <span>{title1}</span>
          <span>{title2}</span>
        </div>
      ))}
    </div>
  );
}

const list = [
  {
    years: "1+",
    title1: "year",
    title2: "Experience"
  },
  {
    years: "8+",
    title1: "Completed",
    title2: "Projects"
  },
  {
    years: "2+",
    title1: "Freelancing",
    title2: "Platforms"
  },
]

export default Experience;
