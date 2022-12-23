import React, { useState } from "react";
import "./amcat.css";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AmcatBox from "./AmcatBox";

import Navbar from "../navbar/Navbar";
function AmcatDetails() {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }
  function changeHandler2(event) {
    setSelectedFile2(event.target.files[0]);
  }
  return (
    <div>
      <Navbar />
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Amcat Details</p>
          <Button variant="contained" onClick={handleOpen}>
            Add{" "}
          </Button>
        </div>
      </div>

      <div className="aboxes">
        
      <div className="abox1">
      <AmcatBox/>
      <AmcatBox/>
      <AmcatBox/>
      </div>
      </div>

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
          <Box className="boxmodal boxmodal12" >
            <center>
              <h2>Amcat Details</h2>
              <form className="">
                <div className="Amcat1">
                  <label htmlFor="english">English Comprehension</label>
                  <input
                    type="number"
                    placeholder="English Comprehension Marks"
                    name="english"
                    id="english"
                  />

                  <label htmlFor="logic">Logical Ability</label>
                  <input
                    type="number"
                    placeholder="Logical Ability Marks"
                    name="logic"
                    id="logic"
                  />

                  <label htmlFor="quantitative">Quantitative Ability</label>
                  <input
                    type="number"
                    placeholder="Quantitative Ablility Marks"
                    name="quantitative"
                    id="quantitative"
                  />

                  <label htmlFor="critical">Critical Reasoning</label>
                  <input
                    type="number"
                    placeholder="Critical Reasoning Marks"
                    name="critical"
                    id="critical"
                  />

                  <label htmlFor="cpp">C++ Programming</label>
                  <input
                    type="number"
                    placeholder="C++ Programming Marks"
                    name="cpp"
                    id="cpp"
                  />

                  <label htmlFor="automata">Automata</label>
                  <input
                    type="number"
                    placeholder="Automata Marks"
                    name="automata"
                    id="automata"
                  />

                  <label htmlFor="internet">Internet Ability Simulation</label>
                  <input
                    type="number"
                    placeholder="Internet Ability Simulation Marks"
                    name="internet"
                    id="internet"
                  />

                  <label htmlFor="internet">ELQ Average</label>
                  <input
                    type="number"
                    placeholder="(EC+LA+QA)/27"
                    name="internet"
                    id="internet"
                  />
                </div>
                <div className="button">
                  <Button
                    className="button1"
                    variant="contained"
                    component="label"
                    size="small"
                  >
                    <div className="uploadoffer">
                      <i class="fa-solid fa-upload"></i>
                      Amcat Report
                    </div>
                    <input
                      hidden
                      accept=".pdf"
                      multiple
                      type="file"
                      onChange={changeHandler}
                    />
                    <span style={{ fontSize: "10px", color: "orange" }}>
                      {selectedFile?.name}
                    </span>
                  </Button>
                  <Button
                    className="button2"
                    variant="contained"
                    component="label"
                    size="small"
                  >
                    <div className="uploadoffer">
                      <i class="fa-solid fa-upload"></i>
                      Dashboard
                    </div>
                    <input
                      hidden
                      accept=".pdf"
                      multiple
                      type="file"
                      onChange={changeHandler2}
                    />

                    <span style={{ fontSize: "10px", color: "orange" }}>
                      {selectedFile2?.name}
                    </span>
                  </Button>
                </div>
                <br />
                <Button className="internsubtn" >
                  Submit
                </Button>
              </form>
            </center>
          </Box>
        </Fade>
      </Modal>

    </div>
  );
}

export default AmcatDetails;
