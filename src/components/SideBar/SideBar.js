import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="images/background.jpg" alt="" />
        <Avatar src="images/me.jpg" className="sidebar__avatar" />
        <h2>Nader Elhaj</h2>
        <h4>Front End Developer</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">3,654</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <p className="sidebar__statNumber">5,734</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("ComputerScience")}
        {recentItem("Node.js")}
        {recentItem("CSS")}
        {recentItem("SoftwareEngeneering")}
      </div>
    </div>
  );
}

export default SideBar;
