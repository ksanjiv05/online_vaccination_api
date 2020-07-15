import React, { useState } from "react";
import axios from "axios";
import config from "../config";
//require("dotenv").config();

const Login = () => {
  const [data, setData] = useState({});
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // if (data.pwd !== data.cpwd) {
    //   alert("Password did not match ");
    //   return;
    // }
    console.log(config.base_url);
    console.log(process.env.BASE_URL);
    const options = {
      method: "POST",
      url: config.base_url + "/api/signin",
      data: data,
      // headers: {
      //   Accept: "application/json",
      //   Authorization: "Bearer " + req.body.access_token,
      // },
    };
    console.log(data);
    const result = await axios(options)
      .then(function (responce) {
        console.log("success");
        //console.log(responce.data,req.body.userid);
        console.log(responce);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login_background_image">
      <div className="login_background">
        <form className="login_form" onSubmit={(ev) => handleSubmit(ev)}>
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="email"
              className="form-control"
              name="username"
              onChange={(ev) => changeHandler(ev)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(ev) => changeHandler(ev)}
            />
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
