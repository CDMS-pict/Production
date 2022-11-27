import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Batch({ batch }) {
  const [age, setAge] = React.useState("");
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(
        "/api/students/getdivStudents/" + batch.batchdiv
      );
      setStudents(res.data);
    };
    fetchStudents();
  });
  const handleChange = async () => {};
  const handleAdd = async (id) => {
    const data = {
      students: [id],
    };
    try {
      await axios.put(`/api/batches/addstudents/${batch.batchid}`, data);
      console.log("Student added Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  let stddata = [];
  useEffect(() => {
    // let res;
    const getStudents = async () => {
      try {
        let res;
        for (let i = 0; i < batch.students.length; i++) {
          // console.log(batch.students[i]);
          res = await axios.get("/api/students/getStudent/" + batch.students[i]);
          const ddata = res.data;
          stddata.push({d:ddata});
          // console.log(ddata);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getStudents();
  });
  console.log(stddata);
  return (
    <div className="batchc">
      <h2>{batch.batchname}</h2>
      <div className="bcompo">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{ width: "300px" }}
        >
          <MenuItem value="">
            <em>Add Student</em>
          </MenuItem>

          <MenuItem value={"Approved"} className="mitems">
            <div className="contents">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Sr No.</TableCell>
                      <TableCell align="left">Student Name</TableCell>
                      <TableCell align="left">Student Div</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{row.rollno}</TableCell>
                        <TableCell align="left">{row.fullname}</TableCell>
                        <TableCell align="left">{row.div}</TableCell>
                        <TableCell align="left">
                          <Button onClick={() => handleAdd(row.collegeId)}>
                            Add
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </MenuItem>
        </Select>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Sr No.</TableCell>
              <TableCell align="left">Student Name</TableCell>
              <TableCell align="left">Student Div</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="left">{row.rollno}</TableCell>
                <TableCell align="left">{row.fullname}</TableCell>
                <TableCell align="left">{row.div}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleAdd(row.collegeId)}>Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Batch;
