import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import CardTournament from ".././Card";
import {
  faCalendarDays,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../../config/AxiosInstance.js";
import { useDispatch } from "react-redux";
const Manage = () => {
  const [view, setView] = useState("tournament");
  const [tournaments, setTournaments] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/tournaments/user");
        console.log(response);
        if (response.status === 200) {
          setTournaments(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="my-10 flex gap-6 items-center">
        <div className="border p-4 shadow-xl rounded-full border-gray-500">
          <img src={logo} alt="logo" className="object-cover h-20 w-20" />
        </div>
        <div className="flex flex-col grow">
          <p className="font-bold my-1">Trường đẹp trai</p>
          <p className="my-1">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ml-2">dangtruongpham@gmail.com</span>
          </p>
          <p className="my-1">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
            <span className="ml-2">0123456789</span>
          </p>
          <p className="my-1">
            {" "}
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="ml-2">01/01/2024</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => setView("tournament")}
        >
          Quản lý giải đấu
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => setView("team")}
        >
          Bảng lý đội
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => setView("report")}
        >
          Thống kê
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => setView("custom")}
        >
          Tuỳ chỉnh
        </button>
      </div>
      <div className="my-10 flex">
        {view === "tournament" && (
          <div className="grid grid-cols-4 gap-4 my-10">
            {tournaments !== null &&
              tournaments.map((tournament) => {
                return (
                  <CardTournament
                    key={tournament._id}
                    tournament={tournament}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Manage;
