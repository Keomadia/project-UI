import React from "react";
import "../css/Table.css";
import ActionBtn from './ActionBtn'
import { useNavigate } from "react-router-dom";
const AssTable = ({ obj }) => {

  const navigate = useNavigate();

  const goToPage = () => {navigate("/assignment")}

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>S/N</th>
          {obj.length > 0 &&
            Object.keys(obj[0]).map((lem, idx) => <th key={idx}>{lem}</th>)}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {obj.map((val, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.values(val).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            <td><ActionBtn txt={"View"} handleClick={goToPage} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssTable;
