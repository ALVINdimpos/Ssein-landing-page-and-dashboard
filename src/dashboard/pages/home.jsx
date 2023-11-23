import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/sideBar";
import classes from "./DashbordHome.module.css";

const Dashboard = () => {
  return (
    <div className={classes.layout}>
      <NavBar />
      <div className={classes.body}>
        <div className={classes.container}>
          <SideBar />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
