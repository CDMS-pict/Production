import React from "react";
import "./s_dashboard.css";
import Boxes from "../Boxes/Boxes";
import Profile from "../Profile/Profile";
import Navbar from "../navbar/Navbar";

function StudentDashboard({student}) {
  const student_box_contents = [
    { title: "Personal Details", url: "/student/personal_details" },
    { title: "Academic Details", url: "/student/Academics" },
    { title: "Placement Details", url: "" },
    { title: "Extra Curricular", url: "" },
    { title: "Internship data", url: "/student/internship" },
    { title: "Competitive Exams", url: "" },
    { title: "Technical Activities", url: "" },
    { title: "LOR Application", url: "" },
    { title: "Notices", url: "" },
  ];

  return (
    <div className="sdashboard">
      <Navbar />

      <div className="student_dashboard">
        <div className="profile_div">
          <Profile student={student} />
        </div>
        <div className="student_dashboard_contents">
          <div className="years">
            <h3>Students Dashboard</h3>
          </div>
          <div className="boxes_div">
            {student_box_contents.map((s) => (
              <Boxes title={s.title} url = {s.url}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
