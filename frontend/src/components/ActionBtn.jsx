import React from "react";
import '../css/ActionBtn.css'

function ActionBtn({txt,handleClick}){
    const possibleTxt = ['View',  'Entries']

    return(
        <div className="action-btn">
            <button type="submit" onClick={handleClick}>{txt ? txt : possibleTxt[0]}</button>
        </div>
    )
}

export default ActionBtn;