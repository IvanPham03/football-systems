import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo/1.png";
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {setView} from '../../../redux-toolkit/slices/uiSlice.js'
const Navbar = () => {
  const dispatch = useDispatch()
  const view = useSelector(state=>state.ui.view)
  const handleClick = (type)=>{
    dispatch(setView(type));
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center gap-2">
              <img
                src={logo}
                alt="logo"
                srcSet=""
                className="h-8 w-8 object-cover"
              />
              <p className="text-white text-xl">Football Management System</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <ul className="flex space-x-4 ">
                <li
                  className={`text-gray-300 ${view === "homeClient" && "bg-gray-900" } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                  onClick={()=>handleClick("homeClient")}
                >
                  Trang chủ
                </li>
                <li
                onClick={()=>handleClick("tournament")}
                  className={`text-gray-300 ${view === "tournament" && "bg-gray-900" } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                >
                  Giải đấu
                </li>
                <li
                  onClick={()=>handleClick("team")}
                  className={`text-gray-300 ${view === "team" && "bg-gray-900" } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                >
                  Đội thi đấu
                </li>
                <li
                onClick={()=>handleClick("league")}
                  className={`text-gray-300 ${view === "league" && "bg-gray-900" } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                >
                  BXH
                </li>
                <button className="w-10 h-10">
                  <FontAwesomeIcon icon={faBell} style={{"color": "white","width": "20px", "height": "20px"}} />
                </button>
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button>
                <FontAwesomeIcon icon={faUser} style={{"color": "white","width": "20px", "height": "20px"}}/>
                </button>
              </div>

              <div
                className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="abc"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Trang chủ
          </a>
          <a
            href="abc"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Giải đấu
          </a>
          <a
            href="abc"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Đội thi đấu
          </a>
          <a
            href="abc"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Đăng nhập
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
