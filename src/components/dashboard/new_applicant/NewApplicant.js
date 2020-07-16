import React from "react";

const NewApplicant = () => {
  const handleSubmit = () => {};
  const changeHandler = (ev) => {};
  return (
    <div className="dashboard-background">
      <div className="dashboard-containt">
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Applicant Name"
              name="name"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-calendar"></i>
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Applicant DOB"
              name="dob"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Father's Name"
              name="father"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mother's Name "
              name="father"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-edit"></i>
            </span>
            <input
              type="number"
              className="form-control"
              name="weight"
              placeholder="Enter Applicant Weight(KG)"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-edit"></i>
            </span>
            <input
              type="number"
              className="form-control"
              name="height"
              placeholder="Enter Applicant Height(CM) "
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-success form-control"
            value="Change Password"
          />
        </form>
      </div>
    </div>
  );
};

export default NewApplicant;
