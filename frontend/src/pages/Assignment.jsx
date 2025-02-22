import React, { useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentDate , getPersonRole } from "../utils/helpers";
import Sidebar from "../components/Sidebar";
import DownloadBtn from "../components/DownloadBtn";
import UploadBox from "../components/UploadBox";
import NewAssignmentBox from "../components/NewAssignmentBox";
import "../csspages/Assignment.css";
import pic from "/vite.svg";
import { UserContext } from "../UserContext";

function Assignment() {

  
  // const { role } = useContext(UserContext);
  // if (!role) {
  //   return <div>Loading...</div>; // Or redirect to login
  // }
  // const personRole = role.role
  
  const personRole = getPersonRole();
  
  const cc = ["CSC 101","CSC 102","CSC 121","CSC 202","CSC 210","CSC 305","CSC 311","CSC 402","CSC 402","CSC 410","CSC 499",];
  const navigate = useNavigate();

  const userRole = personRole !== "student";
  const fname = userRole ? "Jonathan" : "Olivia";
  const lname = !userRole ? "john" : "francis";
  const [assignmentDetails, setAssignmentDetails] = useState({
    name: "",
    date: "",
    file: null,
  });

  const handleAssignmentDetails = (data) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const threeDaysLater = new Date();
    threeDaysLater.setDate(today.getDate() + 3);
    const threeYearsLater = new Date();
    threeYearsLater.setFullYear(today.getFullYear() + 3);

    const enteredDate = new Date(data.date);
    if (enteredDate < threeDaysLater) {
      alert("Date must be at least 3 days from today.");
      return;
    }
    if (enteredDate > threeYearsLater) {
      alert("Date cannot be more than 3 years from today.");
      return;
    }

    setAssignmentDetails((prev) => ({ ...prev, ...data }));
  };

  const handleFileUpload = (file) => {
    const allowedFormats = ["pdf", "docx", "zip", "pptx"];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (!allowedFormats.includes(fileExtension)) {
      alert("Invalid file format. Allowed formats: PDF, DOCX, ZIP, PPTX");
      return;
    }

    setAssignmentDetails((prev) => ({ ...prev, file }));
  };

  const postAssignment = () => {
    if (
      !assignmentDetails.name ||
      !assignmentDetails.date ||
      !assignmentDetails.file
    ) {
      alert("Please provide all details before posting.");
      return;
    }

    console.log("Posting Assignment:", assignmentDetails);
    alert("Assignment Posted Successfully!");
    const newAss = {
      file: assignmentDetails.file,
      "submission Date": assignmentDetails.date,
      name: assignmentDetails.name,
    };
    alert(`${newAss.file} -- ${newAss["submission Date"]} -- ${newAss.name}`);
    backToHome();
  };
  const subAssignment = () => {
    if (!assignmentDetails.file) {
      alert("Please provide necessary details before Submitting.");
      return;
    }

    const submittedOn = getCurrentDate();
    console.log("Posting Assignment:", assignmentDetails);
    alert("Assignment Submitted Successfully!");
    const submittedAss = {
      file: assignmentDetails.file,
      "submission Date": submittedOn,
      name: "Assignment One",
    };
    alert(
      `file : ${submittedAss.file} -- name : ${submittedAss.name} -- submission Date : ${submittedAss["submission Date"]}`
    );
    backToHome();
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <Sidebar
        firstName={fname}
        lastName={lname}
        courseCodes={cc}
        role={userRole}
        isWithinCourse={ userRole === true ? true : false} 
      />

      {!userRole ? (
        <div className="second">
          <h1>CDN 125</h1>
          <h1>Intro to Operational Management</h1>
          <h2 className="head-outline">Assignment</h2>
          <DownloadBtn
            text={"Click the button below to get Assignment Details"}
            btnText={"Download Assignment"}
            fileForDownload={pic}
          />
          <UploadBox onFileUpload={handleFileUpload} />
          <button
            onClick={subAssignment}
            style={{
              background: "#023e7d",
              fontSize: "1.1em",
              border: "none",
              padding: "20px",
              display: "block",
              margin: "auto",
              width: "200px",
            }}
          >
            {" "}
            Submit Assignment
          </button>
        </div>
      ) : (
        <div className="second">
          <h1>CDN 125</h1>
          <h1>Intro to Operational Management</h1>
          <NewAssignmentBox onDetailsChange={handleAssignmentDetails} />
          <UploadBox onFileUpload={handleFileUpload} />
          <button
            onClick={postAssignment}
            style={{
              background: "#023e7d",
              fontSize: "1.1em",
              border: "none",
              padding: "20px",
              display: "block",
              margin: "auto",
              width: "200px",
            }}
          >
            Post Assignment
          </button>
        </div>
      )}
    </div>
  );
}

export default Assignment;
