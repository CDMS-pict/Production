import React from "react";
import "./profile.css";
import defaultimg from "./default_userimg.png";
import axios from "axios";
import moment from "moment-timezone";
axios.defaults.withCredentials = true;
// let firstRender = true;
function Profile({ user }) {

  // console.log(user);
  return (
    <div className="profile">
      <div className="img_div">
        <div className="profileimg">
          {user?.profile ? (
            <img src={user?.profile.url} alt="Default Img" />
          ) : (
            <img src={defaultimg} alt="Default Img" />
          )}
        </div>
      </div>
      <div className="short_details">
        <p>
          <div className="name_student">{user?.fullname}</div>{" "}
          {user?.collegeId} <br />
          <b>Mobile no.</b>
          {user?.mobile_no}
        </p>
        {/* <br /> */}
        <p>
          <b>DOB</b> : {user && moment(user?.DOB).format("YYYY-MM-DD")} <br />
          <b>Gender</b>: {user?.gender} <br />
          <b>Category</b>: {user?.category} <br />
          <b>PAN</b> : {user?.pan}
        </p>
        {/* <br /> */}
        <p>
          <b>College</b> <br /> SCTR's Pune Institute of Computer Technology ,
          Dhankawadi , Pune
        </p>
        {/* <br /> */}
        <p>
          <b>Current</b> <br /> {user?.temporary_address}
        </p>
      </div>
      {/* <div className="view_more">
        <i class="fa-solid fa-chevron-down"></i>
      </div> */}
    </div>
  );
}

export default Profile;
