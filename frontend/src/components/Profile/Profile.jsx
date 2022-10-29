import React, { useEffect, useState } from "react";
import "./profile.css";
import defaultimg from "./default_userimg.png";
import axios from "axios";
import moment from "moment-timezone";
axios.defaults.withCredentials = true;
// let firstRender = true;
function Profile({ student }) {
  const [user, setUser] = useState();

  // const refreshToken = async () => {
  //   const res = await axios
  //     .get("/api/students/refresh", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));

  //   const data = await res.data;
  //   return data;
  // };
  const sednRequest = async () => {
    const res = await axios
      .get("/api/students/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sednRequest().then((data) => setUser(data.user));
  }, []);
  return (
    <div className="profile">
      <div className="img_div">
        <div className="profileimg">
          {user?.profile ? (
            <img src={user.profile.url} alt="Default Img" />
          ) : (
            <img src={defaultimg} alt="Default Img" />
          )}
        </div>
      </div>
      <div className="short_details">
        <p>
          <div className="name_student">{user && user.fullname}</div>{" "}
          {user && user.collegeId} <br />
          <b>Mobile no.</b>
          {user && user.mobile_no}
        </p>
        {/* <br /> */}
        <p>
          <b>DOB</b> : {user && moment(user.DOB).format("YYYY-MM-DD")} <br />
          <b>Gender</b>: {user && user.gender} <br />
          <b>Category</b>: {user && user.category} <br />
          <b>PAN</b> : {user && user.pan}
        </p>
        {/* <br /> */}
        <p>
          <b>College</b> <br /> SCTR's Pune Institute of Computer Technology ,
          Dhankawadi , Pune
        </p>
        {/* <br /> */}
        <p>
          <b>Current</b> <br /> {user && user.temporary_address}
        </p>
      </div>
      {/* <div className="view_more">
        <i class="fa-solid fa-chevron-down"></i>
      </div> */}
    </div>
  );
}

export default Profile;
