<<<<<<< HEAD
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
const index = () => {
  return (
    <div className="min-h-[1000px] p-24 bg-gray-300 ">
      <div className="flex flex-col items-center justify-between gap-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea className='flex flex-col items-center justify-between'>
        <CardMedia
          component="img"
          image={"https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"}
          className='p-5'
          alt="team logo"
          style={{ objectFit: 'cover', width: '100%', height: '200px' }} // Ensure image fills container
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' ,color:'green',fontWeight:'bold'}}>
            team logo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex flex-col'>
        <div className='mx-auto'>Thành viên</div>
        <img src={"https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"} alt="member" className='w-10 h-10 rounded-full mx-auto' /> {/* Adjust image size and style */}
      </CardActions>
    </Card>




        


      </div>
    </div>


  )
}

export default index
=======
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
>>>>>>> dcce4c59056ba13d9cea71cbdbfb3e5868fd54bf
