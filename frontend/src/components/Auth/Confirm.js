import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, password, branch, clgid, div, roll },
    } = this.props;

    return (
      <div className="app">
        <div className="form-container">
          <h1 className="mb-5">Confirm</h1>
          <ul class="list-group">
            <li class="list-group-item">Name: {name}</li>
            <li class="list-group-item">Email: {email}</li>
            <li class="list-group-item">Password: {password}</li>
            <li class="list-group-item">
              Branch <a href={branch}>{branch}</a>
            </li>
            <li class="list-group-item">
              CollegeId<a href={clgid}>{clgid}</a>
            </li>
            <li class="list-group-item">
              Div<a href={div}>{div}</a>
            </li>
            <li class="list-group-item">
              RollNo<a href={roll}>{roll}</a>
            </li>
          </ul>

          <br />
          <br />

          <div className="row">
            <div className="col-6">
              <button className="btn btn-danger" onClick={this.back}>
                Back
              </button>
            </div>
            <div className="col-6 text-right">
              <button className="btn" onClick={this.continue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
