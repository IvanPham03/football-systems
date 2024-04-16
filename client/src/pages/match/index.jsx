import React, { useEffect, useState } from "react";
import combatIcon from "../../assets/combaticon.png";
import DatePicker from "react-datepicker";
import AxiosInstance from "../../config/AxiosInstance.js";
import { useParams } from "react-router-dom";
const Index = () => {
  const [dateMatch, setDateMatch] = useState(new Date());
  const [Match, setMatch] = useState(null);

  const [ScoreA, setScoreA] = useState(0);
  const [ScoreB, setScoreB] = useState(0);
  const { id } = useParams();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const handleUpdate = async () => {
    try {
      if (ScoreA !== 0 || ScoreB !== 0 || dateMatch) {
        let res = await AxiosInstance.post("/match/update", {
          id: id,
          scoreA: ScoreA,
          scoreB: ScoreB,
          date: dateMatch,
        });
        if (res) {
          setUpdateSuccess(true);
          alert("Cập nhật thành công!");
        } else {
          alert("Cập nhật không thành công!");
        }
      } else {
        alert("Cập nhật không thành công, vui lòng kiểm tra lại thông tin!");
      }
    } catch (error) {
      alert("Cập nhật không thành công!");
    }
  };

  const handleFin = async () => {
    try {
      let res = await AxiosInstance.post("/match/finish", { id: id });
      console.log(res);
      if (res) {
        alert("Trận đấu đã cập nhật xếp hạng");
      } else {
        alert("Có lỗi xãy ra!");
      }
    } catch (error) {
      console.log(error);
      alert("Có lỗi xãy ra!");
    }
  };
  useEffect(() => {
    const fecth = async () => {
      try {
        let res = await AxiosInstance.get(`/match/getById/${id}`);
        if (res.status === 200) {
          setMatch(res.data);
          setScoreA(res.data.rs.scoreA);
          setScoreB(res.data.rs.scoreB);
          setDateMatch(res.data.rs.date);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fecth();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setUpdateSuccess(false);
  }, [updateSuccess]);

  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-medium">{Match?.teamA?.name}</span>
          <span>
            <img
              src={combatIcon}
              alt="combat"
              className="h-14 w-14 object-cover"
            />
          </span>
          <span className="text-4xl font-medium">{Match?.teamB?.name} </span>{" "}
        </div>
        <div className="flex items-center gap-2">
          <span>Ngày đấu: </span>
          <DatePicker
            selected={dateMatch}
            onChange={(date) => setDateMatch(date)}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-700 rounded-md"
          />

          <button
            className="text-center rounded-md bg-blue-500 hover:opacity-50 text-white px-3 py-1 transition-all"
            onClick={() => handleUpdate()}
          >
            Cập nhật
          </button>
        </div>
      </div>
      <div className="border rounded-md my-10 grow">
        <p className="text-center my-3 font-medium text-xl">Kết quả giải đấu</p>
        <div className="flex gap-2 justify-center my-1">
          <div className="flex items-center flex-col">
            <p className="my-1">{Match?.teamA?.name}</p>
            <input
              type="text"
              className="my-1 text-4xl text-right focus:border-none focus:outline-none"
              value={ScoreA}
              onChange={(e) => setScoreA(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={combatIcon}
              alt="combat"
              className="h-6 w-6 object-cover my-1"
            />
            <p className="my-1 text-4xl">:</p>
          </div>
          <div className="flex items-center flex-col">
            <p className="my-1">{Match?.teamB?.name}</p>
            <input
              type="text"
              className="my-1 text-4xl focus:border-none focus:outline-none"
              value={ScoreB}
              onChange={(e) => setScoreB(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center my-3">
          <button
            className="text-center rounded-md bg-blue-500 hover:opacity-50 text-white px-3 py-1 transition-all"
            onClick={() => handleUpdate()}
          >
            Cập nhật
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-14">
        <div className="border rounded-md my-5 w-1/2">
          <p className="text-center my-3 font-medium text-xl">Thống kê</p>
          <div className="flex gap-2 justify-center my-1">
            <div className="flex items-center flex-col">
              <p className="my-1">{Match?.teamA?.name}</p>
              <p className="my-1">{Match?.rs?.yellowCardsA || 0}</p>
              <p className="my-1">{Match?.rs?.redCardsA || 0}</p>
              <p className="my-1"> 0</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={combatIcon}
                alt="combat"
                className="h-6 w-6 object-cover my-1"
              />
              <p className="my-1">Thẻ vàng</p>
              <p className="my-1">Thẻ đỏ</p>
              <p className="my-1">Phạt đền</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="my-1">{Match?.teamB?.name}</p>
              <p className="my-1">{Match?.rs?.yellowCardsB || 0}</p>
              <p className="my-1">{Match?.rs?.redCardsB || 0}</p>
              <p className="my-1">0</p>
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="text-center rounded-md bg-blue-500 hover:opacity-50 text-white px-3 py-1 transition-all">
              Cập nhật
            </button>
          </div>
        </div>
        <div className="border rounded-md my-5 w-1/2">
          <p className="text-center my-3 font-medium text-xl">Thành tích</p>
          <div className="flex gap-2 justify-center my-1">
            <div className="flex items-center flex-col">
              <p className="my-1">{Match?.teamA?.name}</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={combatIcon}
                alt="combat"
                className="h-6 w-6 object-cover my-1"
              />
              <p className="my-1">Pld</p>
              <p className="my-1">W</p>
              <p className="my-1">D</p>
              <p className="my-1">L</p>
              <p className="my-1">GF</p>
              <p className="my-1">GA</p>
              <p className="my-1">GD</p>
              <p className="my-1">Pts</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="my-1">{Match?.teamB?.name}</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
              <p className="my-1">0</p>
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="text-center rounded-md bg-blue-500 hover:opacity-50 text-white px-3 py-1 transition-all">
              Cập nhật
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button
          className="text-center rounded-md bg-red-500 hover:opacity-50 text-white px-4 py-2 transition-all"
          onClick={() => handleFin()}
        >
          Kết thúc trận đấu
        </button>
      </div>
    </div>
  );
};

export default Index;
