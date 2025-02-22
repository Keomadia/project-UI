import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/course";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { UserProvider} from './UserContext'
function App() {
 

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard  />} />
          <Route path="/course" element={<Course  />} />
          <Route path="/outline" element={<Course  />} />
          <Route path="/assignment" element={<Assignment  />} />
          <Route path="/profile" element={<Profile  />} />
          <Route path="/login/lecturer" element={<Login val={true} />} />
          <Route path="/login/student" element={<Login  val={false} />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
