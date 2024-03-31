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
  const [teamName,setTeamName] = useState("")
  const [phone, setPhone] = useState("")
  const [level, setLevel] = useState("")
  const [age, setAge] = useState("")
  const [contact, setConTact] = useState("")
  const [email, setEmail] = useState("")
  const [area, setArea] = useState("")
  const [period, setPeriod] = useState("")
  const [file, setFile] = useState(logo)
  const [avt, setAvt] = useState()
  const [selectedImages, setSelectedImages] = useState([]);
  const [introduce, setIntroduce] = useState()

  const handleChangeTeamName = (event) =>{
    setTeamName(event.target.value)
  }
  const handleChangeLevel = (event) =>{
    setLevel(event.target.value)
  }  
  const handleChangePhone = (event) =>{
    setPhone(event.target.value)
  }
  const handleChangePolicy = (event) => {
    setPolicy(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeContact = (event) => {
    setConTact(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };
  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
  };
  const handleImageChange = (e) =>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    // setFile((e.target.files[0]));
  };
  const handleChangeImage = (event, index) => {
    const images = Array.from(event.target.files);
    setSelectedImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[index] = images[0];
      return updatedImages;
    });
  };
  const handleChangeIntroduce = (event)=>{
    setIntroduce(event.target.value);
  };

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
          <label htmlFor="upload-input-avt">
            {/* <img src={file} alt="logo" className="h-48 w-48 object-cover cursor-pointer" /> */}
            <img src={selectedImages[0] ? URL.createObjectURL(selectedImages[0]) : file} alt="logo" className="h-48 w-48 object-cover cursor-pointer" />
          </label>
          <input
          id="upload-input-avt"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          // onChange={handleImageChange}
          onChange={(event) => handleChangeImage(event, 0)}
        />
        </div>
        <div className="grow">
          <div className="w-full flex gap-4 items-end">
            <TextField
              id="standard-basic"
              label="Tên đội"
              variant="standard"
              className="mt-3 w-full"
              value={teamName}
              onChange={(e)=>handleChangeTeamName(e)}
            />
            <FormControl sx={{ minWidth: 200, mt: 3 }} size="small">
              <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={level}
                label="Chế độ"
                onChange={(e)=>handleChangeLevel(e)}
              >
                <MenuItem value={"professional"}>Chuyên nghiệp</MenuItem>
                <MenuItem value={"semi-professional"}>Bán chuyên nghiệp</MenuItem>
                <MenuItem value={"high"}>Cao cấp</MenuItem>
                <MenuItem value={"intermediate"}>Trung cấp</MenuItem>
                <MenuItem value={"funny"}>Vui</MenuItem>
                <MenuItem value={"diff"}>Khác</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full flex gap-4 items-end">
            <TextField
              id="standard-basic"
              label="Số điện thoại"
              variant="standard"
              className="mt-3 w-full"
              value={phone}
              onChange={(e)=>handleChangePhone(e)}
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
                value={age}
                label="Chế độ"
                onChange={(e)=>handleChangeAge(e)}
              >
                <MenuItem value={"1"}>15-20</MenuItem>
                <MenuItem value={"2"}>20-25</MenuItem>
                <MenuItem value={"3"}>25-30</MenuItem>
                <MenuItem value={"4"}> &gt; 30</MenuItem>
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
                value={contact}
                onChange={(e)=>handleChangeContact(e)}
              />
              <TextField
                id="standard-basic"
                label="Địa chỉ email"
                variant="standard"
                className="mt-3 w-full"
                value={email}
                onChange={(e)=>handleChangeEmail(e)}
              />
            </div>
            <div className="flex gap-4">
              <TextField
                id="standard-basic"
                label="Khu vực hoạt động"
                variant="standard"
                className="mt-3 w-full"
                value={area}
                onChange={(e)=>handleChangeArea(e)}
              />
              <TextField
                id="standard-basic"
                label="Khung thời gian hoạt động"
                variant="standard"
                className="mt-3 w-full"
                value={period}
                onChange={(e)=>handleChangePeriod(e)}
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
          <label htmlFor="upload-input-1">
            {/* <img src={file} alt="logo" className="w-48 h-48 object-fit cursor-pointer" /> */}
            <img src={selectedImages[1] ? URL.createObjectURL(selectedImages[1]) : file} alt="logo" className="w-48 h-48 object-fit cursor-pointer" />
          </label>
          <input
            id="upload-input-1"
            type="file"
            accept="image/*"  
            style={{ display: 'none' }}
            // onChange={handleImageChange}
            onChange={(event) => handleChangeImage(event, 1)}
            
          />
        </div>
        <div className="border rounded-md p-2">
          <p className="flex justify-between items-center p-2">
            <span>Đồng phục 1 </span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
          <label htmlFor="upload-input-2">
            <img src={selectedImages[2] ? URL.createObjectURL(selectedImages[2]) : file} alt="logo" className="w-48 h-48 object-fit cursor-pointer" />
          </label>
          <input
            id="upload-input-2"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            // onChange={handleImageChange}
            onChange={(event) => handleChangeImage(event,2)}
          />
        </div>
        <div className="border rounded-md p-2">
          <p className="flex justify-between items-center p-2">
            <span>Đồng phục 1 </span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
          <label htmlFor="upload-input-3">
            <img src={selectedImages[3] ? URL.createObjectURL(selectedImages[3]) : file} alt="logo" className="w-48 h-48 object-fit cursor-pointer" />
          </label>
          <input
            id="upload-input-3"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            // onChange={handleImageChange}
            onChange={(event) => handleChangeImage(event,3)}
          />
        </div>
      </div>
      <Divider />
      <div className="my-10"></div>
      <textarea label="Message" 
      className="w-full h-48 p-4 outline-none border border-solid border-gray-500 rounded-md" 
      placeholder="Nhập giới thiệu về đội" 
      onChange={(e)=>handleChangeIntroduce(e)}
      />
      <div className="my-10 flex justify-center items-center ">
        <button className="bg-gray-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition" 
          type="submit"
          // onClick={handleClick}
        >
          Tạo đội
        </button>
      </div>
    </div>
  );
};

export default CreateTeam;
