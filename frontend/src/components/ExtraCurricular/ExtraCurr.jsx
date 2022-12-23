import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./ExtraCurr.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import ExtraCurrBoxes from "./ExtraCurrBoxes";
import axios from "axios";
import DateInput from "./DateInput";

function ExtraCurricular({user}) {
  const [selectedFile, setSelectedFile] = useState("");
  const [organization, setOrganization_name] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");

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


  const handleAddExtraC = async (e) => {
    const data = {
      organization,
      role,
      desc,
      sdate:start_date,
      edate:end_date,
      student_id:user._id,
      file:selectedFile,
      sname:user.fullname,
      sdiv:user.div,
      srollno:user.rollno,
      sbatch:user.batch,
    };

    if (
      !organization ||
      !start_date ||
      !end_date ||
      !role ||
      !desc ||
      !selectedFile
    ) {
      window.alert("All the fields are required");
      return;
    }
    try {
      await axios.post("/api/extracurricular/newExtrac", data);
      window.alert("Internship Data Added Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar user={user} />
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Extracurricular Activities</p>
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
            <ExtraCurrBoxes data={d} user={user} />
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
              <h2>Extracurricular Activity details</h2>

              <FormInput
                name="Company Name"
                placeholder="Name of the organization"
                onChange={(e) => setOrganization_name(e.target.value)}
              />
              <FormInput
                name="Role"
                placeholder="Role"
                onChange={(e) => setRole(e.target.value)}
              />

              <FormInput
                name="Description"
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}
              />

              <center>
                <DateInput
                  name="Start Date"
                  placeholder="Start Date"
                  label="Start Date"
                  onChange={(e) => setStart_date(e.target.value)}
                />
                <DateInput
                  name="Start Date"
                  placeholder="End Date"
                  label="End Date"
                  onChange={(e) => setEnd_date(e.target.value)}
                />
              </center>
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
              </div>
              <span
                style={{ fontSize: "12px", color: "black", fontWeight: "600" }}
              >
                {sfilename}
              </span>
              <div className="submitbtndiv">
                <Button className="internsubtn" onClick={handleAddExtraC}>
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

export default ExtraCurricular;
