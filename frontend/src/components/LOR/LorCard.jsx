import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import axios from "axios";

function LorCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdateR = async () => {
    try {
      await axios.put("/api/LOR/updatestatusR/" + data._id );
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateA = async () => {
    try {
      await axios.put("/api/LOR/updatestatusA/" + data._id );
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lcard" onClick={handleOpen}>
      <i class="fa-solid fa-file-lines"></i> &nbsp; &nbsp;
      <p>{data.program}</p>
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
          <Box className="boxmodal lorapplication">
            <h2>{data.program}{data.status==="Rejected" && <small style={{color: "Red"}}> &#10060; </small>}{data.status==="Pending" && <small style={{color: "Yellow"}}>  &#9632;</small>} {data.status==="Approved" && <small style={{color: "green"}}> &#x2713;</small>}</h2>
            <p>
              <b>Name :</b>
              {data.sname}
            </p>
            <p>
              <b>Year Of Passing : </b>
              {data.yearpassing}
            </p>
            <p>
              <b>Roll No : </b>
              {data.rollno}
            </p>
            <b>Contact : </b>
            {data.contact}
            <p>
              <b>Parent Contact : </b>
              {data.parentcontact}
            </p>
            <p>
              <b>Parent email : </b>
              {data.parentemail}
            </p>
            <p>
              <b>Address : </b>
              {data.address}
            </p>
            <br />
            <p>
              <h3>First Year</h3>
              <b>Year : </b>
              {data.year}
            </p>
            <p>
              <b>Marks : </b>
              {data.marks}
            </p>
            <p>
              <b>Percentage : </b>
              {data.percentage}
            </p>
            <br />
            <p>
              <h3>Second Year</h3>

              <b>Year : </b>
              {data.year1}
            </p>
            <p>
              <b>Marks : </b>
              {data.marks1}
            </p>
            <p>
              <b>Percentage : </b>
              {data.percentage1}
            </p>
            <br />

            <p>
              <h3>Third Year</h3>
              <b>Year : </b>
              {data.year2}
            </p>
            <p>
              <b>Marks : </b>
              {data.marks2}
            </p>
            <p>
              <b>Percentage : </b>
              {data.percentage2}
            </p>
            <br />
            <p>
              <h3 className="lorh">Fourth year</h3>
              <b>Year : </b>
              {data.year3}
            </p>
            <p>
              <b>Marks : </b>
              {data.marks3}
            </p>
            <p>
              <b>Percentage : </b>
              {data.percentage3}
            </p>

            <br />
            <p>
              <b>Email : </b>
              {data.email}
            </p>
            <p>
              <b>Exam : </b>
              {data.exam}
            </p>
            <p>
              <b>Faculty : </b>
              {data.faculty}
            </p>

            <p>
              <b>Enroll/Registeration No : </b>
              {data.enrollno}
            </p>
            <p>
              <b>Branch : </b>
              {data.branch}
            </p>
            <p>
              <b>Country : </b>
              {data.country}
            </p>

           {data.status==="Pending" && <div
              className="btndiva"
              style={{ display: "flex", float: "right", columnGap: "20px" }}
            >
              <Button variant="contained" onClick={()=>handleUpdateR("Rejected")} >Reject</Button>
              <Button variant="contained" onClick={()=>handleUpdateA("Approved")} >Aprrove</Button>
            </div>}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LorCard;
