import React from "react";
const SideBarButton = ({ icon, label, dropDownIcon }) => {
  return (
    <div className="flex flex-col">
      <div className="flex mx-[1vw] justify-between bg-orange-400 my-2 p-3 rounded text-white">
        <button className="flex gap-2  text-lg font-semibold font-sans">
          <span>{icon}</span>
          <span
            className={
              icon ? "ml-3 hover:text-orange-500" : `ml-7 hover:text-orange-500`
            }
          >
            {label}
          </span>
        </button>
        <span className="text-white -rotate-90">{dropDownIcon}</span>
      </div>
      <div className="flex flex-col ml-[2vw] font-sans text-base text-gray-500 font-medium">
        <div className="flex gap-3">
         <span className="text-orange-500">-</span><span>Food order</span>
        </div>
        <div className="flex gap-3">
         <span className="text-orange-500">-</span><span>Order history</span>
        </div>
        <div className="flex gap-3">
         <span className="text-orange-500">-</span><span>Message</span>
        </div>
        <div className="flex gap-3">
         <span  className="text-orange-500">-</span><span>Bill</span>
        </div>
        <div className="flex gap-3">
         <span  className="text-orange-500">-</span><span>Settings</span>
        </div>
      </div>
    </div>
  );
};
export default SideBarButton;
