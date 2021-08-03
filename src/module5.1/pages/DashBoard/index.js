import React from "react";
import Body from "../../Components/Body";
import Sidebar from "../../Components/SideBar";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="nav-bar">
        <Sidebar />
      </nav>
      <div className="body">
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
