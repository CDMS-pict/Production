import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./CompExams.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import CompExamsBoxes from "./CompExamsBoxes";
import axios from "axios";
import DateInput from "./DateInput";

function CompExams({user}) {
  const [selectedFile, setSelectedFile] = useState("");
  const [exam_name, setExam_name] = useState("");
  const [date, setDate] = useState("");
  const [score, setScore] = useState("");

  const [sfilename, setFilename] = useState("");
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // filename = file.name;
    setFilename(file.name);
    console.log(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [datas, setDatas] = useState([]);
  // const [user, setUser] = useState("");

  // const refreshToken = async () => {
  //   const res = await axios
  //     .get("/api/students/refresh", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));

  //   const data = await res.data;
  //   return data;
  // };
  // useEffect(() => {
  //   const fetchInternships = async () => {
  //     try {
  //       const res = await axios.get(
  //         `/api/internships/getallStudentInternships/${user._id}`
  //       );
  //       setDatas(res.data);
  //       // console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchInternships();
  // });
  // const sendRequest = async () => {
  //   const res = await axios
  //     .get("/api/students/user", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // useEffect(() => {
  //   sendRequest().then((data) => setUser(data.user));
  // }, []);
  // console.log(user);
  const handleAddInternship = async (e) => {
    const data = {
      exam_name,
      date,
      score,
      offer_letter: selectedFile,
      student_id: user._id,
      student_name: user.fullname,
      student_div: user.div,
      student_branch: user.branch,
      student_roll: user.rollno,
      batch: user.batch,
      student_year: user.div[0] + user.div[1],
    };

    if (
      !exam_name ||
      !date ||
      !score ||
      !selectedFile
    ) {
      window.alert("All the fields are required");
      return;
    }
    try {
      // await axios.post("/api/internships/newInternship", data);
      window.alert("Internship Data Added Successfully");
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };

  return (
    <>
      <Navbar user={user} />
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Competitive Exams</p>
          <Button variant="contained" onClick={handleOpen}>
            Add{" "}
          </Button>
        </div>
      </div>
      <br />
      <br />
      <center>
        <div className="internshipboxes">
          {datas.map((d) => (
            <CompExamsBoxes data={d} user={user} />
          ))}
        </div>
      </center>
      <Modal
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="boxmodal">
            <center>
              <h2>Enter your competitive exam details</h2>

              <FormInput
                name="Exam Name"
                placeholder="Name of the Exam"
                onChange={(e) => setExam_name(e.target.value)}
              />
              {/* <FormInput
                name="Start Date"
                placeholder="Start Date"
                onChange={(e) => setStart_date(e.target.value)}
              /> */}
              {/* <FormInput
                name="End Date"
                placeholder="End date"
                onChange={(e) => setEnd_date(e.target.value)}
              /> */}
              <center>
                <DateInput
                  name="Date"
                  placeholder="Date"
                  label="Date of the Exam"
                  onChange={(e) => setDate(e.target.value)}
                />
              </center>
              <FormInput
                name="Score"
                placeholder="Score"
                onChange={(e) => setScore(e.target.value)}
              />
              <div className="intern1">
                <Button
                  id="outlined-btn"
                  variant="contained"
                  component="label"
                  size="small"
                  className="offerbtn"
                >
                  <div className="uploadmarksheet">
                    <i class="fa-solid fa-upload"></i>
                    Proof
                  </div>
                  <input
                    hidden
                    accept=".pdf"
                    multiple
                    type="file"
                    onChange={handleImage}
                  />
                </Button>
                {/* <br /> */}
                {/* <Button id="outlined-btn" variant="contained" size="small">
                  <div className="uploadoffer">
                    <i class="fa-solid fa-upload"></i>
                    Complition Letter
                    </div>
                    <input
                    hidden
                    accept=".pdf"
                    multiple
                    type="file"
                    onChange={changeHandler2}
                  />
                  <br />
                  <span style={{ fontSize: "10px", color: "orange" }}>
                    {selectedFile2?.name}
                  </span>
                </Button> */}
              </div>
              <span
                style={{ fontSize: "12px", color: "black", fontWeight: "600" }}
              >
                {sfilename}
              </span>
              <div className="submitbtndiv">
                <Button className="internsubtn" onClick={handleAddInternship}>
                  Submit
                </Button>
              </div>
            </center>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default CompExams;