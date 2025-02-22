import React from "react";
import { useState } from "react";
import EmptyBox from "./EmptyBox";
import "../css/ModuleContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function ModuleContainer({ courseOutline, isLecturer = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [BtnLabel, setBtnLabel] = useState("Edit");
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [modules, setModules] = useState(courseOutline);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setBtnLabel(isEditing ? "Edit" : "Save");
    setShowAddBtn(!isEditing);
    console.log("Current state of modules:");
    modules.forEach((module, index) => {
      console.log(`Module ${index + 1}:`, module);
    });
  };

  const addNewModule = () => {
    const newModule = {
      week: `Week ${modules.length + 1}`,
      title: "New Module",
      topics: [
        { title: "New Topic 1", status: false },
        { title: "New Topic 2", status: false },
      ],
    };
    setModules([...modules, newModule]);
  };




  const handleCheckboxChange = (weekIndex, topicIndex) => {
    const updatedModules = [...modules];
    updatedModules[weekIndex].topics[topicIndex].status = !updatedModules[weekIndex].topics[topicIndex].status;
    setModules(updatedModules);
  };

  const handleTitleChange = (weekIndex, topicIndex, newTitle) => {
    const updatedModules = [...modules];
    updatedModules[weekIndex].topics[topicIndex].title = newTitle;
    setModules(updatedModules);
  };
  const handleChapterTitleChange = (weekIndex, newTitle) => {
    const updatedModules = [...modules];
    updatedModules[weekIndex].title = newTitle;
    setModules(updatedModules);
  };

  const addNewSubtopic = (weekIndex) => {
    const updatedModules = [...modules];
    updatedModules[weekIndex].topics.push({ title: "New Subtopic", status: false });
    setModules(updatedModules);
  };

  const deleteModule = (weekIndex) => {
    const updatedModules = modules.filter((_, index) => index !== weekIndex);
    setModules(updatedModules);
  };

  const deleteSubtopic = (weekIndex, topicIndex) => {
    const updatedModules = [...modules];
    updatedModules[weekIndex].topics = updatedModules[weekIndex].topics.filter((_, index) => index !== topicIndex);
    setModules(updatedModules);
  };

  return (
      <>
        <div>
          <div style={{display: "flex",justifyContent: "space-between",alignItems: "center",}}>
            <h2 className="head-outline">Course Outline</h2>
            {isLecturer && (
              <div style={{display : "flex",gap : "20px"}}>
                { showAddBtn && <button style={{width: "80px",padding: "15px",backgroundColor: "transparent",border: "2px solid #02427a",borderRadius: "10px",color: "#02427a",}} onClick={addNewModule}> Add</button>}
                <button style={{width: "80px",padding: "15px",backgroundColor: "#02427a",border: "none",borderRadius: "10px",}} onClick={handleEditToggle}> {BtnLabel}</button>
              </div>
            )}
          </div>

          <div className="">
            {modules.length > 0 ? (
              modules.map((module, weekIndex) => (
                <div key={weekIndex} className="week-box">
                  
                  <div style={{display: "flex", justifyContent : "space-between"}}>
                  <h2>{module.week}</h2>
                  {isEditing && <div  style={{display : "flex", gap : "20px"}}>
                      <FontAwesomeIcon title="Add Chapter" icon={faPlus} onClick={() => addNewSubtopic(weekIndex)} style={{width : "30px" , height : "25px"}} />
                      <FontAwesomeIcon title="Delete Module" icon={faTrash} onClick={() => deleteModule(weekIndex)}  style={{width : "30px" , height : "25px"}}/>
                    </div>
                  }
                  </div>
                    <input 
                      className="chapter-title"
                      type="text" 
                      disabled={!isEditing} 
                      value={module.title} 
                      onChange={(e) => handleChapterTitleChange(weekIndex, e.target.value)} 
                    />
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="topic-item">
                      <input 
                        type="text" 
                        disabled={!isEditing} 
                        value={topic.title} 
                        onChange={(e) => handleTitleChange(weekIndex, topicIndex, e.target.value)} 
                      />
                      <input 
                        type="checkbox" 
                        checked={topic.status} 
                        onChange={() => handleCheckboxChange(weekIndex, topicIndex)} 
                        disabled={!isEditing} 
                      />
                      {isEditing &&  <FontAwesomeIcon icon={faTrash}  onClick={() => deleteSubtopic(weekIndex, topicIndex)} style={{width : "25px" , height : "20px"}}/>}
                    </div>
                  ))}
                </div>
              ))
            ) 
            : <EmptyBox text={"Outline not Available"} />}
          </div>    

      </div>
    </>
  );
}

export default ModuleContainer;

