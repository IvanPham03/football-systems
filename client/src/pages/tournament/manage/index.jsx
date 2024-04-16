import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Schedule from "./Schedule";
import Custom from "./Custom";
import { Report } from "./Report";
import LeaderBoard from "./LeaderBoard";
import logo from "../../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setView } from "../../../redux-toolkit/slices/manageTournament";
import Team from "./Team";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../../config/AxiosInstance.js";
const Index = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.manageTournament.view);
  const { id } = useParams();
  const [tournamentDetail, setTournamentDetail] = useState(null);
  const [round, setRound] = useState(null);
  const [match, setMatch] = useState(null);
  const [active, setActive] = useState(false);
  const percent =
    (tournamentDetail?.team.length / tournamentDetail?.numberTeam) * 100 + "%";
  useEffect(() => {
    let fetch = async () => {
      try {
        let res = await AxiosInstance.get(`/tournaments/${id}`);
        console.log(res);
        if (res.status === 200) {
          setTournamentDetail(res.data);
          if (
            res.data.team.length === res.data.numberTeam &&
            res.data.status === "inactive"
          ) {
            setActive(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleClickActiveTournament = async () => {
    try {
      let res = await AxiosInstance.post("/schedule/create", {
        idTournament: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRoundAndMatch = async () => {
    try {
      let res = await AxiosInstance.get(`/round/getAll/${id}`);
      if (res) {
        setRound(res.data);
      }
      let res2 = await AxiosInstance.get(`/match/getAll/${id}`);
      if (res2) {
        setMatch(res2.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRoundAndMatch();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="my-10 flex gap-6 items-center">
        <div className="border p-2 rounded-md border-gray-500">
          <img src={logo} alt="logo" className="object-cover h-20 w-20" />
        </div>
        <div className="flex flex-col grow">
          <p className="font-bold my-1">
            {tournamentDetail !== null ? tournamentDetail.name : ""}
          </p>
          <p className="my-1">
            <span>
              {tournamentDetail !== null
                ? tournamentDetail.formatTour === "Knockout"
                  ? "Loại trực tiếp"
                  : ""
                : ""}
            </span>{" "}
            -{" "}
            <span>
              {" "}
              {tournamentDetail !== null ? tournamentDetail.venue : ""}
            </span>
          </p>
          <p className="my-1">
            {" "}
            <FontAwesomeIcon icon={faUsers} />
            <span className="ml-2">
              {" "}
              {tournamentDetail !== null
                ? tournamentDetail.team?.length
                : ""}{" "}
              đội
            </span>
          </p>
        </div>
        <div className="grow max-w-[300px]">
          <p className="my-2">Số trận đấu đã diễn ra</p>
          <div className="bg-gray-200 rounded-md h-[15px]">
            <div
              className="bg-blue-500  w-full text-center text-[10px] font-medium leading-none text-primary-100 overflow-hidden rounded-md h-[15px]"
              style={{ width: percent }}
            ></div>
            <div className="text-[10px] flex justify-center -mt-[15px] overflow-hidden">
              {tournamentDetail?.team.length} / {tournamentDetail?.numberTeam}
            </div>
          </div>

          <button
            className={`rounded-md bg-gray-700  shadow-md my-4 px-4 py-1 text-white transition-all1 ${
              active ? "hover:opacity-50" : ""
            }`}
            disabled={!active}
            onClick={() => handleClickActiveTournament()}
          >
            {tournamentDetail?.status}
          </button>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => dispatch(setView("schedule"))}
        >
          Lịch thi đấu
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => dispatch(setView("leaderboard"))}
        >
          Bảng xếp hạng
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => dispatch(setView("team"))}
        >
          Đội thi đấu
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => dispatch(setView("report"))}
        >
          Thống kê
        </button>
        <button
          className="grow border rounded-md py-1 font-medium border-gray-500 hover:bg-gray-200 active:bg-gray-700 focus:outline-none transition-all"
          onClick={() => dispatch(setView("custom"))}
        >
          Tuỳ chỉnh
        </button>
      </div>
      {view === "schedule" && <Schedule round={round} match={match} />}
      {view === "leaderboard" && <LeaderBoard />}
      {view === "report" && <Report />}
      {view === "custom" && <Custom />}
      {view === "team" && <Team />}
    </div>
  );
};

export default Index;
