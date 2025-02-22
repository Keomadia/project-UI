import react from 'react';
import '../css/Box.css';

function Box({title, lecturer, code}) {
    return (
        <a className="box" href={!lecturer ? "/outline" : '/course'} >
            <div className="main-box">
                <h3>{code}</h3>
            </div>
            <div className="sub-box">
                <h3>{title ? title : ' '}</h3>
                <p>{lecturer ? `Lecturer : ${lecturer}` : ' '}</p>
            </div>
        </a>
        
    );
}

export default Box; 