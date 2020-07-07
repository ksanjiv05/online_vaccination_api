import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
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
  );
}
