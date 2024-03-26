import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CreateTournament = () => {
  const [policy, setPolicy] = useState("");
  const [winPoint, setwinPoint] = useState(3);
  const [breakEvenPoint, setbreakEvenPoint] = useState(1);
  const [lossPoint, setlossPoint] = useState(0);
  const [amountPerTeam, setamountPerTeam] = useState(5);

  const handleChangePolicy = (event) => {
    setPolicy(event.target.value);
  };
  const handleamountPerTeam = (event) => {
    setamountPerTeam(event.target.value);
  };
  return (
    <div className="min-h-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Tạo giải</h2>
          <p className="my-3">
            Vui lòng nhập thông tin hợp lệ cho các trường được yêu cầu{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>
        <div>
          {" "}
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
            Hướng dẫn
          </button>
        </div>
      </div>
      <Divider />
      <div className="my-10 flex justify-between items-center">
        <div className="mt-0 mx-auto w-1/5 flex flex-col items-centererit">
          <img
            src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
            alt="logo tournament"
            className="w-56 h-56 object-cover"
          />
        </div>
        <div className="w-2/3 flex  flex-col gap-3">
          <TextField
            id="standard-basic"
            label="Tên giải đấu"
            variant="standard"
            className="mt-3"
          />
          <TextField
            id="standard-basic"
            label="Số điện thoại"
            variant="standard"
            className="mt-3"
          />
          <FormControl sx={{ minWidth: 120, mt: 3 }} size="small">
            <InputLabel id="demo-select-small-label">Chế độ</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={policy}
              label="Chế độ"
              onChange={handleChangePolicy}
            >
              <MenuItem value={"private"}>Riêng tư</MenuItem>
              <MenuItem value={"public"}>Công khai</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Địa điểm"
            variant="standard"
            className="mt-3"
          />
        </div>
      </div>
      <Divider />
      <div className="my-10">
        <h3 className="text-xl">Hình thức thi đấu</h3>
        <div className="flex justify-between items-center  border p-4 rounded-md mt-4">
          <div className="mt-0 mx-auto w-1/5 flex flex-col items-center scale-110">
            <img
              src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Loại 1</p>
          </div>
          <div className="mt-0 mx-auto w-1/5 flex flex-col items-center">
            <img
              src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Loại 1</p>
          </div>
          <div className="mt-0 mx-auto w-1/5 flex flex-col items-center">
            <img
              src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Loại 1</p>
          </div>
          <div className="mt-0 mx-auto w-1/5 flex flex-col items-center">
            <img
              src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Loại 1</p>
          </div>
          <div className="mt-0 mx-auto w-1/5 flex flex-col items-center">
            <img
              src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Loại 1</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="my-10">
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
              onChange={(event, val) => setwinPoint(val)}
              className="border rounded-md outline-none p-2 "
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="">Điểm hoà</label>
            <input
              aria-label="Demo number input"
              placeholder="Điểm hoà"
              value={breakEvenPoint}
              min={-10}
              max={10}
              type="number"
              onChange={(event, val) => setbreakEvenPoint(val)}
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
              onChange={(event, val) => setlossPoint(val)}
              className="border rounded-md outline-none p-2 "
            />
          </div>
        </div>
      </div>
      <div className="my-10">
        <p>Số lượng người thi đấu trên sân của mỗi đội.</p>
        <FormControl
          sx={{ minWidth: 120, mt: 3 }}
          size="small"
          className="w-full"
        >
          <InputLabel id="demo-select-small-label">Số lượng</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={amountPerTeam}
            label="Chế độ"
            onChange={handleamountPerTeam}
            className="w-full"
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={11}>11</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Divider />
      <div className="my-10 flex justify-center items-center ">
        <button className="bg-gray-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition">Tạo giải</button>
      </div>
    </div>
  );
};

export default CreateTournament;
