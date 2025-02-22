import React, { useState } from "react";

function NewAssignmentBox({ onDetailsChange }) {
  const today = new Date();
  today.setDate(today.getDate() + 4); 
  const defaultDate = today.toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [date, setDate] = useState(defaultDate);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "date") setDate(value);

    onDetailsChange({
      name: id === "name" ? value : name,
      date: id === "date" ? value : date,
    });
  };

  return (
    <div style={{minHeight: "200px",width: "100%",display: "flex",flexDirection: "column",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",marginBottom: "10px",background: "#023e7d",borderRadius: "10px",gap: "20px",padding: "50px 30px",}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="name" style={{ padding: "5px", fontSize: "1.2rem" }}>Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          maxLength={30}
          onChange={handleChange}
          style={{padding: "5px",width: "85%",backgroundColor: "transparent",border: "none",color: "#e3fff3",fontSize: "1rem",borderBottom: "3px solid #e3fff3",}}
          placeholder="Enter a Name for the assignment"
          required/>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="date" style={{ padding: "5px", fontSize: "1.2rem" }}>Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleChange}
          min={defaultDate} 
          style={{padding: "5px",width: "45%",backgroundColor: "#c8e6ca",border: "none",borderRadius: "10px",color: "#2b2b2b",fontSize: "1rem",}}
          required/>
      </div>
    </div>
  );
}

export default NewAssignmentBox;
