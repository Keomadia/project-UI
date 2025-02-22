import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faSignOutAlt, faPalette,faListAlt, faCog, faBook, faHome, faAngleRight, faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "./ProfilePic";
import "../css/Sidebar.css";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";



function Sidebar({ courseCodes , role ,firstName , lastName , isWithinCourse = false }) {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const changeColor = () => alert("Color Changed but you can't notice it");
  const navigate = useNavigate()
  const sideBarToggle = () =>{
     setSidebarOpen(!sidebarOpen); 
     setCoursesOpen(false)
  }

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if(window.innerWidth < 900 ) {setSidebarOpen(false);  setCoursesOpen(false)}
  }

  const goToAddAssignment = () => navigate("/assignment")
  const goToSubmittedAssignments = () => navigate("/outline")
  const goToCourseOutline = () => navigate("/outline")

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        
        <div>
        <button className="sidebar-toggle" onClick={sideBarToggle}><FontAwesomeIcon icon={sidebarOpen ? faAngleLeft : faAngleRight} /></button>


          { !role ? <h1 className="profile-role">{sidebarOpen ? "Student 👨‍🎓" : "👨‍🎓"}</h1> : <h1 className="profile-role">{sidebarOpen ? "Lecturer 👨‍🏫" : "👨‍🏫"}</h1> }
          <a className="profile" href="/profile"><div className="profile-img"><ProfilePic  fname = {firstName} lname={lastName}/></div>{sidebarOpen && <p className="profile-name">{firstName}</p>}</a>
          <a className="menu-item" href="/"><FontAwesomeIcon icon={faHome} /><span className={sidebarOpen ? "" : "hidden"}>Dashboard</span></a>

          { role === false ? 
            <div className={`menu-dropdown ${coursesOpen ? "open" : ""}`}>
              <div className="menu-item" onClick={() => {setCoursesOpen(!coursesOpen); setSidebarOpen(true)}}>
                <FontAwesomeIcon icon={faBook} /><span className={sidebarOpen ? "" : "hidden"}>Courses</span>
                {sidebarOpen && <FontAwesomeIcon icon={coursesOpen ? faChevronUp : faChevronDown} />}
              </div>
              {coursesOpen && (
                <div className="submenu">
                  <div className="course-list">
                    {courseCodes.map((element, index) => (
                      <a key={index} className="menu-item" href="/course"><FontAwesomeIcon icon={faBook} /><span>{element}</span></a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          : 
              isWithinCourse && 
              
              <div className={`menu-dropdown ${coursesOpen ? "open" : ""}`}>
              <div className="menu-item" onClick={() => {setCoursesOpen(!coursesOpen); setSidebarOpen(true)}}>
                <FontAwesomeIcon icon={faBook} /><span className={sidebarOpen ? "" : "hidden"}>{"CDN 125"}</span>
                {sidebarOpen && <FontAwesomeIcon icon={coursesOpen ? faChevronUp : faChevronDown} />}
              </div>
              {coursesOpen && (
                <div className="submenu">
                  <div className="menu-item" onClick={goToAddAssignment}>
                    <FontAwesomeIcon icon={faPlus} /><span className={sidebarOpen ? "" : "hidden"}>Add Assignment</span>
                  </div>
                  <div className="menu-item" onClick={goToCourseOutline}>
                    <FontAwesomeIcon icon={faListAlt} /><span className={sidebarOpen ? "" : "hidden"}>Outline</span>
                  </div>
                  <div className="menu-item" onClick={goToSubmittedAssignments}>
                    <FontAwesomeIcon icon={faEye} /><span className={sidebarOpen ? "" : "hidden"}>View Assignments</span>
                  </div>
                </div>
              )}
            </div>
          }

        </div>

        <div className="bottom-menu">
        <div className={`menu-dropdown ${settingsOpen ? "open" : ""}`}>
        {settingsOpen && (
              <div className="submenu">
                <div className="menu-item"><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></div>
                <div className="menu-item" onClick={changeColor}><FontAwesomeIcon icon={faPalette} /><span>Theme</span></div>
              </div>
          )}
          <div className="menu-item" onClick={() => setSettingsOpen(!settingsOpen)}><FontAwesomeIcon icon={faCog} /><span>Settings</span><FontAwesomeIcon icon={settingsOpen ? faChevronUp : faChevronDown} /></div>
        </div>
      </div>

      </div>
    </>
  );
}

export default Sidebar;
