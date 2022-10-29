import { MenuItem, Select, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Navbar from "../../../navbar/Navbar";

function Students_data() {
  const [age, setAge] = React.useState("");

  const divs = [
    "TE1",
    "TE2",
    "TE3",
    "TE4",
    "TE5",
    "TE6",
    "TE7",
    "TE8",
    "TE9",
    "TE10",
    "TE11",
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Full name", width: 250 },
    {
      field: "div",
      headerName: "Division",
      width: 90,
    },
    { field: "branch", headerName: "Branch", width: 90 },
    { field: "rollno", headerName: "Roll No", width: 90 },
    { field: "college_id", headerName: "College ID", width: 90 },
  ];

  const rows = [
    {
      id: 1,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 2,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 3,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 4,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 5,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 6,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 7,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 8,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
    {
      id: 9,
      fullname: "lorem xyz abcd",

      branch: "ENTC",
      div: "TE7",
    },
  ];

  return (
    <div>
      <Navbar />
      <center>
        <h2 style={{ marginTop: "3%" }}>Students Data</h2>
      </center>
      <div className="t_dashboard">
        <p>
          Filter By<i class="fa-solid fa-filter"></i>
        </p>
        {/* <span>Search By</span> */}
        <div className="search_filters">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
          />
          {/* <div className="bydiv"> */}
          {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}

          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Division</em>
            </MenuItem>
            {}
            {divs.map((d) => (
              <MenuItem value={d}>{d}</MenuItem>
            ))}
          </Select>
          {/* </div> */}
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Branch</em>
            </MenuItem>
            <MenuItem value={"CS"}>CS</MenuItem>
            <MenuItem value={"IT"}>IT</MenuItem>
            <MenuItem value={"ENTC"}>ENTC</MenuItem>
          </Select>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Year</em>
            </MenuItem>
            <MenuItem value={"FE"}>FE</MenuItem>
            <MenuItem value={"SE"}>SE</MenuItem>
            <MenuItem value={"TE"}>TE</MenuItem>
            <MenuItem value={"BE"}>BE</MenuItem>
          </Select>
        </div>

        {/* // internship data table */}

        <div style={{ height: 500, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
          />
        </div>
      </div>
    </div>
  );
}

export default Students_data;
