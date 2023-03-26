import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "../../LOR/lorapplication.css";
import LorCard from "../../LOR/LorCard";
import axios from "axios";

function Lors({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchactivites = async () => {
      try {
        let cid = user.collegeId;
        
        const res = await axios.get(`/api/LOR/getbytid/${cid}`);
        setDatas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchactivites();
  },[]);
  return (
    <>
      <Navbar user={user} />
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Letter of Recommandation</p>
        </div>
      </div>
      <h2>Pending</h2>
      <div className="lorcards">
        {datas.map(
          (data) => data.status === "Pending" && <LorCard data={data} />
        )}
       
      </div>
      <br />
      <br />
      <br />
      <h2>Approved</h2>
      <div className="lorcards">
        {datas.map(
          (data) => data.status === "Approved" && <LorCard data={data} />
        )}
      </div>
      <br/>
     
     
      <h2>Rejected</h2>
      <div className="lorcards">
        {datas.map(
          (data) => data.status === "Rejected" && <LorCard data={data} />
        )}
      </div>
      
      {/* <LorBox /> */}
    </>
  );
}

export default Lors;
