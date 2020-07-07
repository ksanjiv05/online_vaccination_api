import React from "react";

export default function Profile({ value }) {
  return (
    <>
      <div className="profile">
        <center>
          <div className="profile-img">
            <img
              src={require("../../static/images/logo192.JPG")}
              alt="profie"
              className="dashboard-profile"
            />
          </div>
          <div className="profile-details">
            <h2>Sanjiv kumar pandit</h2>
            <p>
              <b>Date of Birth </b> : 02/02/1997{" "}
            </p>
            <p>
              <b>Email </b>: mr.Sanjiv05@gmail.com
            </p>
            <p>
              <b>Mobile Number </b>: 9540991156
            </p>
            <p>
              <b>City</b>: Delhi
            </p>
            <p>
              <b>State</b>: Delhi
            </p>
            <p>
              <b>Pincode</b>: 110008
            </p>
            <p>
              <b>Gender</b>: Male
            </p>
          </div>
        </center>
      </div>
    </>
  );
}
