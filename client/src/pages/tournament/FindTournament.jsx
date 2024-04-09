import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../config/AxiosInstance";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import Card from "./Card";
const FindTournament = () => {
  const [focus, setFocus] = useState(false);
  const [tournaments, setTournaments] = useState(null);

  const inputSearch = useRef();
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const handleChangeType = (arg) => {
    setType(arg.target.value);
  };
  const handleChangeStatus = (arg) => {
    setStatus(arg.target.value);
  };
  const handleChangeSort = (arg) => {
    setSort(arg.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/tournaments");
        setTournaments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-[1000px] my-10">
      <div className="flex justify-between h-10 gap-3">
        <div
          className={`border rounded-md min-w-[120px] grow flex justify-between items-center px-3 ${
            focus ? "border-blue-500" : ""
          }`}
          ref={inputSearch}
        >
          <input
            type="text"
            placeholder="Tên giải đấu"
            className="border-none outline-none grow"
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-3/5 hover:text-gray-400 hover:cursor-pointer"
          />
        </div>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Hình thức</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={type}
            label="Hình thi đấu"
            onChange={handleChangeType}
          >
            <MenuItem value={"private"}>Loại trực tiếp</MenuItem>
            <MenuItem value={"public"}>Đấu vòng tròn</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Trạng thái</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={status}
            label="Trạng thái"
            onChange={handleChangeStatus}
          >
            <MenuItem value={"private"}>Đang đăng ký</MenuItem>
            <MenuItem value={"public"}>Hoạt động</MenuItem>
            <MenuItem value={"public"}>Kết thúc</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Sắp xếp</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sort}
            label="Sắp xếp"
            onChange={handleChangeSort}
          >
            <MenuItem value={"private"}>Theo tên giải đấu</MenuItem>
            <MenuItem value={"public"}>Mới cập nhật</MenuItem>
            <MenuItem value={"public"}>Nhiều người xem</MenuItem>
            <MenuItem value={"public"}>Nhiều người quan tâm</MenuItem>
          </Select>
        </FormControl>
      </div>
      {
        // list card
      }
      <div className="grid grid-cols-4 gap-4 my-10">
        {tournaments &&
          tournaments.map((tournament) => {
            return <Card key={tournament._id} tournament={tournament} />;
          })}
      </div>

      {
        // pagination
      }
      <div className="mt-0 mx-auto flex justify-center">
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </div>
    </div>
  );
};

export default FindTournament;
