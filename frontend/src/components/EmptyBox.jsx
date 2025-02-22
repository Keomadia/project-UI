import React from "react";

const EmptyBox = ({text}) => {    
      return (
        <>
          <div style={{minHeight : "350px" , width : "100%" , display : 'flex', justifyContent: "center", alignItems: "center" , background: "#023e7d" , borderRadius: "10px" , marginTop:"30px"}}>
             <h1 style={{color : "white" , fontSize: "2.6rem", fontFamily: "monospace"}}>{text}</h1>
          </div>
        </>
      );
    };


export default EmptyBox;
