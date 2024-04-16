import { faEye, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ tournament }) => {
  const percent = (tournament.team.length / tournament.numberTeam) * 100 + "%";
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`detail/${tournament._id}`)} className="hover: cursor-pointer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img test"
        />
        <div className="flex justify-center items-center -mt-[45px]">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt=""
            className="w-[90px] h-[90px] object-cover shadow-2xl rounded-md"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{tournament.name}</div>
          <p className="text-gray-700 text-base">
            <span>
              {tournament.formatTour === "Knockout"
                ? "Loại trực tiếp"
                : tournament.formatTour}
              ║
            </span>
            <span>{tournament.venue}</span>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FontAwesomeIcon icon={faPeopleGroup} />{" "}
            <span>{tournament.numberTeam}</span>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FontAwesomeIcon icon={faEye} /> <span>32</span>
          </span>
          <div className="my-10">
            <div className="w-full bg-gray-200 rounded-md h-[15px]">
              <div
                className="bg-blue-500  w-full text-center text-[10px] font-medium leading-none text-primary-100 overflow-hidden rounded-md h-[15px]"
                style={{ width: percent }}
              ></div>
              <div className="text-[10px] flex justify-center -mt-[15px] overflow-hidden">
                {tournament.team.length} / {tournament.numberTeam}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
