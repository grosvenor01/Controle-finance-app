import React from "react";
import "./Courses.css";
import CourseItem from "./CourseItem";
import CoureImage from "../Images/Course.png";

export default function Courses() {
  return (
    <div className="CoursesPage">
      <h1>Courses</h1>
      <div className="flex justify-around">
        <div className="CoursesContainer grid grid-cols-3 gap-y-20 gap-x-10 ">
          <CourseItem img={CoureImage} />
          <CourseItem img={CoureImage} />
          <CourseItem img={CoureImage} />
          <CourseItem img={CoureImage} />
          <CourseItem img={CoureImage} />
          <CourseItem img={CoureImage} />
        </div>
      </div>
    </div>
  );
}
