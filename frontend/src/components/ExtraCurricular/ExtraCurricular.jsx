import React, { useState } from "react";
import Button from "@mui/material/Button";
// import "./extracurricular.css";

function ExtraCurricular() {
  const [selectedFile, setSelectedFile] = useState();

  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }
  return (
    <div className="ExtraCurr">
      <h2>Extra Curricular Activities</h2>
      <form className="form-container extracontainer">
        <div className="club">
          <p>1. Non-Tech Clubs/activities you are currently enrolled in</p>
          <input className="extrainput" type="checkbox" id="club1" name="club1" value="ArtCircle" />
          <label>Art Circle</label>

          <input className="extrainput"
            type="checkbox"
            id="club2"
            name="club2"
            value="DebSoc(DebateSociety)"
          />
          <label>Debate Society</label>

          <input className="extrainput" type="checkbox" id="club3" name="club3" value="Sports" />
          <label>Sports</label>
          <br />
          <input className="extrainput" type="checkbox" id="club4" name="club3" value="Sports" />
          <label>Pictoreal</label>
          <input className="extrainput" type="checkbox" id="club5" name="club3" value="Sports" />
          <label>TEDxPICT</label>
          <input className="extrainput" type="checkbox" id="club6" name="club3" value="Sports" />
          <label>MUN</label>
          <br />

          <input className="extrainput" type="checkbox" id="club7" name="club4" value="Other" />
          <label>Other</label>
          <br />
          <p>2. Other</p>
          <input 
            className="other"
            type="text"
            id="club8"
            placeholder="If other please specify"
            name="club4"
          />
        </div>
        <div>
          <p>3. Specify the role in respective club/activity</p>
          <input 
            className="role"
            type="text"
            placeholder="Member or Participation"
          />
        </div>
      </form>
      <div className="extra1">
        <Button
          className="extra"
          variant="contained"
          component="label"
          size="small"
        >
          <div className="uploadextra">
            <i class="fa-solid fa-upload"></i>
            Certificate
          </div>
          <input className="extrainput"
            hidden
            accept=".pdf"
            multiple
            type="file"
            onChange={changeHandler}
          />
          <span style={{ fontSize: "10px", color: "orange" }}>
            {selectedFile?.name}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ExtraCurricular;
