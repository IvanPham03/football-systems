import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CreateTeam = () => {
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
    <div className="min-h-[1000px] p-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Tạo đội</h2>
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
            label="Tên đội"
            variant="standard"
            className="mt-3"
          />
          <FormControl sx={{ minWidth: 120, mt: 3 }} size="small">
            <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={policy}
              label="Trình độ"
              onChange={handleChangePolicy}
            >
              <MenuItem value={"ChuyenNghiep"}>Chuyên nghiệp</MenuItem>
              <MenuItem value={"BanChuyen"}>Bán chuyên</MenuItem>
              <MenuItem value={"CaoCap"}>Cao cấp</MenuItem>
              <MenuItem value={"TrungCap"}>Trung cấp</MenuItem>
              <MenuItem value={"Vui"}>Vui</MenuItem>
              <MenuItem value={"Khac"}>Khác</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, mt: 3 }} size="small">
            <InputLabel id="demo-select-small-label">Độ tuổi</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={policy}
              label="Độ tuổi"
              onChange={handleChangePolicy}
            >
              <MenuItem value={"15"}>15-20</MenuItem>
              <MenuItem value={"20"}>20-25</MenuItem>
              <MenuItem value={"25"}>25-30</MenuItem>
              <MenuItem value={"30"}>&gt; 30</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, mt: 3 }} size="small">
            <InputLabel id="demo-select-small-label">Môn đấu</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={policy}
              label="Môn đấu"
              onChange={handleChangePolicy}
            >
              <MenuItem value={"AOE"}>AOE</MenuItem>
              <MenuItem value={"Bida"}>Bida</MenuItem>
              <MenuItem value={"BongBan"}>Bóng bàn</MenuItem>
              <MenuItem value={"BongChuyen"}>Bóng chuyền</MenuItem>
              <MenuItem value={"BongRo"}>Bóng rổ</MenuItem>
              <MenuItem value={"BongDa"}>Bóng đá</MenuItem>
            </Select>
          </FormControl>

          <div className="my-5">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col w-1/2">
                <TextField
                  id="phone"
                  label="Số điện thoại"
                  variant="standard"
                  className="mt-3"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <FormControl sx={{ minWidth: 120, mt: 3}} size="small">
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
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col w-1/2">
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  className="mt-3"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <FormControl sx={{ minWidth: 120, mt: 3}} size="small">
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
              </div>
            </div>
          </div>  
          <div className="my-5">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col w-1/2">
                <TextField
                  id="area"
                  label="Khu vực hoạt động(Tùy chọn)"
                  variant="standard"
                  className="mt-3"
                />
              </div>

            </div>
          </div>  


        </div>
      </div>
      <Divider />
      <div className="my-10 flex justify-center items-center ">
        <button className="bg-gray-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition">Tạo đội</button>
      </div>
    </div>
  );
};

export default CreateTeam;