import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AxiosInstance from "../../config/AxiosInstance.js";


const CreateTeamFormation = () => {

  const [rowData, setRowData] = useState([
    { state: true, id: 1, num: 1, name: 'Cầu thủ A', position:''},
    { state: true, id: 2, num: 2, name: 'Cầu thủ B', position:''},
    { state: true, id: 3, num: 3, name: 'Cầu thủ C', position:''},
    { state: true, id: 4, num: 4, name: 'Cầu thủ D', position:''},
    { state: true, id: 5, num: 5, name: 'Cầu thủ E', position:''},
    { state: true, id: 6, num: 6, name: 'Cầu thủ F', position:''},
    { state: true, id: 7, num: 7, name: 'Cầu thủ G', position:''},
    { state: true, id: 8, num: 8, name: 'Cầu thủ H', position:''},
    { state: true, id: 9, num: 9, name: 'Cầu thủ I', position:''},
    { state: true, id: 10, num: 10, name: 'Cầu thủ J', position:''},
    { state: true, id: 11, num: 11, name: 'Cầu thủ K', position:''},
  ]);

  //cập nhật checkbox
  const getRowById = (id) => {
    return rowData.find(row => row.id === id);
  };
  const handleChecked = (id) => {
    handleInputChange(id, 'state', !getRowById(id).state)
  }
  //cập nhật rowData
  const handleInputChange = (id, columnName, value) => {
    const updatedData = rowData.map(row => {
      if (row.id === id) {
        return { ...row, [columnName]: value};
      }
      return row;
    });
    setRowData(updatedData);
    convertRowDataToPlayers();
  };
  const [formData, setFormData] = useState({
    teamName: 'test',
    formationName:'test',
    number: 3,
    formation: 'test',
    policy:'test',
    pitch: 'test',
    imagePlayer: 'test',
    players: {}//khai báo mảng gồm 11 phần tử 
  });
  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]:'' });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [errors, setErrors] = useState({
    teamName: '',
    formationName:'',
    number: '',
    formation: '',
    policy:'',
    pitch: '',
    imagePlayer: ''
  });
  //lưu rowData vào players của formData
  const convertRowDataToPlayers = () => {
    const playersData = rowData.map(player => ({  
      state: player.state, 
      id: player.id, 
      num: player.number, 
      name: player.name, 
      position: player.position
    }));
    setFormData(prevFormData => ({
      ...prevFormData,
      players: playersData
    }));

  };
  const handleSubmit = (e) =>{
    if (!formData.teamName) {
      setErrors({ ...errors, teamName: 'Cần điền tên đội' });
      return;
    }
    if (!formData.formationName) {
      setErrors({ ...errors, formationName: 'Cần điền tên đội hình' });
      return;
    }
    if (!formData.number) {
      setErrors({ ...errors, number: 'Cần chọn số cầu thủ ' });
      return;
    }
    if (!formData.formation) {
      setErrors({ ...errors, formation: 'Cần chọn đội hình thi đấu' });
      return;
    }
    if (!formData.policy) {
      setErrors({ ...errors, policy: 'Cần chọn chế độ' });
      return;
    }
    if (!formData.pitch) {
      setErrors({ ...errors, pitch: 'Cần chọn loại sân đấu' });
      return;
    }
    
    // convertRowDataToPlayers();
    console.log(formData);
    if (
      formData.teamName &&
      formData.formationName &&
      formData.number &&
      formData.formation &&
      formData.policy &&
      formData.pitch &&
      formData.imagePlayer &&
      formData.players
    ) {
      try {
        console.log(formData)
        let res = AxiosInstance.post("/team/createFormation", {
          teamName: formData.teamName,
          formationName: formData.formationName,
          number: formData.number,
          formation: formData.formation,
          policy: formData.policy,
          pitch: formData.pitch,
          imagePlayer: formData.imagePlayer,
          players: formData.players,

        });
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    
    <div className="flex my-10 gap-2">
      <div className="grow flex justify-between">
        <div className="w-2/5">
          <div className="border border-solid border-gray-500 rounded-md p-2 mt-4">
            <FormControl
              sx={{ minWidth: 200, mt: 3 }}
              size="small"
              className="w-full"
              >
              <InputLabel id="demo-select-small-label">
              Chọn đội (nếu có) 
              </InputLabel>
              <Select
                // variant="standard"
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={amountPerTeam}
                label="Chọn đội (nếu có)"
                className="w-full"
                defaultValue={"--Vui lòng chọn--"}
                // value="--Vui lòng chọn--"
              >
                {/* <MenuItem value={"internal"}>Nội bộ</MenuItem>
                <MenuItem value={"public"}>Công khai</MenuItem>
                <MenuItem value={"private"}>Riêng tư</MenuItem> */}
                <MenuItem value={"--Vui lòng chọn--"}>--Vui lòng chọn--</MenuItem>
              </Select>
            </FormControl>
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
                {rowData.map(row => (
                <tr key={row.id}>
                  <td >
                    <input className="1/6" type="checkbox" name="" id="" checked={row.state} onChange={()=>handleChecked(row.id)}/>
                  </td>
                  <td className="w-1/6">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={row.id}
                      size="small"
                      inputProps={{ maxLength: 3 }}
                      onChange={(e) => handleInputChange(row.id,'num',parseInt(e.target.value))}
                      
                    />
                  </td>
                  <td className="w-3/6" >
                    <TextField
                      id="outlined-size-small"
                      defaultValue={row.name}
                      size="small"
                      onChange={(e) => handleInputChange(row.id,'name',e.target.value)}
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
                        value={row.position}
                        onChange={(e) => handleInputChange(row.id,'position',e.target.value)}
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
                ))}

                {/* <tr>
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
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/6">
          <TextField
          sx={{ minWidth: 200, mt: 3 }}
            // id="standard-basic"
            id=" outlined-error-helper-text"
            label="Tên đội thi đấu"
            // variant="filled"
            className=" w-full "
            name="teamName"
            value={formData.teamName}
            error={!!errors.teamName}
            helperText={errors.teamName || ' '}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            sx={{ minWidth: 200, mt: 3 }}
            id="standard-basic"
            label="Tên đội hình"
            // variant="standard"
            className=" w-full"
            name="formationName"
            error={!!errors.formationName}
            helperText={errors.formationName || ' '}
            onChange={(e) => handleChange(e)}
          />
          <FormControl
            sx={{ minWidth: 200, mt: 3 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">
            Số người <span className="text-red-500">*</span>
            </InputLabel>
            <Select
              // variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Số người"
              // onChange={handleamountPerTeam}
              className="w-full"
              name="number"
              error={!!errors.number}
              helperText={errors.number || ' '}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={11}>11</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ minWidth: 200, mt: 3 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Sơ đồ thi đấu</InputLabel>
            <Select
              // variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Sơ đồ thi đấu"
              // onChange={handleamountPerTeam}
              className="w-full"
              name="formation"
              error={!!errors.formation}
              helperText={errors.formation || ' '}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"343"}>3-4-3</MenuItem>
              <MenuItem value={"352"}>3-5-2</MenuItem>
              <MenuItem value={"3511"}>3-5-1-1</MenuItem>
              <MenuItem value={"3412"}>3-4-1-2</MenuItem>
              <MenuItem value={"424"}>4-2-4</MenuItem>
              <MenuItem value={"442"}>4-4-2</MenuItem>
              <MenuItem value={"442D"}>4-4-2D</MenuItem>
              <MenuItem value={"433"}>4-3-3</MenuItem>
              <MenuItem value={"4231"}>4-2-3-1</MenuItem>
              <MenuItem value={"41212"}>4-1-2-1-2</MenuItem>
              <MenuItem value={"4411"}>4-4-1-1</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ minWidth: 200, mt: 3 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">
            Chế độ 
            </InputLabel>
            <Select
              // variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Chế độ"
              // onChange={handleamountPerTeam}
              className="w-full"
              name="policy"
              error={!!errors.policy}
              helperText={errors.policy || ' '}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"internal"}>Nội bộ</MenuItem>
              <MenuItem value={"public"}>Công khai</MenuItem>
              <MenuItem value={"private"}>Riêng tư</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 200, mt: 3 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Nền sân đấu</InputLabel>
            <Select
              // variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Nền sân đấu"
              // onChange={handleamountPerTeam}
              className="w-full"
              name="pitch"
              error={!!errors.pitch}
              helperText={errors.pitch || ' '}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={'pitch_1'}>sân 1</MenuItem>
              <MenuItem value={'pitch_2'}>sân 2</MenuItem>
              <MenuItem value={'pitch_3'}>sân 3</MenuItem>
              <MenuItem value={'pitch_4'}>sân 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ minWidth: 200, mt: 3 }}
            size="small"
            className="w-full"
          >
            <InputLabel id="demo-select-small-label">Ảnh người chơi</InputLabel>
            <Select
              // variant="standard"
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={amountPerTeam}
              label="Ảnh người chơi"
              // onChange={handleamountPerTeam}
              className="w-full"
              name="imagePlayer"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={'img_1'}>Ảnh 1</MenuItem>
              <MenuItem value={'img_2'}>Ảnh 2</MenuItem>
              <MenuItem value={'img_3'}>Ảnh 3</MenuItem>
              <MenuItem value={'img_4'}>Ảnh 4</MenuItem>
            </Select>
          </FormControl>
          <div className="flex justify-around my-10">
            <button className="px-4 py-1 bg-green-500 rounded-md hover:bg-gray-300 transition">
              Tải về
            </button>
            <button className="px-4 py-1 bg-blue-500 rounded-md hover:bg-red-500 transition"
              onClick={handleSubmit}
            >
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
