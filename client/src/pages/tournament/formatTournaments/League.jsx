import React, { useState } from "react";

const League = ({ handleFormatTour }) => {
  const [winPoint, setWinPoint] = useState(3); // thắng
  const [drawPoint, setDrawPoint] = useState(1); // hoà
  const [lossPoint, setLossPoint] = useState(0); // thua

  let inputTour = {
    win: winPoint,
    loss: lossPoint,
    draw: drawPoint,
  };
  //  truyền lên cha
  const handleChangeData = (change) => {
    inputTour = { ...inputTour, [change.name]: change.value };
    handleFormatTour(inputTour);
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
            min={-10}
            max={10}
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
            min={-10}
            max={10}
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
            min={-10}
            max={10}
            type="number"
            onChange={(event, val) => {
              handleChangeData({ name: "loss", value: event.target.value });
              setLossPoint(val);
            }}
            className="border rounded-md outline-none p-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default League;
