import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
const Account = () => {
  const [show, setShow] = useState(false);
  const accesstoken = Cookies.get("access-token");
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access-token");
    Cookies.remove("refresh-token");
    navigate('/')
  };
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <div>
          <button
            onClick={() => {
              if (accesstoken) {
                setShow(!show);
              } else {
                navigate("/login");
              }
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </button>
        </div>

        <div
          className={`${
            show ? "block" : "hidden"
          } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <button className="block px-4 py-2 text-sm text-gray-700">
            Thông tin tài khoản
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => {
              navigate("/manage");
              setShow(!show);
            }}
          >
            Quản lý giải đấu
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => {
              navigate("/manage");
              setShow(!show);
            }}
          >
            Quản lý đội thi đấu
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => {
              handleLogout();
              setShow(!show);
            }}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
