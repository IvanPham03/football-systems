import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AxiosInstance from "../../config/AxiosInstance.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setView } from "../../redux-toolkit/slices/uiSlice.js";



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
  const [formData, setFormData] = useState({
    teamName: '',
    formationName:'',
    number: 11,
    formation: 'test',
    policy:'test',
    pitch: 'sân 1',
    // imagePlayer: 'test',
    players: []//khai báo mảng gồm 11 phần tử 
  });
  const [errors, setErrors] = useState({
    teamName: '',
    formationName:'',
    number: '',
    formation: '',
    policy:'',
    pitch: '',
    // imagePlayer: ''
  });
  const [email, setEmail] = useState("thang@gmail.com")
  const [teams, setTeams] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)
  const [idTeam, setIdTeam] = useState()
  const [teamChosen, setTeamChosen] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  
  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]:'' });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
  //xử lí click chọn team
  const handleClick = (e, idTeam) => {
    setIsDisabled(idTeam)
    // console.log(`ID là: ${idTeam}`);
    setIdTeam(idTeam)
  }
  //lấy về các team do user đó quản lý ( truy xuất bằng email của user)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/team/searchEmail/${email}`);
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        setTeams(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[]);
  //lấy thông tin team được chọn
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/team/${idTeam}`);
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        
        setTeamChosen(response.data)
        setFormData({ ...formData, teamName : response.data.name });
        const playersFromServer = teamChosen.players;
        const updatedRowData = playersFromServer.map((player, index) => ({
          state: index < 11 ? true : false,
          id: index + 1,
          num: player.jerseyNumber,
          name: player.name,
          position: player.position,
        }));
        setRowData(updatedRowData);
        

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[idTeam]);
  //xử lí submit
  const handleSubmit = (e) =>{
    if (!formData.teamName) {
      setErrors({ ...errors, teamName: 'Cần điền tên đội' });
      return;
    }
    if (!formData.formationName) {
      setErrors({ ...errors, formationName: 'Cần điền tên đội hình' });
      return;
    }
    // if (!formData.number) {
    //   setErrors({ ...errors, number: 'Cần chọn số cầu thủ ' });
    //   return;
    // }
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
      // formData.imagePlayer &&
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
          // imagePlayer: formData.imagePlayer,
          // players: formData.players,
          players: [],
        });
        dispatch(setView("FindTeam"));
        navigate("/team")
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
<<<<<<< HEAD
    
    <div className="flex my-10 gap-2">
      <div className="grow flex justify-between">
        <div className="w-2/5">
          <div className="border border-solid border-gray-500 rounded-md p-2 mt-4">
=======
    <div className="flex my-10 gap-6">
      <div className="grow flex justify-between">
        <div className="2/5">
          <div>
            <p className="my-2">Chọn đội (nếu có)</p>
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
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
<<<<<<< HEAD
                {/* <MenuItem value={"internal"}>Nội bộ</MenuItem>
                <MenuItem value={"public"}>Công khai</MenuItem>
                <MenuItem value={"private"}>Riêng tư</MenuItem> */}
                {teams.map(team => (
                  <MenuItem 
                    key={team._id} 
                    value={team._id}
                    onClick={(e) =>handleClick(e,team._id)}
                  >
                    {team.name}
                  </MenuItem>
                ))}
=======
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"1"}>2</MenuItem>
                <MenuItem value={"1"}>3</MenuItem>
                <MenuItem value={"1"}>4</MenuItem>
                <MenuItem value={"1"}>5</MenuItem>
                <MenuItem value={"1"}>6</MenuItem>
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
              </Select>
            </FormControl>
            <p className="my-2">Chọn vận động viên</p>
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr>
                  <th className="px-2"></th>
                  <th className="px-2">Số áo</th>
                  <th className="px-2">Tên trên áo</th>
                  <th className="px-2"></th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
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
=======
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
<<<<<<< HEAD
                        label="Vị trí"
                        value={row.position}
                        onChange={(e) => handleInputChange(row.id,'position',e.target.value)}
=======
                        label="Chế độ"
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
<<<<<<< HEAD
                ))}

=======
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">Áo 1</td>
                  <td>
                    <FormControl
                      sx={{ minWidth: 130 }}
                      size="small"
                      className="my-2 w-full"
                    >
                      <InputLabel id="demo-select-small-label">
                        Vị trí thi đấu
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Chế độ"
                      >
                        <MenuItem value={"1"}>Thủ môn</MenuItem>
                        <MenuItem value={"1"}>Hậu vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền vệ</MenuItem>
                        <MenuItem value={"1"}>Tiền đạo</MenuItem>
                        <MenuItem value={"1"}>Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/5">
          <TextField
          sx={{ minWidth: 200, mt: 3 }}
            // id="standard-basic"
            id=" outlined-error-helper-text"
            label="Tên đội thi đấu"
            // variant="filled"
            // className="w-full"
            className={`w-full`}
            name="teamName"
            value={formData.teamName}
            error={!!errors.teamName}
            helperText={errors.teamName || ' '}
            disabled = {isDisabled}
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
<<<<<<< HEAD
            Số người <span className="text-red-500">*</span>
=======
              Số lượng người thi đấu
>>>>>>> 06cfe66d3fba75ac6e8e9e756217b2615281ff37
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
          {/* <FormControl
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
          </FormControl> */}
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
        <div className="w-2/5">
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
