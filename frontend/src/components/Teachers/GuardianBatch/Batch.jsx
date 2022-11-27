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
  // console.log(batch);
  const [age, setAge] = React.useState("");
  const [students, setStudents] = useState([]);
  const [adding,setAdding] = useState(false);
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
  const handleAdd = async (row) => {
    const data = {
      students: {
        collegeId: row.collegeId,
        name: row.fullname,
        rollno: row.rollno,
        div: row.div,
      },
      students_mail:[
        row.collegeId
      ],
      parents_mail:[
        row.father_mail,
        row.mother_mail
      ]

    };
    // console.log(data);
    try {
      // console.log(data);
      await axios.put(`/api/batches/addstudents/${batch.batchid}`, data);
      setAdding(true);
      console.log("Student added Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  const stddata = batch.students;
 
  const [rollno,setRollno] = useState("");
  stddata.sort((a,b)=>(a.rollno < b.rollno ? -1 : 1));
  return (
    <div className="batchc">
      <h2>{batch.batchname}</h2>
      <div className="bcompo">
        <Select
          value={age}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{ width: "300px" }}
        >
          <MenuItem value="">
            <em>Add Student</em>
          </MenuItem>
          <center>
            <input style={{ width: "300px" }} placeholder="Enter roll no" onChange={(e)=>setRollno(e.target.value)} />
          </center>
          <MenuItem className="mitems">
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
                      row.rollno == rollno && <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{row.rollno}</TableCell>
                        <TableCell align="left">{row.fullname}</TableCell>
                        <TableCell align="left">{row.div}</TableCell>
                        <TableCell align="left">
                          <Button onClick={() => handleAdd(row)}>{adding===true ? "Added" : "Add"}</Button>
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
            {stddata.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="left">{row.rollno}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.div}</TableCell>
                <TableCell align="left">
                  {/* <Button onClick={() => handleAdd(row)}>Add</Button> */}
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
