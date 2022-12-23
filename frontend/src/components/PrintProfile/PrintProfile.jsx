import React, { useEffect, useState } from "react";
import "./printprofile.css";
import moment from "moment-timezone";
import axios from "axios";

function PrintProfile({ user }) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axios.get(
          `/api/internships/getallStudentInternships/${user._id}`
        );
        setDatas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInternships();
  });

  return (
    <div
      className="printprofilepage"
      onPointerMove={() => (
        window.print(), window.location.replace("/dashboard")
      )}
    >
      <div className="printpage page1">
        <small
          style={{ right: "0", position: "absolute", marginRight: "20px" }}
        >
          Page 1
        </small>
        <div className="headdiv">Personal Details</div>
        {/* <hr /> */}
        <div className="personaldetails">
          <div className="imgdiv">
            <div className="pimg">
              <img src={user.profile.url} alt="" />
            </div>
          </div>
          <div className="pdetailsdiv">
            <div className="pt1">
              <div className="fullname">
                <div className="label">Full Name</div>
                <p>{user.fullname}</p>
                <div className="label">Mail ID</div>
                <p>{user.mail}</p>
              </div>
              <div className="fullname">
                <div className="label">ABC ID</div>
                <p>{user.abcID}</p>
                <div className="label">College ID</div>
                <p>{user.collegeId}</p>
              </div>
            </div>

            <div className="pt1">
              <div className="fullname">
                <div className="label">Gender </div>
                <p>{user.gender}</p>
                <div className="label">Aadhar no</div>
                <p>{user.aadhar}</p>
              </div>
              <div className="fullname">
                <div className="label">Category</div>
                <p>{user.category}</p>
                <div className="label">PAN no</div>
                <p>{user.pan}</p>
              </div>
              <div className="fullname">
                <div className="label">Blood Group</div>
                <p>{user.blood_grp}</p>
                <div className="label">DOB</div>
                <p>{user && moment(user.DOB).format("YYYY-MM-DD")}</p>
              </div>
              <div className="fullname">
                <div className="label">PWD</div>
                <p>{user.PWD}</p>
                <div className="label">Mobile no</div>
                <p>{user.mobile_no}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="headdiv">Academic Details</div>
        <div className="personaldetails">
          <div className="fullname">
            <div className="label">10th : </div>
            <p>{user.tenth_p_c} %</p>
            <div className="label">12th : </div>
            <p>{user.twelth_p_c} %</p>
          </div>
          <div className="fullname">
            <div className="label">Sem 1 : </div>
            <p>{user.sem1Sgpa > 0 ? user.sem1Sgpa : "-"} sgpa</p>
            <div className="label">Sem 2 : </div>
            <p>{user.sem2Sgpa > 0 ? user.sem2Sgpa : "-"} sgpa</p>
          </div>
          <div className="fullname">
            <div className="label">Sem 3 : </div>
            <p>{user.sem3Sgpa > 0 ? user.sem3Sgpa : "-"} sgpa</p>
            <div className="label">Sem 4 : </div>
            <p>{user.sem4Sgpa > 0 ? user.sem4Sgpa : "-"} sgpa</p>
          </div>
          <div className="fullname">
            <div className="label">Sem 5 : </div>
            <p>{user.sem5Sgpa > 0 ? user.sem5Sgpa : "-"} sgpa</p>
            <div className="label">Sem 6 : </div>
            <p>{user.sem6Sgpa > 0 ? user.sem6Sgpa : "-"} sgpa</p>
          </div>
          <div className="fullname">
            <div className="label">Sem 7 : </div>
            <p>{user.sem7Sgpa > 0 ? user.sem7Sgpa : "-"} sgpa</p>
            <div className="label">Sem 8 : </div>
            <p>{user.sem8Sgpa > 0 ? user.sem8Sgpa : "-"} sgpa</p>
          </div>
        </div>
        {/* <hr /> */}
        <div className="headdiv">Internships </div>
        <div className="personaldetails interndetails">
          {datas.map((d) => (
            <div className="interndiv">
              <div className="internshipb">
                <div className="label">Company Name : {d.company_name} </div>
                <div className="label">
                  Start Date : {moment(d.start_date).format("YYYY-MM-DD")} to{" "}
                  {moment(d.end_date).format("YYYY-MM-DD")}{" "}
                </div>
              </div>
              <div className="label">Role : {d.role} </div>
              <div className="label">Status : {d.status} </div>
              <div className="label">Stipend : {d.stipend} </div>
              <div className="label">Duration : {d.duration} </div>
              <div className="label">Description : {d.desc} </div>
            </div>
          ))}
        </div>
      </div>
      <div className="printpage2 page2">
        <small
          style={{ right: "0", position: "absolute", marginRight: "20px" }}
        >
          Page 2
        </small>

        <div className="headdiv">Next</div>
      </div>
    </div>
  );
}

export default PrintProfile;
