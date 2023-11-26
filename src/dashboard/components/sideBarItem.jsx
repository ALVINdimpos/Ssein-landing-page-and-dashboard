import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBarButton = ({
  icon,
  label,
  childLinks,
  clicked,
  setIsClicked,
  linkId,
  path,
  setActiveMenu,
  setActiveSubMenu,
  activeSubMenu,
}) => {
  const minimize = useSelector((state) => state.sidebar.minimize);
  return (
    <div className="flex flex-col">
      <div
        className={`flex mx-[1vw] justify-between my-2 ${
          clicked || setActiveMenu === label
            ? "bg-orange-400  rounded text-white p-3"
            : "text-gray-500 py-1 px-4"
        }`}
      >
        <Link
          onClick={() => {
            setIsClicked(linkId);
            setActiveMenu(label);
          }}
          to={path}
          className="flex gap-2  text-lg font-semibold font-sans decoration-current"
          style={{ textDecoration: "none", color: "gray" }}
        >
          <span className={clicked ? "text-white" : "text-gray-400"}>
            {icon}
          </span>
          <span
            className={
              icon
                ? `ml-3 hover:text-orange-500  ${minimize ? "hidden" : "block"}`
                : `ml-3 hover:text-orange-500  ${minimize ? "hidden" : "block"}`
            }
          >
            {label}
          </span>
        </Link>
        <span
          className={
            clicked
              ? `text-white ${minimize ? "hidden" : "block"}`
              : `text-gray-400 -rotate-90 ${minimize ? "hidden" : "block"}`
          }
          onClick={() => setIsClicked(linkId)}
        >
          <i class={`bi bi-caret-down-fill`}></i>
        </span>
      </div>
      <div
        className={
          clicked
            ? `flex flex-col ml-[3.5vw] font-sans text-base text-gray-500 font-medium mb-2 ${
                minimize ? "hidden" : "block"
              }`
            : "hidden"
        }
      >
        {childLinks.map((link) => (
          <Link
            onClick={() => setActiveSubMenu(link.label)}
            to={link.path}
            key={link?.id}
            style={{ textDecoration: "none", color: "gray" }}
            className="flex gap-3 mb-2 hover:cursor-pointer hover:ml-2"
          >
            <span className="text-orange-500 hover:animate-ping">-</span>
            <span
              className={`hover:text-orange-500 ${
                activeSubMenu === link.label ? "text-orange-500" : ""
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideBarButton;
