import React from "react";
import classes from "./sideBar.module.css";
import SideBarButton from "./sideBarItem";
 const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
      <SideBarButton label="Dashboard" dropDownIcon={<i class={`bi bi-caret-down-fill ${classes.dropdownIcon}`}></i>} icon={<i class="bi bi-columns-gap"></i>}/>
      <SideBarButton label="Restourant" dropDownIcon={<i class="bi bi-caret-down-fill"></i>} icon={<i class="bi bi-house"></i>}/>
      <SideBarButton label="Drivers" dropDownIcon={<i class="bi bi-caret-down-fill"></i>} icon={<i class="bi bi-bicycle"></i>}/>
      <div className={classes.footer}> 
        <b>Food Desk - Online Food Delivery Admin Dashboard</b>
        <p>&nbsp;2022 All Rights Reserved</p>
      </div>
    </div>
    </div>
  );
};
export default SideBar;