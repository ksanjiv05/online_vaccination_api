import React, { useState } from "react";

export default function ChangePassword({ value }) {
  const [data, setData] = useState({});
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (data.pwd !== data.cpwd) {
      alert("Password did not match ");
      return;
    }
    console.log(data);
  };
  return (
    <div className="dashboard-background">
      <center>
        <div className="dashboard-containt">
          <form onSubmit={(ev) => handleSubmit(ev)}>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Current Password"
                name="currentpwd"
                onChange={(ev) => changeHandler(ev)}
              />
            </div>
            <br></br>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                name="pwd"
                onChange={(ev) => changeHandler(ev)}
              />
            </div>
            <br></br>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Retype Password"
                name="cpwd"
                onChange={(ev) => changeHandler(ev)}
              />
              <br />
              <input
                type="submit"
                className="btn btn-success form-control"
                value="Change Password"
              />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}
