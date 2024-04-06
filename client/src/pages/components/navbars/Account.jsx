import React from "react";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </button>
        </div>

        <div
          className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <button className="block px-4 py-2 text-sm text-gray-700">
            Giải đấu
          </button>
          <button className="block px-4 py-2 text-sm text-gray-700">
            Tìm giải
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
