import React from "react";
import Sidebar from "../components/Sidebar";
import {  getPersonRole } from "../utils/helpers";
import Box from "../components/Box";
import AssTable from "../components/AssTable";
import EmptyBox from "../components/EmptyBox";
import "../csspages/Dashboard.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Dashboard() {
  const { role } = useContext(UserContext);
  // if (!role) {
  //   return <div>Loading...</div>; // Or redirect to login
  // }
  // const personRole = role.role
  const personRole = getPersonRole()
  const cc = [
    "CSC 101",
    "CSC 102",
    "CSC 121",
    "CSC 202",
    "CSC 210",
    "CSC 305",
    "CSC 311",
    "CSC 402",
    "CSC 410",
    "CSC 499",
  ];
  
  const assignments = [
    { "Course code": "ABC 120", Status: "Pending", Deadline: "12/12/2023" },
    { "Course code": "CDN 125", Status: "Pending", Deadline: "12/12/2023" },
    { "Course code": "CSC 112", Status: "Done", Deadline: "12/12/2023" },
    { "Course code": "CSC 221", Status: "Pending", Deadline: "12/12/2023" },
  ];

  const userRole = personRole === "student" ? false : true;

  const fname = userRole ? "Jonathan" : "Olivia";
  const lname = !userRole ? "john" : "francis";
  
  const courses = !userRole
    ? [
        { title: "Introduction to Operational Management", lecturer: "Smith John", code: "CSC 121" },
        { title: "Introduction to Computing Management", lecturer: "Smith John", code: "CSC 121" },
        { title: "Introduction to Management", lecturer: "Olivia Rodrygo", code: "ECO 111" },
        { title: "Introduction to Financial Accounting Management", lecturer: "Emeka Nwano", code: "FAC 121" },
        { title: "Introduction to Computing Management", lecturer: "", code: "CSC 121" },
        { title: "Introduction to Management", lecturer: "John Jameson", code: "ECO 111" },
        { title: "Introduction to Financial Accounting Management", lecturer: "Michael David", code: "FAC 121" },
      ]
    : [
        { title: "Introduction to Computing Management", level: 200, code: "CSC 121" },
        { title: "Introduction to Management", level: 300, code: "ECO 311" },
        { title: "Introduction to Financial Accounting Management", level: 100, code: "FAC 121" },
        { title: "Introduction to Financial Accounting Management", level: 100, code: "FAC 121" },
      ];
  
  // Get unique levels from courses
  const uniqueLevels = Array.from(new Set(courses.map(course => Number(course.level)).filter(Boolean))).sort((a , b) => a - b);

  return (
    <div className="container">
      <Sidebar
        firstName={fname}
        lastName={lname}
        courseCodes={cc}
        role={userRole}
      />
      <div className="second">
        <div className="greet">
          <h1>Welcome Back, {`${fname} ${lname}`}</h1>
        </div>
        {!userRole ? (
          !(assignments.length < 0) ? (
            <div>
              <h1>Assignments</h1>
              <AssTable obj={assignments} />
            </div>
          ) : (
            <div>
              <h1>Assignments</h1> <EmptyBox text={"No assignments"} />
            </div>
          )
        ) : (
          ""
        )}

        <div className="all-courses">
          <h1>Courses</h1>
          {!userRole 
          ?
          <div className="top-courses">
          {courses.map((course) => (
                <Box
                title={course.title}
                code={course.code}
                lecturer={course.lecturer}
              />
          ))}
          </div>
          : uniqueLevels.map((level) => (
              <div key={level} className="filtered-courses">
                <h1>{level} Level</h1>
                <div className="other-top-courses">  
                  {courses.filter(course => course.level === level)
                    .map(course => (
                      <Box key={course.code} title={course.title} code={course.code} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
