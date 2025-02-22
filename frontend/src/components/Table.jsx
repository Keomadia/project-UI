import React from "react";
import "../css/Table.css";
import { capitalizeKey } from "../utils/helpers";

const Table = ({ obj }) => {

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>S/N</th>
          {obj.length > 0 &&
            Object.keys(obj[0]).map((element, idx) => <th key={idx}>{capitalizeKey(element)}</th>)}
        </tr>
      </thead>
      <tbody>
        {obj.map((val, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.values(val).map((value, idx) => (
              <td key={idx}>{value.toString().trim() !== "" ? value : 'N/A'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
