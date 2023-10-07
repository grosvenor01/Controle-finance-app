import React from "react";
import "./Courses.css";
import bnadem from "../Images/course icons/bnadem.svg";
import cup from "../Images/course icons/Cup.svg";
import book from "../Images/course icons/Book.svg";
import rate from "../Images/course icons/Score.png"
export default function CourseItem({ img, title, lesson, students, lvl }) {
  return (
    <div className="CourseItem">
      <div className="card w-96  shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Learn Figma - UI/UX Design Essential Training
          </h2>
          <div className="Course-info-container">
            <div>
              <img src={book}  />
              Lesson:{lesson}
            </div>
            <div>
              <img src={bnadem} />
              Student:{students}
            </div>
            <div>
              <img src={cup} />
              {lvl}
            </div>
          </div>
          <div className="d-flex justify-between">
            <button className="StartCourse">Start now {"  >"}</button>
            <img src={rate} />
          </div>
        </div>
      </div>
    </div>
  );
}
