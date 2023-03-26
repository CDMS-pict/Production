import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Checkbox, Select } from "@mui/material";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@mui/material/MenuItem";

const faculties = [
  { Name: "Charlie", id: "e2k20104080@pict.edu" },
  { Name: "Dr. S. T. Gandhe", id: "principal@pict.edu" },
  { Name: "Dr. Y. Ravinder", id: "yravinder@pict.edu" },
  { Name: "Dr. G. S. Mundada", id: "gsmundada@pict.edu" },
  { Name: "Dr. S. R.  Ranade", id: "srranade@pict.edu" },
  { Name: "Dr. S. S. Narkhede", id: "ssnarkhede@pict.edu"},
  { Name: "Dr. R. Sreemathy", id: "rsreemathy@pict.edu"},
  { Name: "Dr. M. V. Munot", id: "mvmunot@pict.edu"},
  { Name: "Dr. R. C. Jaiswal", id:"rcjaiswal@pict.edu"},
  { Name: "Dr. S. K. Moon", id: "skmoon@pict.edu"},
  { Name: "Dr. P. S. Varade", id: "psvarade@pict.edu"},
  { Name: "Dr. S. V. Gaikwad", id: "svgaikwad@pict.edu"},
  { Name: "Mr. R. G. Yelalwar", id: "rgyelalwar@pict.edu"},
  { Name: "Dr. M. P. Turuk", id: "mpturuk@pict.edu"},
  { Name: "Ms. M. R. Kale", id: "mskale@pict.edu"},
  { Name: "Mr. N. B. Patil", id: "nbpatil@pict.edu"},
  { Name: "Mr. V. B. Vaijapurkar", id: "vbvaijapurkar@pict.edu"},
  { Name: "Ms. A. M. Kulkarni", id: "amkulkarni@pict.edu"},
  { Name: "Dr. M. A. Gangarde", id: "magangarde@pict.edu"},
  { Name: "Mr. A. S. Ingole", id: "asingole@pict.edu"},
  { Name: "Mr. D. M. Shinde", id: "dmshinde@pict.edu"},
  { Name: "Mr. L. P. Patil", id: "lppatil@pict.edu"},
  { Name: "Mr. S. S. Khot", id: "sskhot@pict.edu"},
  { Name: "Mr. A. S. Ramteke", id: "asramteke@pict.edu"},
  { Name: "Mr. S. D. Hake", id: "sdhake@pict.edu"},
  { Name: "Mr. R. J. Sutar", id: "rjsutar@pict.edu"},
  { Name: "Mr. N. S. Shirude", id: "nsshirude@pict.edu"},
  { Name: "Mr. R. N. Shriwas", id: "rnshriwas@pict.edu"},
  { Name: "Mr. H. S. Thakar", id: "hsthakar@pict.edu"},
  { Name: "Ms. S. M. Hosamani", id: "smhosamani@pict.edu"},
  { Name: "Mr. S. K. Choubey", id: "skchoubey@pict.edu"},
  { Name: "Mr. S. N. Upasani", id: "snupasani@pict.edu"},
  { Name: "Mrs. Ankita K. Patel", id: "akpatel@pict.edu"},
  { Name: "Mr. Chetan C. Pawar", id: "ccpawar@pict.edu"},
  { Name: "Ms. B. D. Kadam", id: "bdkadam@pict.edu"},
  { Name: "Mr. M. N. Kakade", id: "mnkakade@pict.edu"},
  { Name: "Mr. H. B. Mali", id: "hbmali@pict.edu"},
  { Name: "Mr. S. S. More", id: "ssmore@pict.edu"},
  { Name: "Dr. A. V. Rajput", id: "avrajput@pict.edu"},
  { Name: "Ms. P. B. Tathe", id: "pbtathe@pict.edu"},
  { Name: "Ms. J. M. Sandur", id: "jmsandur@pict.edu"},
  { Name: "Dr. D. D. Pradhan", id: "ddpradhan@pict.edu"},
  { Name: "Ms. S. S. Vasekar", id: "ssvasekar@pict.edu"},
  { Name: "Ms. M. J. Sagade", id: "mssagade@pict.edu"},
  { Name: "Ms. S. V. Shinkar", id: "svshinkar@pict.edu"},
  { Name: "Mr. N. G. Nirmal", id: "ngnirmal@pict.edu"},
  { Name: "Mr. A. R. Gangajaliwale", id: "argangajaliwale@pict.edu"},
  { Name: "Mrs. A. A. Gawari", id: "aagawari@pict.edu"},
  { Name: "Dr. P. B. Pawar", id: "pbpawar@pict.edu"},
  { Name: "Ms. V. A. Patil", id: "vapatil@pict.edu"},
  { Name: "Ms. K. M. Masal", id: "kmmasal@pict.edu"},
  { Name: "Ms. H. S. Jain", id: "hsjain@pict.edu"},
  { Name: "Ms. P. S. Dhumal", id: "psdhumal@pict.edu"},
  { Name: "Mr. M. A. Chimanna", id: "machimanna@pict.edu"},
  { Name: "Dr. Abinash Panda", id: "apanda@pict.edu"},
  { Name: "Ms. P. S. Gham", id: "psgham@pict.edu"},
];
export class ThirdStep extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Container maxWidth="sm" className="mrugank2">
        <h1>Letter Of Recommendation</h1>
        <h2>
          GRE/TOEFL/IELTS/GMAT Exam Score and Select the Faculty for LOR Request
        </h2>
        <div
          className="formmrug2"
          name="exam"
          onChange={handleChange("exam")}
          defaultValue={values.exam}
        >
          <label className="mrugank5">Select the exam(only one )</label>
          <br />
          <div className="examname">
            <label htmlFor="">GRE</label>
            <Checkbox value="GRE" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">TOEFL</label>
            <Checkbox value="TOEFL" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">IELTS</label>
            <Checkbox value="IELTS" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">GMAT</label>
            <Checkbox value="GMAT" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">GATE</label>
            <Checkbox value="GATE" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">CAT</label>
            <Checkbox value="CAT" onChange={handleChange("exam")} />
          </div>
          <div className="examname">
            <label htmlFor="">OTHER</label>
            <Checkbox value="OTHER" onChange={handleChange("exam")} />
          </div>
        </div>
        <TextField
          className="formmrug"
          label="Enter the exam register number or enroll no"
          name="enrollno"
          onChange={handleChange("enrollno")}
          defaultValue={values.enrollno}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          className="formmrug"
          label="Enter the your exam score (Obtained/Total)"
          name="score"
          onChange={handleChange("score")}
          defaultValue={values.score}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        {/* <TextField
          className="formmrug"
          label="Select the Faculty "
          name="faculty"
          onChange={handleChange("faculty")}
          defaultValue={values.faculty}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        /> */}

        <select
          onChange={handleChange("faculty")}
          style={{
            fontSize: "14px",
            color: "grey",
            width: "100%",
            marginBottom: "9px",
            backgroundColor: "white",
            height: "53px",
            marginTop: "9px",
            fontStyle: "none",
            paddingLeft: "5px",
            backgroundColor: "whitesmoke"
          }}
          data-live-search="true"
          data-live-search-style="startsWith"
        >
          <option display>Faculties</option>
          {faculties.map((f) => (
            <option value={f.id}>{f.Name}</option>
          ))}
        </select>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={this.back}
            variant="contained"
            style={{
              marginRight: "1rem",
              backgroundColor: "#1a4870",
              color: "white",
            }}
          >
            Back
          </Button>
          <Button
            onClick={this.next}
            style={{ backgroundColor: "#1a4870", color: "white" }}
            variant="contained"
          >
            Next
          </Button>
        </div>
      </Container>
    );
  }
}

export default ThirdStep;
