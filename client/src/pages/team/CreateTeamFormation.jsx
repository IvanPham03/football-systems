import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const CreateTeamFormation = () => {
  return (
    <div className="flex my-10 gap-2">
      <div className="grow flex justify-between">
        <div className="w-2/5">
          <div>
            <p className="my-2">Chọn đội (nếu có)</p>
            <FormControl
              sx={{ minWidth: 200 }}
              size="small"
              className="my-2 w-full"
            >
              <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
              <Select
                variant="standard"
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Chế độ"
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="border border-solid border-gray-500 rounded-md p-2 mt-4">
            <p className="my-2">Chọn vận động viên</p>
            <table className="w-full border-separate border-spacing-3">
              <thead>
                <tr>
                  <th className="px-2"></th>
                  <th className="px-2">Số áo</th>
                  <th className="px-2">Tên trên áo</th>
                  <th className="px-2">Vị trí thi đấu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                    <input className="1/6" type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"1"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van A"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-full">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"2"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van B"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"3"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van C"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"4"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van D"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"5"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van E"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"6"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van F"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"7"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van F"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"8"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van G"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"9"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van H"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"10"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van J"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td >
                    <input  type="checkbox" name="" id="" />
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"11"}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={""}
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={"Nguyen Van K"}
                      size="small"
                      onChange={""}
                    />

                  </td>
                  <td className="w-2/6">
                    <FormControl 
                      className="w-full" 
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Vị trí"
                      >
                        <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                        <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                        <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                        <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                        <MenuItem value={"Khac"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/6">
          <TextField
            id="standard-basic"
            label="Tên đội thi đấu"
            variant="standard"
            className="mt-3 w-full"
          />
          <TextField
            id="standard-basic"
            label="Tên đội hình"
            variant="standard"
            className="mt-3 w-full"
          />
          <FormControl
            sx={{ minWidth: 130, mt: 5 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">
            Số lượng người thi đấu
            </InputLabel>
            <Select
              variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Chế độ"
              // onChange={handleamountPerTeam}
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
          <FormControl
            sx={{ minWidth: 130, mt: 5 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Sơ đồ thi đấu</InputLabel>
            <Select
              variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Chế độ"
              // onChange={handleamountPerTeam}
              className="w-full"
            >
              <MenuItem value={3}>3-4-3</MenuItem>
              <MenuItem value={5}>3-5-2</MenuItem>
              <MenuItem value={6}>3-5-1-1</MenuItem>
              <MenuItem value={7}>3-4-1-2</MenuItem>
              <MenuItem value={9}>4-2-4</MenuItem>
              <MenuItem value={11}>4-4-2</MenuItem>
              <MenuItem value={11}>4-4-2D</MenuItem>
              <MenuItem value={11}>4-3-3</MenuItem>
              <MenuItem value={11}>4-2-3-1</MenuItem>
              <MenuItem value={11}>4-1-2-1-2</MenuItem>
              <MenuItem value={11}>4-4-1-1</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ minWidth: 130, mt: 5 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Nền sân đấu</InputLabel>
            <Select
              variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Chế độ"
              // onChange={handleamountPerTeam}
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
          <FormControl
            sx={{ minWidth: 130, mt: 5 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Ảnh người chơi</InputLabel>
            <Select
              variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Chế độ"
              // onChange={handleamountPerTeam}
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
          <div className="flex justify-around my-10">
            <button className="px-4 py-1 bg-green-500 rounded-md">
              Tải về
            </button>
            <button className="px-4 py-1 bg-blue-500 rounded-md">
              Tạo mới
            </button>
          </div>
        </div>
        <div className="w-2/6">
          <p>Nhấn liên tiếp hai lần vào vận động viên để tạo chiến thuật</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tactique_WM-fr.svg/250px-Tactique_WM-fr.svg.png"
            alt="formation"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTeamFormation;
