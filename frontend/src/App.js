import "./App.css";
import "./index.css";
import StudentDashboard from "./components/Student/StudentDashboard";
import LoginForm from "./components/Auth/LoginForm";
// import PersonalInfo from './components/Auth/PersonalInfo';

import Form from "./components/Auth/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicDetails from "./components/AcademicDetails/AcademicDetails";
import StudentInternships from "./components/Teachers/DashBoard_Components/Student_Internships";
import TeachersDashboard from "./components/Teachers/Teachers_Dashboard";
import Studentsdata from "./components/Teachers/DashBoard_Components/Students_data.jsx/Students_data";
import Internship from "./components/Student_Internships/Internship";
import PersonalDetails from "./components/PersonalDetails/Personal_Details";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import ExtraCurricular from "./components/ExtraCurricular/ExtraCurricular";
import PrintProfile from "./components/PrintProfile/PrintProfile";
import Notices from "./components/Notices/Notices";
// import { selectUser } from "./store/store";

// import Student_Internships from "./components/Teachers/DashBoard_Components/Student_Internships";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const [student, setStudent] = useState();

  console.log(isLoggedIn);

  // console.log(isLoggedIn);
  // console.log(student);
  const [user, setUser] = useState();

  // const refreshToken = async () => {
  //   const res = await axios
  //     .get("/api/students/refresh", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));

  //   const data = await res.data;
  //   return data;
  // };
  const sednRequest = async () => {
    try {
      const res = await axios
        .get("/api/students/user", {
          withCredentials: true,
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sednRequest().then((data) => setUser(data.user));
  }, []);

  // const usertrue = localStorage.getItem("user");
  // console.log(usertrue)
  return (
    <div className="App">
      <Router>
        {user ? (
          <Routes>
            {/* <Route exact path="/" element={<LoginForm />} /> */}
            <Route exact path="/dashboard" element={<StudentDashboard student={user}/>} />
            <Route exact path="/" element={<StudentDashboard student={user}/>} />
            <Route exact path="/signup" element={<Form />} />
            <Route
              exact
              path="/student/Academics"
              element={<AcademicDetails user={user} />}
            />
            <Route
              exact
              path="/student/personaldetails"
              element={<PersonalDetails  />}
            />
            <Route
              exact
              path="/student/printprofile"
              element={<PrintProfile user={user} />}
            />
            <Route exact path="/notices" element={<Notices user={user} />} />
            <Route exact path="/student/internship" element={<Internship />} />
            {/* <Route exact path="/student/extracurricular" element={<ExtraCurricular />} /> */}
            <Route
              exact
              path="/teachersdashboard"
              element={<TeachersDashboard />}
            />
            <Route
              exact
              path="/teachersdashboard/internship"
              element={<StudentInternships />}
            />
            <Route
              exact
              path="/teachersdashboard/students"
              element={<Studentsdata />}
            />
            {/* <Route path="*" element={<StudentDashboard />} /> */}
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/signup" element={<Form />} />
            <Route exact path="/" element={<LoginForm />} />
            {/* <Route exact path="/dashboard" element={<LoginForm />} />
            <Route exact path="/student/Academics" element={<LoginForm />} />
            <Route exact path="/student/personaldetails" element={<LoginForm />} />
            <Route exact path="/student/internship" element={<LoginForm />} />
            <Route exact path="/teachersdashboard" element={<LoginForm />} />
            <Route exact path="/teachersdashboard/internship" element={<LoginForm />} />
            <Route exact path="/teachersdashboard/students" element={<LoginForm />} /> */}
            {/* <Route exact path="/teachersdashboard/students" element={<LoginForm />} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
