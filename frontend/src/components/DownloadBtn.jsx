import React from "react";
import '../css/DownloadBtn.css'

function DownloadBtn({ text, btnText , fileForDownload }) {
    const handleDownloadFile = () => {  
      if (!fileForDownload) {
        alert("No file available for download.");
        return;
    }

    const link = document.createElement("a");
    link.href = fileForDownload;
    link.download = fileForDownload.split("/").pop(); // Extracts filename from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-btn-cont">
      <p>{text}</p>
      <button onClick={handleDownloadFile}>{btnText}</button>
    </div>
  );
}
export default DownloadBtn;
