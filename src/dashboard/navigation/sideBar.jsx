import React, { useState } from "react";
import SideBarButton from "../components/sideBarItem";
import { useSelector } from "react-redux";
import { Links } from "./Links";
const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const  [activeMenu,setActiveMenu] = useState("");
  const  [activeSubMenu,setActiveSubMenu] = useState("");
  const minimize = useSelector((state) => state.sidebar.minimize);
  return (
    <div
      className={`${
        minimize ? "w-fit" : "w-[18vw]"
      } border-r-2 border-gray-300 flex flex-col justify-between h-full  py-[5vh]
    `}
    >
      <div className="flex flex-col">
        {Links.map((link) => (
          <SideBarButton
            key={link.id}
            label={link.label}
            icon={link.icon}
            childLinks={link.adjacentLinks}
            clicked={isClicked === link.id}
            linkId={link.id}
            path={link.path}
            activeMenu={activeMenu}
            setIsClicked={setIsClicked}
            setActiveMenu={setActiveMenu}
            setActiveSubMenu={setActiveSubMenu}
            activeSubMenu={activeSubMenu}
          />
        ))}
      </div>
      <div
        className={`mx-[2vw] text-gray-400 font-sans ${
          minimize ? "hidden" : "block"
        }`}
      >
        <b className="text-sm">
          Food Desk - Online Food Delivery Admin Dashboard
        </b>
        <p className="text-sm">&copy; 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};
export default SideBar;
