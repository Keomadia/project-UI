import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../csspages/Login.css'
import { UserContext } from "../UserContext";
import { getPersonRole } from "../utils/helpers";

const Login = ({val = false }) => {
  const navigate = useNavigate();
  const { setRole } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();  
    setRole({username: username, role: getPersonRole()}); 
    navigate("/");  
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input 
            type="password" 
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="link-container">
            <a href="#">Reset Password?</a>
            <a href="#">Are you a Student?</a>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
