import { Button } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "../Student_Internships/FormInput";
import "./amcat1.css";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";

function AmcatBox({ data, user }) {
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

  const handleOffer = () => {
    setUrl(data.dashboard?.url);
    setOpen1(true);
  };
  const handleCompletion = () => {
    setUrl(data.report?.url);
    setOpen1(true);
  };
  const [english, setEnglish] = useState("");
  const [logical, setLogical] = useState("");
  const [quantitative, setQuantitative] = useState("");
  const [critical, setCritical] = useState("");
  const [cprog, setCprog] = useState("");
  const [automata, setAutomata] = useState("");
  const [internets, setInternets] = useState("");
  const [average, setAverage] = useState("");

  const [sfilename, setFilename] = useState("");
  const [selectedFile2, setSelectedFile2] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // filename = file.name;
    setFilename(file.name);
    console.log(file);
  };
  function changeHandler(event) {
    setSelectedFile2(event.target.files[0]);
  }
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

  const handleUpdateAmcat = async (e) => {
    const datas = {
      dashboard: selectedFile2,
      report: selectedFile1,
      student_id: user._id,
    };
    const form_data = {
      english: english !== "" ? english : data.english ? data.english : "",
      logical: logical !== "" ? logical : data.lological ? data.lological : "",
      quantitative:
        quantitative !== ""
          ? quantitative
          : data.quantitative
          ? data.quantitative
          : "",
      automata: automata !== "" ? automata : data.automata ? data.automata : "",
    };

    try {
      await axios.put(`/api/amcat/updateAmcatInfo/${data._id}`, form_data);
      if (selectedFile) {
        await axios.put(`/api/amcat/updateamcat/${data._id}`, data);
      }
      console.log(form_data);
      window.alert("Amcat Data Updated Successfully");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/amcat/deleteAmcat/${data._id}`);
      window.alert("Amcat Details Deleted Successfully");
      // window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Currently Not able to delete the amcat data");
    }
  };
  var en = data.english;
  var qn = data.quantitative;
  var lo = data.logical;
  var avgelq =( (en+qn+lo) /27);
  console.log(data);
  return (
    <div className="abox">
      <div className="amcatbox">
        <div className="amcatboxtop"></div>
        <br />
        <div className="amcatbox_desc">
          <p>
            <b>English Comprehension: {data.english}</b>
          </p>
          <p>
            <b>Logical Ability: {data.logical} </b>
          </p>
          <b>Quantitaive Ability: {data.quantitative} </b>
          <p>
            <b>Automata: {data.automata}</b>
          </p>
          <p>
            <b>Average ELQ:  {avgelq}</b>
          </p>
        </div>
        <div className="editbtndiv">
          <Button
            variant="outlined"
            className="editbtn e1"
            onClick={handleOffer}
          >
            Dashboard
          </Button>

          <Button
            variant="outlined"
            className="editbtn e1"
            onClick={handleCompletion}
          >
            Report{" "}
          </Button>

          {/* <Button variant="outlined" className="editbtn" onClick={handleOpen}>
            Edit{" "}
          </Button> */}
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
            <Box className="amcatboxmodal">
              <center>
                <h2>Edit Amcat details</h2>
                <FormInput
                  name="English Comprehension"
                  placeholder="Enter Your English Comprehension marks"
                  // defaultValue={data.english}
                  // disabled
                  onChange={(e) => setEnglish(e.target.value)}
                />

                <FormInput
                  name="Logical Ability"
                  placeholder="Enter your Logical Ability marks"
                  // defaultValue={data.logical}
                  // disabled
                  onChange={(e) => setLogical(e.target.value)}
                />
               
                <FormInput
                  name="Quantitaive Ability"
                  placeholder="Enter your Quantitative Ability marks"
                  // defaultValue={data.quantitative}
                  // disabled
                  onChange={(e) => setQuantitative(e.target.value)}
                />
               
                <FormInput
                  name="Automata"
                  placeholder="Enter your Automata marks"
                  // defaultValue={data.automata}
                  // disabled
                  onChange={(e) => setAutomata(e.target.value)}
                />
                

                <div className="submitbtndiv">
                  <Button className="internsubtn" onClick={handleUpdateAmcat}>
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
            <Box className="amcatboxmodal pdfbox">
              {url && <Button onClick={onButtonClick}>Download PDF</Button>}
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdfdoc"
              >
                <Page pageNumber={pageNumber} />
              </Document>
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
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default AmcatBox;
