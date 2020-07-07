import React from "react";

const Login = () => {
  return (
    <div className="login_background_image">
      <div className="login_background">
        <form className="login_form">
          <div className="form-group">
            <label>Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
