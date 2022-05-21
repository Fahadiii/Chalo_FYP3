import "./View_UserInfo.css";
import React from "react";
import Dashboard from "../../components/Dashboard_admin/Dashboard";
import { Link } from "react-router-dom";

const View_UserInfo = () => {
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Tour Guide Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Loading"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Shaista Ali</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Shaista@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">0308-6345640</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">I-10,Islamabad</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div>
            <Link to="add_package" className="link">
              Add New
            </Link>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Packages Uploaded By Tour Guide</h1>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default View_UserInfo;
