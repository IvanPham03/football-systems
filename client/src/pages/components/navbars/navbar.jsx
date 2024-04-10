import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo/logo.png";
import {
  faBell,
  faChevronDown,

} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setView } from "../../../redux-toolkit/slices/uiSlice.js";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import  {useNavigate}  from 'react-router-dom'
import Account from "./Account.jsx";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch(setView(type));
  };

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
            <div
              className="flex flex-shrink-0 items-center gap-2"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="h-8 w-8 object-cover"
              />
              <p className="text-white text-xl">Football Management System</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <ul className="flex space-x-4 ">
                <li
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                  onClick={() => navigate("/")}
                >
                  Trang chủ
                </li>
                <li>
                  <Menu
                    as="div"
                    className={`relative text-gray-300
                     hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                  >
                    <div>
                      <Menu.Button>
                        Giải đấu{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ width: "20px", paddingLeft: "4px" }}
                          transform="grow-6"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item
                            onClick={() => {
                              handleClick("CreateTournament");
                              navigate("/tournament");
                            }}
                          >
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full py-2 px-4 text-sm text-left"
                                )}
                              >
                                Tạo giải đấu
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              handleClick("FindTournament");
                              navigate("/tournament");
                            }}
                          >
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full py-2 px-4 text-sm text-left"
                                )}
                              >
                                Tìm giải
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <Menu
                  as="div"
                  className={`relative text-gray-300
                     hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                >
                  <div>
                    <Menu.Button>
                      Đội thi đấu{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ width: "20px", paddingLeft: "4px" }}
                        transform="grow-6"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item
                          onClick={() => {
                            handleClick("CreateTeam");
                            navigate("/team");
                          }}
                        >
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full py-2 px-4 text-sm text-left"
                              )}
                            >
                              Tạo đội
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item
                          onClick={() => {
                            handleClick("FindTeam");
                            navigate("/team");
                          }}
                        >
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full py-2 px-4 text-sm text-left"
                              )}
                            >
                              Tìm đội
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item
                          onClick={() => {
                            handleClick("CreateTeamFormation");
                            navigate("/team");
                          }}
                        >
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full py-2 px-4 text-sm text-left"
                              )}
                            >
                              Tạo đội hình
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <li
                  onClick={() => handleClick("league")}
                  className={`text-gray-300
                   hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer `}
                >
                  BXH
                </li>
                <button className="w-10 h-10">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ color: "white", width: "20px", height: "20px" }}
                  />
                </button>
              </ul>
            </div>
          </div>
          <Account />
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
