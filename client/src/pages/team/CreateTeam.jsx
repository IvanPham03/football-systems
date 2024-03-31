import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Textarea } from "@material-tailwind/react";;
const CreateTeam = () => {
  const [policy, setPolicy] = useState("");
  // const [winPoint, setwinPoint] = useState(3);
  // const [breakEvenPoint, setbreakEvenPoint] = useState(1);
  // const [lossPoint, setlossPoint] = useState(0);
  // const [amountPerTeam, setamountPerTeam] = useState(5);

  const handleChangePolicy = (event) => {
    setPolicy(event.target.value);
  };
  // const handleamountPerTeam = (event) => {
  //   setamountPerTeam(event.target.value);
  // };
  return (
    <div className="min-h-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Tạo đội đấu</h2>
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

      {
        // thông tin đội
      }
      <div className="flex">
        <div className="border border-gray-500 m-8 p-4 rounded-md">
          <p className="p-2">Ảnh đại diện</p>
          <img src={logo} alt="logo" className="h-48 w-48 object-cover" />
        </div>
        <div className="grow">
          <div className="w-full flex gap-4 items-end">
            <TextField
              id="standard-basic"
              label="Tên đội"
              variant="standard"
              className="mt-3 w-full"
            />
            <FormControl sx={{ minWidth: 200, mt: 3 }} size="small">
              <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={policy}
                label="Chế độ"
                onChange={handleChangePolicy}
              >
                <MenuItem value={"private"}>Chuyên nghiệp</MenuItem>
                <MenuItem value={"public"}>Bán chuyên nghiệp</MenuItem>
                <MenuItem value={"public"}>Cao cấp</MenuItem>
                <MenuItem value={"public"}>Trung cấp</MenuItem>
                <MenuItem value={"public"}>Vui</MenuItem>
                <MenuItem value={"public"}>Khác</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full flex gap-4 items-end">
            <TextField
              id="standard-basic"
              label="Số điện thoại"
              variant="standard"
              className="mt-3 w-full"
            />
            <FormControl sx={{ minWidth: 200, mt: 3 }} size="small">
              <InputLabel id="demo-select-small-label">Chế độ</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={policy}
                label="Chế độ"
                onChange={handleChangePolicy}
              >
                <MenuItem value={"public"}>Công khai</MenuItem>
                <MenuItem value={"private"}>Riêng tư</MenuItem>
                <MenuItem value={"internal"}>Nội bộ</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 200, mt: 3 }} size="small">
              <InputLabel id="demo-select-small-label">Độ tuổi</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={policy}
                label="Chế độ"
                onChange={handleChangePolicy}
              >
                <MenuItem value={"15-20"}>15-20</MenuItem>
                <MenuItem value={"20-25"}>20-25</MenuItem>
                <MenuItem value={"25-30"}>25-30</MenuItem>
                <MenuItem value={"l30"}> &gt; 30</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="my-10">
            <Divider />
            <div className="flex gap-4">
              <TextField
                id="standard-basic"
                label="Tên người liên hệ"
                variant="standard"
                className="mt-3 w-full"
              />
              <TextField
                id="standard-basic"
                label="Địa chỉ email"
                variant="standard"
                className="mt-3 w-full"
              />
            </div>
            <div className="flex gap-4">
              <TextField
                id="standard-basic"
                label="Khu vực hoạt động"
                variant="standard"
                className="mt-3 w-full"
              />
              <TextField
                id="standard-basic"
                label="Khung thời gian hoạt động"
                variant="standard"
                className="mt-3 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <div className="flex gap-4 m-4 justify-between">
        <div className="border rounded-md p-2">
          <p className="flex justify-between items-center p-2">
            <span>Đồng phục 1 </span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
          <img src={logo} alt="logo" className="w-48 h-48 object-cover" />
        </div>
        <div className="border rounded-md p-2">
          <p className="flex justify-between items-center p-2">
            <span>Đồng phục 1 </span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
          <img src={logo} alt="logo" className="w-48 h-48 object-cover" />
        </div>
        <div className="border rounded-md p-2">
          <p className="flex justify-between items-center p-2">
            <span>Đồng phục 1 </span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
          <img src={logo} alt="logo" className="w-48 h-48 object-cover" />
        </div>
      </div>
      <Divider />
      <div className="my-10"></div>
      <textarea label="Message" className="w-full h-48 p-4 outline-none border border-solid border-gray-500 rounded-md" placeholder="Nhập giới thiệu về độ" />
      <div className="my-10 flex justify-center items-center ">
        <button className="bg-gray-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition">
          Tạo đội
        </button>
      </div>
    </div>
  );
};

export default CreateTeam;
