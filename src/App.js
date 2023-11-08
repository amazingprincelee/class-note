import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminArea from "./components/admin/AdminArea";
import StudentArea from "./components/student/StudentArea";
import TeacherArea from "./components/teachers/TeachersArea";
import Courses from "./components/courses/Courses";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-area" element={<AdminArea />} />
          <Route path="/student-area" element={<StudentArea />} />
          <Route path="/teacher-area" element={<TeacherArea />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
