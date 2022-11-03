import React, { useEffect, useState } from "react";
import "./s_dashboard.css";
import Boxes from "../Boxes/Boxes";
import Profile from "../Profile/Profile";
import Navbar from "../navbar/Navbar";
import Badge from "@mui/material/Badge";
import axios from "axios";

function StudentDashboard({ student }) {
  const student_box_contents = [
    { title: "Personal Details", url: "/student/personaldetails" },
    { title: "Academic Details", url: "/student/Academics" },
    { title: "Placement Details", url: "" },
    { title: "Extra Curricular", url: "/student/extracurricular" },
    { title: "Internship data", url: "/student/internship" },
    { title: "Competitive Exams", url: "" },
    { title: "Technical Activities", url: "" },
    { title: "LOR Application", url: "" },
    { title: "Amcat Details", url: "" },
    { title: "Print Profile", url: "/student/printprofile" },
    { title: "Notices", url: "/notices" },
  ];
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("/api/notices/getbyforw/" + student.branch);
        console.log(notices);
        setNotices(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotices();
  });
  const length = notices.length;
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
              <>
                {s.title === "Notices" ? (
                  <Badge badgeContent={length} color="error">
                    <Boxes title={s.title} url={s.url} />
                  </Badge>
                ) : (
                  <Boxes title={s.title} url={s.url} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
