import React from "react";
import { NavLink } from "react-router-dom";

export default function Dock() {
  return (
    <div className="side-nav">
      <ul className="nav navbar-nav">
        <li className="active dock-nav">
          <NavLink exact to="/dashboard/profile">
            Profile
          </NavLink>
        </li>
        <li className="dock-nav">
          <NavLink exact to="/dashboard/vaccination">
            Vaccination
          </NavLink>
        </li>
        <li className="dock-nav">
          <NavLink exact to="/dashboard/reminder">
            Reminder
          </NavLink>
        </li>
        <li className="dock-nav">
          <NavLink exact to="/dashboard/changepwd">
            Change Password
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
