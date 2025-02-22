import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import ProfilePic from "../components/ProfilePic";
import "../csspages/Dashboard.css";
import { capitalizeKey , getPersonRole } from "../utils/helpers";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function Profile() {
  const cc = ["CSC 101","CSC 102","CSC 121","CSC 202","CSC 210","CSC 305","CSC 311","CSC 402","CSC 402","CSC 410","CSC 499",];


//  const { role } = useContext(UserContext);
//  if (!role) {
//   return <div>Loading...</div>; // Or redirect to login
// }
//  const personRole = role.role
 const personRole = getPersonRole()

  const userRole = personRole === "student" ? false : true;
  const fname = userRole ? "Jonathan" : "Olivia";
  const lname = !userRole ? "john" : "francis";

  const details = !userRole
    ? {gender: "Male",lvl: "100",department: "Computer Science",matNo: "ESCT / CSC / 21 / 121 / 25",}
    : { gender: "Male", "no. of courses": "7", "": "" };

  const courses = !userRole
    ? [
        {title: "Introduction to Operational Management",lecturer: "Smith John",code: "CSC 121",},
        {title: "Introduction to Computing Management",lecturer: "Smith John",code: "CSC 121",},
        {title: "Introduction to Management",lecturer: "Olivia rodrygo",code: "ECO 111",},
        {title: "Introduction to Financial Accounting Management",lecturer: "Emeka Nwano",code: "FAC 121",},
        {title: "Introduction to Computing Management",lecturer: "",code: "CSC 121",},
        {title: "Introduction to Management",lecturer: "John Jameson",code: "ECO 111",},
        {title: "Introduction to Financial Accounting Management",lecturer: "Michael David",code: "FAC 121",},]
    : [{title: "Introduction to Operational Management",level: 100,code: "CSC 121",},
        {title: "Introduction to Computing Management",level: 100,code: "CSC 121",},
        { title: "Introduction to Management", level: 200, code: "ECO 111" },
        {title: "Introduction to Financial Accounting Management",level: 200,code: "FAC 121",},
        {title: "Introduction to Computing Management",level: "200",code: "CSC 121",},
        { title: "Introduction to Management", level: 300, code: "ECO 111" },
        {title: "Introduction to Financial Accounting Management",level: 100,code: "FAC 121",},];


  return (
    <div className="container ">
      <Sidebar
        firstName={fname}
        lastName={lname}
        courseCodes={cc}
        role={userRole}
      />
      <div className="second">
        <div className="profile-info">
          <div className="main-info">
            <h1>{`${capitalizeKey(fname)} ${capitalizeKey(lname)}`}</h1>
            <div className="img-person">
              <ProfilePic fname={fname} lname={lname} />
            </div>
          </div>
          <div className="sub-info">
            {Object.entries(details).map(([key, value]) => (
              <p key={key}>
                <span>
                  {key === "lvl"
                    ? "Level"
                    : key === "matNo"
                    ? "Reg No."
                    : capitalizeKey(key)}
                </span>
                <br />
                {value}
              </p>
            ))}
          </div>
        </div>

        <h1>Your Courses</h1>
        <Table obj={courses} />
      </div>
    </div>
  );
}
export default Profile;
