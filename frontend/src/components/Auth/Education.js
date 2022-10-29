import React, { Component } from "react";
import axios from "axios";
import logo from "../../pict_logo.jpg";

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
    const { values, inputChange } = this.props;
    const handleSubmit = async (e) => {
      e.preventDefault();
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
              <h4>Digital Academic Passport</h4>
            </center>
            <br />
            <h1 className="mb-5">Sign Up</h1>
            {/* <br /> */}
            <div className="form-group">
              <label className="signuplabel" htmlFor="facebook">Branch</label>
            <br />
              <input
                type="text"
                className="form-control"
                name="branch"
                onChange={inputChange("branch")}
                value={values.branch}
                placeholder="Branch"
              />
            </div>
            {/* <div className="form-group">
                    <label htmlFor="twitter">CollegeId</label>
                    <br />
                    <input type="text" className="form-control" name="id" onChange={inputChange('id')} value={values.id} />
                </div> */}
            <div className="form-group">
              <label className="signuplabel" htmlFor="github">Division</label>
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
              <label className="signuplabel" htmlFor="github">Roll No</label>
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
