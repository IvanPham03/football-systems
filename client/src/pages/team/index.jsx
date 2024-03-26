<<<<<<< HEAD
import React, { useState } from "react";
import { 
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel, 
  Divider} from "@mui/material";






const ArrangeTeam=()=>{


  const [rowData, setRowData] = useState([
    { id: 1, name: 'Cầu thủ A',position:''},
    { id: 2, name: 'Cầu thủ B',position:''},
    { id: 3, name: 'Cầu thủ C',position:''},
    { id: 4, name: 'Cầu thủ D',position:''},
    { id: 5, name: 'Cầu thủ E',position:''},
    { id: 6, name: 'Cầu thủ F',position:''},
    { id: 7, name: 'Cầu thủ G',position:''},
    { id: 8, name: 'Cầu thủ H',position:''},
    { id: 9, name: 'Cầu thủ I',position:''},
    { id: 10, name: 'Cầu thủ J',position:''},
    { id: 11, name: 'Cầu thủ K',position:''},
  ]);

  const handleInputChange = (id, columnName, value) => {
    const updatedData = rowData.map(row => {
      if (row.id === id) {
        return { ...row, [columnName]: value};
      }
      return row;
    });
    setRowData(updatedData);
  };
  
  return(
    <div className="min-h-[1000px] px-24 py-12 bg-gray-300 ">
        <div className="flex justify-between gap-5 bg-white p-5">
          <div className="mt-0 mx-auto w-2/5 border p-2 bg-white">
            <table className="border-separate border-spacing-4">
              <thead>
                <tr>
                  <th>Số áo</th>
                  <th>Tên trên áo</th>
                  <th>Vị trí thi đấu</th>
                </tr>
              </thead>
              <tbody>
                {rowData.map(row => (
                <tr key={row.id}>
                  <td className="w-1/5">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={row.id}
                      size="small"
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="w-3/5">
                    <TextField
                      id="outlined-size-small"
                      defaultValue={row.name}
                      size="small"
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="w-2/5" style={{ width: 'fit-content'}}>
                    <FormControl sx={{ minWidth: 120}} size="small">
                      <InputLabel id="demo-select-small-label">Vị trí thi đấu</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={row.position}
                        label="Vị trí thi đấu"
                        onChange={(e) => handleInputChange(row.id, 'position', e.target.value)}
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
              </tbody>
            </table>
          </div>
          <div className="mt-0 mx-auto w-2/5  p-2 bg-white">
            <div className="w-2/3 flex  flex-col gap-3">

                Tên đội thi đấu
                <TextField
                  id="outlined-size-small"
                  defaultValue={""}
                  size="small"
                />

                Tên đội hình
                <TextField
                  id="outlined-size-small"
                  defaultValue={""}
                  size="small"
                />
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
                    value={""}
                    label="Chế độ"
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
                <button className="bg-green-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition" >Tạo mới</button>

              </div>
            </div>
          </div>
        </div>
    </div>
)};
export default ArrangeTeam
=======
import React from "react";
import { useSelector } from "react-redux";
import CreateTeam from "./CreateTeam";
import CreateTeamFormation from "./CreateTeamFormation";
import FindTeam from "./FindTeam";

const Index = () => {
  const layout = useSelector((state) => state.ui.view);
  return (
    <div className="px-2 sm:px-6 lg:px-8 mt-10 mx-auto">
      {layout === "CreateTeam" && <CreateTeam />}
      {layout === "CreateTeamFormation" && <CreateTeamFormation />}
      {layout === "FindTeam" && <FindTeam />}
      {layout !== "CreateTeam" &&
        layout !== "CreateTeamFormation" &&
        layout !== "FindTeam" && <CreateTeam />}
    </div>
  );
};

export default Index;
>>>>>>> dcce4c59056ba13d9cea71cbdbfb3e5868fd54bf
