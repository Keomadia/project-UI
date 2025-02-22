import React from "react";
import Sidebar from "../components/Sidebar";
import {  getPersonRole } from "../utils/helpers";
import ModuleContainer from "../components/ModuleContainer";
import '../csspages/Course.css'
import { UserContext } from "../UserContext";
import { useContext } from "react";

function Course() {
  
  // const { role } = useContext(UserContext);
  // if (!role) {
  //   return <div>Loading...</div>; // Or redirect to login
  // }
  // const personRole = role.role
  // alert(role.username)
  // alert(role.role)
  const personRole = getPersonRole()
  const cc = ["CSC 101","CSC 102","CSC 121","CSC 202","CSC 210","CSC 305","CSC 311","CSC 402","CSC 402","CSC 410","CSC 499",];
  const courseOutline = [
    {
      week: "Week 1",
      title: "Getting Started with the Course",
      topics: [
        { title: "Introduction to Operational Management", status: true },
        { title: "Process Design", status: true },
      ],
    },
    {
      week: "Week 2",
      title: "Intermediate Concepts",
      topics: [{ title: "Supply Chain Management", status: true }],
    },
    {
      week: "Week 3",
      title: "Advanced Topics",
      topics: [
        { title: "Process Analysis", status: true },
        { title: "Quality Control", status: false },
        { title: "Project Management", status: false },
      ],
    },
    {
      week: "Week 4",
      title: "Expert Level",
      topics: [
        { title: "Lean Management", status: false },
        { title: "Six Sigma", status: false },
        { title: "Continuous Improvement", status: false },
        { title: "Change Management", status: false },
      ],
    },
  ];
 
  
  const userRole = (personRole === "student" ? false :  true)
  const fname = userRole ? "Jonathan" : "Olivia";
  const lname = !userRole ? "john" : "francis";

  return (
    <div className="container ">
      <Sidebar
        firstName={fname}
        lastName={lname}
        courseCodes={cc}
        role={userRole}
        isWithinCourse={userRole === true ? true : false}
      />
      <div className="second">
        <h1>CDN 125</h1>
        <h1>Intro to Operational Management</h1>
      

        <ModuleContainer courseOutline={courseOutline} isLecturer={userRole}/>
      </div>
    </div>
  );
}
export default Course;
