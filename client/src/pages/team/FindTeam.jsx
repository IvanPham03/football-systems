import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import Card from "../components/cards/card";
const FindTeam = () => {
  const [focus, setFocus] = useState(false);
  const inputSearch = useRef();

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
            placeholder="Tên đội, địa chỉ, tên người quản lý"
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
        <FormControl sx={{ minWidth: 200}} size="small">
          <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Chế độ"
          >
            <MenuItem value={"private"}>Chuyên nghiệp</MenuItem>
            <MenuItem value={"public"}>Bán chuyên nghiệp</MenuItem>
            <MenuItem value={"public"}>Cao cấp</MenuItem>
            <MenuItem value={"public"}>Trung cấp</MenuItem>
            <MenuItem value={"public"}>Vui</MenuItem>
            <MenuItem value={"public"}>Khác</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200,}} size="small">
          <InputLabel id="demo-select-small-label">Giới tính</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Chế độ"
          >
            <MenuItem value={"male"}>Nam</MenuItem>
            <MenuItem value={"female"}>Nữ</MenuItem>
          </Select>
        </FormControl>
      </div>
      {
        // list card
      }
      <div className="grid grid-cols-4 gap-4 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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

export default FindTeam;
