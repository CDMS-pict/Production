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
    let getOtp = false;
    let sendingOTP = false;
    const { values, inputChange } = this.props;

    const handleFinal = async(e)=>{
      e.preventDefault();
      try{
        console.log(values);
        await axios.post("/api/students/signupVerify",values);
        window.alert("Signup successfull");
        window.location.replace("/");
      }
      catch(err){
        console.log(err);
        window.alert("Verification failed , please try again");
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      // if(values.collegeId)
      sendingOTP = true;
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
        // await axios.post("/api/students/signup", values);
        await axios.post("/api/students/signupOTP", values);
        sendingOTP = false;
        getOtp = true;
        window.alert("OTP Sent Successfully");
        this.continue(e);
        // window.location.replace("/");
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
            {getOtp === false ? (
              <>
                <div className="form-group">
                  <label className="signuplabel" htmlFor="facebook">
                    Branch
                  </label>
                  <Select
                    value={values.branch}
                    onChange={inputChange("branch")}
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
                    }}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      Branch
                    </MenuItem>
                    <MenuItem value={"FE"}>FE</MenuItem>
                    <MenuItem value={"CS"}>CS</MenuItem>
                    <MenuItem value={"IT"}>IT</MenuItem>
                    <MenuItem value={"ENTC"}>ENTC</MenuItem>
                  </Select>
                </div>

                <div className="form-group">
                  <label className="signuplabel" htmlFor="github">
                    Division
                  </label>
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
                    <button
                      className="loginbtn btn1 btnback"
                      onClick={this.back}
                    >
                      {"<"}
                    </button>
                    <button className="loginbtn btn1" onClick={handleSubmit}>
                      {sendingOTP === true ? "Sending OTP" : "Submit"}
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
              </>
            ) : (
              <div className="form-group">
                <label className="" htmlFor="OTP">
                 <center>
                 <b>College ID verification</b>
                  <br/>
                  Enter an OTP sent to {values.collegeId};
                 </center>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="OTP"
                  onChange={inputChange("otp")}
                  value={values.otp}
                  placeholder="OTP"
                />
                 <div className="row">
                  <div className="col-12 back_continue" style={{justifyContent: "center"}}>
                   
                   <button className="loginbtn btn1" onClick={handleFinal}>
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
