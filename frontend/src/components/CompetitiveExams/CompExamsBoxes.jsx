import { Button } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import "./CompExams.css";
import axios from "axios";
import DateInput from "./DateInput";
import moment from "moment-timezone";
import { Document, Page, pdfjs } from "react-pdf";

function CompExamsBoxes({ data, user }) {
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
    setUrl(data.file?.url);
    setOpen1(true);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `/api/internships/deleteInternship/${user._id}/${data._id}`
      );
      window.alert("Internship Details Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Currently Not able to delete the internship data");
    }
  };
  return (
    <div>
      <div className="compbox">
        <p>
          <b>Exam Name: </b>
          {data.exam}
        </p>
        <p>
          <b>Exam Date: </b>
          {moment(data.date).format("YYYY-MM-DD")}
        </p>
        <p>
          <b>Exam Score: </b>
          {data.score}
        </p>
        {data.file?.url && (
          <Button className="editbtn e1" onClick={handleOffer}>
            Proof
          </Button>
        )}
      </div>
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
          <Box className="boxmodal pdfbox">
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
  );
}

export default CompExamsBoxes;
