import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" exact to="/">
                Online Vaccination
              </NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/help">
                  Help
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink exact to="/reg">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="navbar-container-collasp">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink className="navbar-brand" exact to="/">
                Online Vaccination
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                {/* <li className="active">
                  <a href="#">Home</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#">
                    Page 1 <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Page 1-1</a>
                    </li>
                    <li>
                      <a href="#">Page 1-2</a>
                    </li>
                    <li>
                      <a href="#">Page 1-3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li> */}
                <li className="active">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/help">
                    Help
                  </NavLink>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink exact to="/reg">
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/login">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
