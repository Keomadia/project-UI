import React, { useState } from "react";
import "../css/UploadBox.css";

const UploadBox = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileUpload(selectedFile);
 
  };

  return (
    <div className="upload-box">
      <h2>Upload Your Assignment</h2>
      <div className="file-input">
        <label>Select File</label>
        <input type="file" accept=".pdf,.docx,.zip,.pptx" onChange={handleFileChange} />
      </div>
      <p className="note">
        <strong>Note:</strong> Allowed formats: <strong>PDF, DOCX, ZIP, PPTX</strong> | Max size: <strong>15MB</strong>
      </p>
    </div>
  );
};

export default UploadBox;
