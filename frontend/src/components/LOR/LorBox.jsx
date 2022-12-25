import { Button } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

import FormInput from "../Student_Internships/FormInput";
import "./lor.css";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";

function LorBox({ data, user }) {
  const [selectedFile, setSelectedFile] = useState("");
  const [open1, setOpen1] = React.useState(false);
  const [url, setUrl] = useState("");
  const handleClose1 = () => setOpen1(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // console.log(data);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = url;
        alink.setAttribute("Download", user.rollno + "_Marksheet");
        alink.click();
      });
    });
  };

  
  const [name, setName] = useState("");
  const [yearpassing, setYearpassing] = useState("");
  const [rollno, setRollno] = useState("");
  const [contact, setContact] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [parentcontact,setParentcontact] = useState("");
  const [address, setAddress] = useState("");
  const [year,setYear] = useState("");
  const [marks,setMarks] = useState("");
  const [percentage,setPercentage] = useState("");
  const [year1,setYear1] = useState("");
  const [marks1,setMarks1] = useState("");
  const [percentage1,setPercentage1] = useState("");

  const [year2,setYear2] = useState("");
  const [marks2,setMarks2] = useState("");
  const [percentage2,setPercentage2] = useState("");

  const [year3,setYear3] = useState("");
  const [marks3,setMarks3] = useState("");
  const [percentage3,setPercentage3] = useState("");
  const [faculty,setFaculty] = useState("");
  const [exam,setExam] = useState("");

  const [email, setEmail] = useState("");
  const [enrollno, setEnrollno] = useState("");
  const [program, setProgram] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

  const handleUpdateLor = async (e) => {
    
    const form_data = {
        name: name !== "" ? name : data.name ? data.name : "",
        yearpassing: yearpassing !== "" ? yearpassing : data.yearpassing ? data.yearpassing : "",
        rollno:
      rollno !== ""
          ? rollno
          : data.rollno
          ? data.rollno
          : "",
          contact: contact !== "" ? contact : data.contact ? data.contact : "",
          address: address !== "" ? address : data.address ? data.address : "",
          email: email !== "" ? email : data.email ? data.email : "",
          enrollno:
          enrollno !== "" ? enrollno : data.enrollno ? data.enrollno : "",
          program: program !== "" ? program : data.program ? data.program : "",
          parentemail: parentemail !== "" ? parentemail : data.parentemail ? data.parentemail : "",
          parentcontact: parentcontact !== "" ? parentcontact : data.parentcontact ? data.parentcontact : "",
          year: year !== "" ? year : data.year ? data.year : "",
          marks: marks !== "" ? marks : data.marks ? data.marks : "",
          percentage: percentage !== "" ? percentage : data.percentage ? data.percentage : "",
          year1: year1 !== "" ? year1 : data.year1 ? data.year1 : "",
          marks1: marks1 !== "" ? marks1 : data.marks1 ? data.marks1 : "",
          percentage1: percentage1 !== "" ? percentage1 : data.percentage1? data.percentage1 : "",
          year2: year2 !== "" ? year2 : data.year2 ? data.year2 : "",
          marks2: marks2 !== "" ? marks2 : data.marks2 ? data.marks2 : "",
          percentage2: percentage2 !== "" ? percentage2 : data.percentage2 ? data.percentage2 : "",
          year3: year3 !== "" ? year3 : data.year3 ? data.year3 : "",
          marks3: marks3 !== "" ? marks3 : data.marks3 ? data.marks3 : "",
          percentage3: percentage3 !== "" ? percentage3 : data.percentage3 ? data.percentage3 : "",
          
          faculty: faculty !== "" ? faculty : data.faculty ? data.faculty : "",
          exam: exam !== "" ? exam : data.exam ? data.exam : "",


    };

    try {
      await axios.put(
        `/api/lor/updateLorInfo/${data._id}`,
        form_data
      );
      if (selectedFile) {
        await axios.put(`/api/lor/updatelor/${data._id}`, data);
      }
      console.log(form_data);
      window.alert("LOR Data Updated Successfully");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `/api/lor/deleteLor/${user._id}/${data._id}`
      );
      window.alert("Amcat Details Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Currently Not able to delete the lor data");
    }
  };
  return (
    <div>
      <div className="lorbox">
        <div className="lorboxtop">
        </div>
        <br />
        <div className="lorbox_desc">
          <p>
             <b>Name:</b> 
          </p>
          <p>
            <b>Year Of Passing: </b> 
          </p>
          <p>
            <b>Roll No: </b> 
          </p>
          <b>Contact: </b> 
          <p>
            <b>Parent Contact: </b>
            
          </p>
          <p>
            <b>Parent email: </b>
            
          </p>
          <p>
            <b>Address: </b>
            
          </p>
          <p>
            <h3>First Year</h3>
            <b>Year: </b>
            
          </p>
          <p>
            <b>Marks: </b>
            
          </p>
          <p>
            <b>Percentage: </b>
            
          </p>
          <p>
          <h3>Second Year</h3>

            <b>Year: </b>
            
          </p>
          <p>
            <b>Marks: </b>
            
          </p>
          <p>
            <b>Percentage: </b>
            
          </p>

          <p>
            <h3>Third Year</h3>
            <b>Year: </b>
            
          </p>
          <p>
            <b>Marks: </b>
            
          </p>
          <p>
            <b>Percentage: </b>
            
          </p>
          <p>
            <h3 className="lorh">Fourth year</h3>
            <b>Year: </b>
            
          </p>
          <p>
            <b>Marks: </b>
            
          </p>
          <p>
            <b>Percentage: </b>
            
          </p>
          
          <p>
            <b>Email: </b>
           
          </p>
          <p>
            <b>Exam: </b>
            
          </p>
          <p>
            <b>Faculty: </b>
            
          </p>

          <p>
            <b>Enroll/Registeration No: </b>
           
          </p>
          <p>
            <b>Program: </b>
            
          </p>
        </div>
        <div className="editbtndiv">
          
           
          
          <Button variant="outlined" className="editbtn" onClick={handleOpen}>
            Edit{" "}
          </Button>
          <Button variant="outlined" className="editbtn" onClick={handleDelete}>
            Delete{" "}
          </Button>
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
            <Box className="lorboxmodal">
              <center>
                <h2>Edit Lor details</h2>
                <FormInput
                  name="Name"
                  placeholder="Enter your name"
                //   defaultValue={data.name}
                  
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  name="Year of passing"
                  placeholder="Enter your year of passing"
                //   defaultValue={data.yearpassing}
                
                  onChange={(e) => setYearpassing(e.target.value)}
                />
                <FormInput
                  name="Roll No"
                  placeholder="Enter your Roll No./PRN no."
                //   defaultValue={data.rollno}
              
                  onChange={(e) => setRollno(e.target.value)}
                />
                <FormInput
                  name="Contact"
                  placeholder="Enter your mobile number"
                //   defaultValue={data.contact}
                  
                  onChange={(e) => setContact(e.target.value)}
                />
                 <FormInput
                  name="Parent Contact"
                  placeholder="Enter your parent contact number"
                
             
                
                  onChange={(e) => setParentcontact(e.target.value)}
                />
                 <FormInput
                  name="Parent Email"
                  placeholder="Enter your parent email address"
                
             
                
                  onChange={(e) => setParentemail(e.target.value)}
                />
                <FormInput
                  name="Address"
                  placeholder="Enter your corresponding address"
                //   defaultValue={data.address}
                  
                  onChange={(e) => setAddress(e.target.value)}
                />
                 <FormInput
                  name="Year"
                  placeholder="Enter the year"
                
             
                
                  onChange={(e) => setYear(e.target.value)}
                />
                 <FormInput
                  name="Marks"
                  placeholder="Marks(Obtained /Total)"
                
             
                
                  onChange={(e) => setMarks(e.target.value)}
                />
                 <FormInput
                  name="Percantage"
                  placeholder="Enter your percentage"
                
             
                
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <FormInput
                  name="Year"
                  placeholder="Enter the year"
                
             
                
                  onChange={(e) => setYear1(e.target.value)}
                />
                 <FormInput
                  name="Marks"
                  placeholder="Marks(Obtained /Total)"
                
             
                
                  onChange={(e) => setMarks1(e.target.value)}
                />
                 <FormInput
                  name="Percantage"
                  placeholder="Enter your percentage"
                
             
                
                  onChange={(e) => setPercentage1(e.target.value)}
                />
                <FormInput
                  name="Year"
                  placeholder="Enter the year"
                
             
                
                  onChange={(e) => setYear2(e.target.value)}
                />
                 <FormInput
                  name="Marks"
                  placeholder="Marks(Obtained /Total)"
                
             
                
                  onChange={(e) => setMarks2(e.target.value)}
                />
                 <FormInput
                  name="Percantage"
                  placeholder="Enter your percentage"
                
             
                
                  onChange={(e) => setPercentage2(e.target.value)}
                />
                <FormInput
                  name="Year"
                  placeholder="Enter the year"
                
             
                
                  onChange={(e) => setYear3(e.target.value)}
                />
                 <FormInput
                  name="Marks"
                  placeholder="Marks(Obtained /Total)"
                
             
                
                  onChange={(e) => setMarks3(e.target.value)}
                />
                 <FormInput
                  name="Percantage"
                  placeholder="Enter your percentage"
                
             
                
                  onChange={(e) => setPercentage3(e.target.value)}
                />
                 
                <FormInput
                  name="Email"
                  placeholder="Enter your email Id"
                //   defaultValue={data.email}
                 
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <FormInput
                  name="Exam"
                  placeholder="Enter your Exam name"
                
             
                
                  onChange={(e) => setExam(e.target.value)}
                />
                 <FormInput
                  name="Faculty"
                  placeholder="Enter the Faculty name"
                
             
                
                  onChange={(e) => setFaculty(e.target.value)}
                />
                <FormInput
                  name="Enroll No"
                  placeholder="Enter your enroll No"
                //   defaultValue={data.enrollno}
                  
                  onChange={(e) => setEnrollno(e.target.value)}
                />
                <FormInput
                  name="Program"
                  placeholder="Enter your program"
                
             
                
                  onChange={(e) => setProgram(e.target.value)}
                />


                
                
                <br />
                
               

                <div className="submitbtndiv">
                  <Button className="internsubtn" onClick={handleUpdateLor}>
                    Update
                  </Button>
                </div>
              </center>
            </Box>
          </Fade>
        </Modal>
        <Modal
          aria-describedby="transition-modal-description"
          open={open1}
          onClose={handleClose1}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open1}>
           
              
              <div className="change_page_div">
                <p
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="direction"
                >
                  {"<"}
                </p>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <p
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="direction"
                >
                  {">"}
                </p>
              </div>
            
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default LorBox;
