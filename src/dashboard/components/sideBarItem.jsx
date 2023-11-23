import React from 'react';
import classes from "./sideBar.module.css";
const SideBarButton = ({
    icon,
    label,
    dropDownIcon,
  }) => {
    return (
    <div className={classes.menu}>
      <button
        data-testid="button"
        className={classes.button}
       
      >
        {icon}
        <span className={icon ? "ml-3" : `ml-7`}>{label}</span>
      </button>
      <span
        >
          {dropDownIcon}
        </span>
      </div>
    );
  };
  export default SideBarButton;