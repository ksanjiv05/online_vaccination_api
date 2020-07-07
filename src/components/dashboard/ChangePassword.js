import React from "react";

export default function ChangePassword({ value }) {
  return (
    <div className="dashboard-background">
      <center>
        <div className="dashboard-containt">
          <form>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Current Password"
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
              />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}
