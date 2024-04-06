import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faPeopleGroup,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full mt-4 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col  xl:gap-6 gap-4 font-medium text-lg">
        <div className="text-white flex gap-4 items-center hover:opacity-50 hover:cursor-pointer">
          <FontAwesomeIcon icon={faHouse} className="w-10" />
          <span>Tổng quan</span>
        </div>
        <div className="text-white flex gap-4 items-center hover:opacity-50 hover:cursor-pointer">
          <FontAwesomeIcon icon={faTrophy} className="w-10" />
          <span>Giải đấu</span>
        </div>
        <div className="text-white flex gap-4 items-center hover:opacity-50 hover:cursor-pointer">
          <FontAwesomeIcon icon={faPeopleGroup} className="w-10" />
          <span>Đội nhóm</span>
        </div>
        <div className="text-white flex gap-4 items-center hover:opacity-50 hover:cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="w-10" />
          <span>Người dùng</span>
        </div>
        <div className="text-white flex gap-4 items-center hover:opacity-50 hover:cursor-pointer">
          <FontAwesomeIcon icon={faChartSimple} className="w-10" />
          <span>Báo cáo</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
