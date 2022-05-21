import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Admin_portal.css";
import Dashboard from "../../components/Dashboard_admin/Dashboard";
import User_portal from "../UserPage/User_portal";

const Admin_portal = () => {
  return (
    <>
      <Link to="/User_portal">
        <button className="btn btn-success mr-2" type="submit">
          <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Goto User
          DashBoard
        </button>
      </Link>

      <Dashboard />
    </>
  );
};

export default Admin_portal;
