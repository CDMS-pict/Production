import React, { Component } from "react";
import axios from "axios";
import logo from "../../pict_logo.jpg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export class Education extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    let alert;
    const { values, inputChange } = this.props;
    const handleSubmit = async (e) => {
      e.preventDefault();
      // if(values.collegeId)
      const collegeID = values.collegeId;
      const extension = collegeID.split("@")[1];
      if (extension !== "ms.pict.edu") {
        window.alert("Enter a Valid Collge ID");
        return;
      }
      if (values.rollno < 10000 && values.rollno > 99999) {
        window.alert("Enter a Valid 5 Digit Roll No");
        return;
      }
      // if(values.branch !== "CS" || values.branch !== "IT" || values.branch !== 'ENTC' ){

      //   window.alert(values.branch + " Enter a Valid Branch");
      //   return;
      // }
      const plength = values.password;
      if (plength.length < 6 || plength.length > 10) {
        window.alert("Enter Password of atleast 6 and atmost 10 charachters");
        return;
      }
      values.rollno = parseInt(values.rollno);
      console.log(values);
      try {
        await axios.post("/api/students/signup", values);
        window.alert("SignUp Successful");
        window.location.replace("/login");
      } catch (err) {
        console.log(err);
        window.alert("Something Went's Wrong");
      }
    };
    return (
      <div className="app ">
        <div className="form-container form">
          <div className="loginform">
            <center>
              <img className="logoimg" src={logo} alt="" />
              <h3>Digital Academic Passport</h3>
            </center>
            {/* <br /> */}
            <h2 className="mb-2">Sign Up</h2>
            {/* <br /> */}
            <div className="form-group">
              <label className="signuplabel" htmlFor="facebook">
                Branch
              </label>
              {/* <br /> */}
              {/* <input
                type="text"
                className="form-control"
                name="branch"
                onChange={inputChange("branch")}
                value={values.branch}
                placeholder="Branch"
              /> */}
              <Select
                value={values.branch}
                onChange={inputChange("branch")}
                displayEmpty
                style={{ width: "100%", color: "black", marginBottom: "9px" , backgroundColor: "white", border: "1px solid whitesmoke" }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Branch</em>
                </MenuItem>
                <MenuItem value={"CS"}>CS</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"ENTC"}>ENTC</MenuItem>
              </Select>
              {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Branch"
                label="Branch"
                onChange={inputChange("branch")}
                style={{ width: "100%", color: "black" }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"CS"}>CS</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"ENTC"}>ENTC</MenuItem>
              </Select> */}
            </div>
            {/* <div className="form-group">
                    <label htmlFor="twitter">CollegeId</label>
                    <br />
                    <input type="text" className="form-control" name="id" onChange={inputChange('id')} value={values.id} />
                </div> */}
            <div className="form-group">
              <label className="signuplabel" htmlFor="github">
                Division
              </label>
              {/* <br /> */}
              <input
                type="text"
                className="form-control"
                name="div"
                onChange={inputChange("div")}
                value={values.div}
                placeholder="Division (eg.TE7)"
              />
            </div>
            <div className="form-group">
              <label className="signuplabel" htmlFor="github">
                Roll No
              </label>
              {/* <br /> */}
              <input
                type="number"
                className="form-control"
                name="roll"
                onChange={inputChange("rollno")}
                value={values.rollno}
                placeholder="Roll Number"
              />
            </div>

            <div className="row">
              <div className="col-12 back_continue">
                <button className="loginbtn btn1 btnback" onClick={this.back}>
                  {"<"}
                </button>
                <button className="loginbtn btn1" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <p style={{ color: "red", textAlign: "center" }}>{alert}</p>
              <br />
              <center>
                <p>
                  Already have an account ? <a href="/login">Login</a>
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
