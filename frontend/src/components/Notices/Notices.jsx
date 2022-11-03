import { Button } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./notices.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";


function Notices({ user }) {
  const [open, setOpen] = React.useState(false);
  const [heading, setHeading] = React.useState("");
  const [desc, setDesc] = useState("");
  const [forw, setForw] = useState("");
  const [important, setImportant] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleaddNotice = async () => {
    const data = {
      heading,
      desc,
      forw,
      important,
      teacher_id: user._id,
      notice_by: user.fullname,
    };
    if (!heading || !desc || !forw) {
      window.alert("All the Fields are required");
      return;
    }
    try {
      await axios.post("/api/notices/newNotice", data);
      // console.log(data);
    } catch (err) {
      console.log(err);
      window.alert("Unable To Add a Notice");
    }
  };
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("/api/notices/getbyforw/" + user.branch);
        console.log(notices);
        setNotices(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotices();
  });
  const handleDelete = async(id)=>{
    try{
      console.log(id);
      await axios.delete("/api/notices/deleteNotice/"+id);
      window.alert("Notice Deleted Successfully");
    }
    catch(err){
      console.log(err);
      window.alert("Unable To Delete The Notice")
    }
  }
  console.log(user)
  return (
    <div>
      <Navbar />

      <div className="studentInternshipDashboard">
        <div className="dataheader" style={{paddingInline: "1%"}}>
          <p className="internship_data_header">Notices</p>
          {user.role==="teacher" && <Button variant="contained" onClick={handleOpen}>
            Add{" "}
          </Button>}
        </div>
      </div>

      <div className="noticebody">
        <div className="noticediv">
          {notices.map((n) => (
            <div className="notices">
                <Card variant="outlined" style={{height: "300px"}}>
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {n.forw}{n.important && <small className="imp">Important !</small>}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {n.heading}  
                      </Typography>
                     

                      <Typography
                        variant="body2"
                        style={{ whiteSpace: "break-spaces" }}
                      >
                        {n.desc}
                      </Typography>
                    </CardContent>
                    {n.teacher_id === user._id &&  <CardActions>
                      <Button size="small" onClick={()=>handleDelete(n._id)}>Delete</Button>
                    </CardActions>}
                  </React.Fragment>
                </Card>
            </div>
          ))}
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
          <Box className="boxmodal noticeboxmodal">
            <center>
              <h2>Add a Notice</h2>
              <input
                type="text"
                placeholder="Heading"
                className="noticeinput"
                onChange={(e) => setHeading(e.target.value)}
              />
              <Select
                value={forw}
                onChange={(e) => setForw(e.target.value)}
                className="select"
                displayEmpty
                style={{
                  fontSize: "14px",
                  color: "grey",
                  width: "100%",
                  marginBottom: "9px",
                  backgroundColor: "white",
                  height: "53px",
                  marginTop: "9px",
                  fontStyle: "none",
                  textAlign: "left",
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  To
                </MenuItem>
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"CS"}>CS</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"ENTC"}>ENTC</MenuItem>
              </Select>
              <div className="desc">
                <label htmlFor="">Description</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="checkbox">
                <input type="checkbox" onChange={() => setImportant(true)} />{" "}
                Marks as Important (optional)
              </div>
              <div className="submitbtndiv">
                <Button className="internsubtn" onClick={handleaddNotice}>
                  Submit
                </Button>
              </div>
            </center>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Notices;
