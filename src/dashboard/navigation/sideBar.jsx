import React from "react";
import SideBarButton from "../components/sideBarItem";
 const SideBar = () => {
  return (
    <div className="w-[17vw] border-r-2 border-gray-300 min-h-screen flex flex-col justify-between py-[5vh]
    ] ">
      <div className="flex flex-col">
      <SideBarButton label="Dashboard" dropDownIcon={<i class={`bi bi-caret-down-fill`}></i>} icon={<i class="bi bi-columns-gap"></i>}/>
      <SideBarButton label="Restourant" dropDownIcon={<i class="bi bi-caret-down-fill"></i>} icon={<i class="bi bi-house"></i>}/>
      <SideBarButton label="Drivers" dropDownIcon={<i class="bi bi-caret-down-fill"></i>} icon={<i class="bi bi-bicycle"></i>}/>
      </div>
      <div className="mx-[1vw] mb-[2vh] text-gray-400 font-sans"> 
        <b className="text-base">Food Desk - Online Food Delivery Admin Dashboard</b>
        <p className="text-base">&copy; 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};
export default SideBar;