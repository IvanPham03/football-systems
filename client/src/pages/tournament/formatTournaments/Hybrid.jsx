import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
const League = ({ handleFormatTour }) => {
  const [winPoint, setWinPoint] = useState(3); // thắng
  const [drawPoint, setDrawPoint] = useState(1); // hoà
  const [lossPoint, setLossPoint] = useState(0); // thua
  const [amountTable, setAmountTable] = useState(1);
  const [advancingTeam, setAdvancingTeam] = useState(1);
  const [numberOfRounds, setNumberOfRounds] = useState(1);

  let inputTour = {
    numberOfRounds: numberOfRounds,
    win: winPoint,
    loss: lossPoint,
    draw: drawPoint,
    amountTable: amountTable,
    advancingTeam: advancingTeam,
  };

  //  truyền lên cha
  const handleChangeData = (change) => {
    inputTour = { ...inputTour, [change.name]: change.value };
    handleFormatTour(inputTour)
  };
  return (
    <div className="my-10 transition-all ">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-1/3">
          <label htmlFor="">Điểm thắng</label>
          <input
            aria-label="Demo number input"
            placeholder="Điểm thắng"
            value={winPoint}
            min={1}
            max={100}
            type="number"
            onChange={(event, val) => {
              handleChangeData({ name: "win", value: event.target.value });
              setWinPoint(val);
            }}
            className="border rounded-md outline-none p-2 "
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label htmlFor="">Điểm hoà</label>
          <input
            aria-label="Demo number input"
            placeholder="Điểm hoà"
            value={drawPoint}
            min={0}
            max={100}
            type="number"
            onChange={(event, val) => {
              handleChangeData({ name: "draw", value: event.target.value });
              setDrawPoint(val);
            }}
            className="border rounded-md outline-none p-2 "
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label htmlFor="">Điểm thua</label>
          <input
            aria-label="Demo number input"
            placeholder="Điểm thua"
            value={lossPoint}
            min={0}
            max={100}
            type="number"
            onChange={(event, val) => {
              handleChangeData({ name: "loss", value: event.target.value });
              setLossPoint(val);
            }}
            className="border rounded-md outline-none p-2 "
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Số lượt đá vòng tròn</p>
        <div className="flex justify-between text-center gap-2 mt-2">
          <div
            className={`border grow rounded-md py-1 hover:cursor-pointer transition-all ${
              numberOfRounds === 1 ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => {
              handleChangeData({ name: "numberOfRounds", value: 1 });
              setNumberOfRounds(1);
            }}
          >
            1
          </div>
          <div
            className={`border grow rounded-md py-1 hover:cursor-pointer transition-all ${
              numberOfRounds === 2 ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => {
              handleChangeData({ name: "numberOfRounds", value: 2 });
              setNumberOfRounds(2);
            }}
          >
            2
          </div>
          <div
            className={`border grow rounded-md py-1 hover:cursor-pointer transition-all ${
              numberOfRounds === 3 ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => {
              handleChangeData({ name: "numberOfRounds", value: 3 });
              setNumberOfRounds(3);
            }}
          >
            3
          </div>
          <div
            className={`border grow rounded-md py-1 hover:cursor-pointer transition-all ${
              numberOfRounds === 4 ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => {
              handleChangeData({ name: "numberOfRounds", value: 4 });
              setNumberOfRounds(4);
            }}
          >
            4
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col w-1/2">
          <p>Số lượng bảng đấu ở giai đoạn vòng bảng</p>
          <FormControl sx={{ minWidth: 120 }} size="small" className="w-full">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={amountTable}
              onChange={(e) => {
                handleChangeData({
                  name: "amountTable",
                  value: e.target.value,
                });
                setAmountTable(e.target.value);
              }}
              className="w-full"
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={34}>34</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col w-1/2">
          <p>Tổng số đội vượt qua vòng bảng của tất cả các bảng đấu.</p>
          <FormControl sx={{ minWidth: 120 }} size="small" className="w-full">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={advancingTeam}
              onChange={(e) => {
                handleChangeData({
                  name: "setAdvancingTeam",
                  value: e.target.value,
                });
                setAdvancingTeam(e.target.value);
              }}
              className="w-full"
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={34}>34</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default League;
