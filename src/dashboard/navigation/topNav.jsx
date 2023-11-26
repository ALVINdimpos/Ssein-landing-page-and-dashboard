import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "../components/Navbar.module.css";
import profileImg from "../../assets/image/man.jpg";
const NavBar = () => {
  const [disabled, setDisabled] = useState(true);
  const commonButtonStyles = {
    backgroundColor: "orange",
    border: "none",
    borderColor: "transparent",
    outline: "none",
  };

  const disabledButtonStyles = {
    opacity: 100,
    cursor: "not-allowed",
  };
  return (
    <div className="bg-orange-400 flex justify-between pt-[1rem] p-[3rem] text-white">
      <div className={classes.logoArea}>
        <p>ssein</p>
        <span>
          {" "}
          <i className="bi bi-list"></i>
        </span>
      </div>
      <Dropdown as={ButtonGroup}>
        <Button
          className={classes.profile}
          style={
            disabled
              ? { ...commonButtonStyles, ...disabledButtonStyles }
              : commonButtonStyles
          }
          disabled={disabled}
        >
          <img alt="hh" className={classes.profileImg} src={profileImg} />
          <span className={classes.username}>John Doe</span>
        </Button>
        <Dropdown.Toggle
          className={classes.profileDropdownToggle}
          style={{ backgroundColor: "orange", border: "none", outline: "none" }}
        />
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" className={classes.dropdownItem}>
            <span className={classes.dropIcon}>
              <i class="bi bi-person"></i>
            </span>{" "}
            Profile
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className={classes.dropdownItem}>
            {" "}
            <span className={classes.dropIcon}>
              <i class="bi bi-envelope"></i>
            </span>{" "}
            In box
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" className={classes.dropdownItem}>
            <span className={classes.dropIcon}>
              <i class="bi bi-pencil-square"></i>
            </span>{" "}
            Edit profile
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" className={classes.dropdownItem}>
            <span className={classes.dropIcon}>
              <i class="bi bi-chat-square-dots"></i>
            </span>{" "}
            Message
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" className={classes.dropdownItem}>
            <span className={classes.dropIcon}>
              <i class="bi bi-gear-fill"></i>{" "}
            </span>{" "}
            Settings
          </Dropdown.Item>
          <Dropdown.Item eventKey="6" className={classes.dropdownItem}>
            <span className={classes.dropIcon}>
              <i class="bi bi-box-arrow-left"></i>{" "}
            </span>{" "}
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default NavBar;
