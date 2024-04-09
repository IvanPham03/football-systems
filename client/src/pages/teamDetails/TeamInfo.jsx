import imgteam from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPhoneSquare, faMailBulk, faPeopleGroup, faLevelUp, faBirthdayCake, faSave } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import AxiosInstance from "../../config/AxiosInstance";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import CardPlayer from "./CardPlayer"
import Button from '@mui/material/Button';
import {faAdd, faPrint } from "@fortawesome/free-solid-svg-icons";
import imgplayer from "../../assets/logo/player.png";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";



const TeamInfo = () => {
    const { idTeam } = useParams();
    // const teamId = useParams().teamId;
    // console.log(`ID là: ${teamId}`);
    console.log(`ID là: ${idTeam}`);
    // console.log(teamId.idTeam);
    const [team, setTeam] = useState(null);
    const ageMapping = {
        1 : "15 - 20",
        2 : "20 - 25",
        3 : "25 - 30",
        4 : ">30"

    }
    const levelMapping = {
        professional : "Chuyên nghiệp",
        'semi-professional' : "Bán chuyên nghiệp",
        high : "Cao cấp",
        intermediate : "Trung cấp",
        funny : "Vui",
        diff : "Khác",
      }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await AxiosInstance.get(`/team/${idTeam}`);
            console.log("====================================");
            console.log(response.data);
            console.log("====================================");
            setTeam(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      },[]);
    const [auth,setAuth] = useState(true)
    return (
        <div className="min-h-[1000px] ">
            {/* <div className="min-w-full min-h-96 grow flex justify-between  bg-no-repeat bg-left-bottom  w-full h-200 pb-5" style={{backgroundImage: `url(${imgteam})`}} > */}
            <div className="min-w-full min-h-96 grow flex justify-between rounded shadow-md w-full h-200 pb-5 bg-gradient-to-r from-slate-900 to-gray-500"  >
                <div className="w-2/5 flex items-center justify-center mb-5">
                    <img src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
                        className="h-72 w-72 object-cover" ></img>
                </div>
                <div className="w-3/5 mt-5">
                    <div className="flex justify-between my-5">
                        <h2 className="text-3xl font-bold text-white py-2">{team && team.name}</h2>
                        <div className="px-10">
                        {" "}
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 ">
                            Gia nhập đội
                        </button>
                    </div>
                    </div>

                    <table className="w-full border-separate border-spacing-y-2">
                        {/* <thead>
                            <tr>
                            <th className="px-0"></th>
                            <th className="px-0"></th>
                            </tr>
                        </thead> */}
                        <tr className="text-white ">
                            <td className="py-1 w-2/6">
                                <FontAwesomeIcon
                                    icon={faCircleUser}
                                    className="mx-2"
                                />Người liên hệ:
                            </td>
                            <td className="py-1 w-4/6 font-bold italic">
                                {team && team.contact}
                            </td>
                        </tr>
                        <tr className="text-white">
                            <td className="py-1">
                                <FontAwesomeIcon
                                    icon={faPhoneSquare}
                                    className="mx-2"
                                />Số điện thoại:
                            </td>
                            <td className="py-1 font-bold italic">
                                {team && team.phone}
                            </td>
                        </tr>
                        <tr className="text-white">
                            <td>
                                <FontAwesomeIcon
                                    icon={faMailBulk}
                                    className="mx-2"
                                />Email:
                            </td>
                            <td className="py-1 font-bold italic">
                                {team && team.email}
                            </td>
                        </tr>
                        <tr className="text-white">
                            <td className="py-1">
                                <FontAwesomeIcon
                                    icon={faPeopleGroup}
                                    className="mx-2"
                                />Thành viên:
                            </td>
                            <td className="py-1 font-bold italic">
                                {team && team.player.length}
                            </td>
                        </tr>
                        <tr className="text-white">
                            <td className="py-1">
                                <FontAwesomeIcon
                                    icon={faLevelUp}
                                    className="mx-2"
                                />Trình độ:
                            </td>
                            <td className="py-1 font-bold italic">
                                {team && levelMapping[team.level]}
                            </td>
                        </tr>
                        <tr className="text-white">
                            <td className="py-1">
                                <FontAwesomeIcon
                                    icon={faBirthdayCake}
                                    className="mx-2"
                                />Độ tuổi:
                            </td>
                            <td className="py-1 font-bold italic">
                                {team && ageMapping[team.age]}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="my-5 bg-gray-200 flex flex-col min-h-screen p-5 rounded shadow-md">
                <div className="font-bold">
                    Giới thiệu:
                </div>
                <div className="my-2 p-5 bg-gray-300 rounded-md shadow-md">
                    {team && team.introduce}
                </div>
                <Divider />

                <div className="p-5 text-2xl text-gray-600 font-medium text-center">
                    Thông tin thành viên
                </div>
                <Divider />
                <div className="pt-5 text-lg">
                    Có tất cả 24 thành viên
                </div>
                { auth && (
                    <div className="my-2 p-5 bg-gray-300 rounded-md shadow-md flex justify-between">
                        <button className="bg-gradient-to-r from-green-400 to-green-900 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-green-300 hover:to-green-600 ">
                            <FontAwesomeIcon
                                        icon={faAdd}
                                        className="mx-2"
                            />Thêm thành viên
                        </button>
                        <div className="flex gap-5">
                            <p className="p-2 text-green-700 hover:cursor-pointer">Tải mẫu tệp về</p>
                            <div className="bg-blue-300 p-2 rounded-lg hover:bg-blue-500 hover:cursor-pointer">
                                <FontAwesomeIcon
                                            icon={faPrint}
                                            className="mx-2"
                                />Nhập tệp tin
                            </div>
                        </div>
                    </div>
                )}
                <div className="my-2 p-5 bg-white rounded-md shadow-md flex justify-between border border-green-400">
                    <div className="w-2/5 flex items-center justify-center">
                        <img
                            src={imgplayer}
                            alt="img-team"
                            className=" rounded-full mb-3 h-40 w-40 object-cover border"
                        />
                    </div>
                    <div className="w-3/5 grid grid-cols-2 gap-4">
                            <TextField
                                id="outlined-size-small"
                                defaultValue={""}
                                size="small"
                                placeholder="Số áo"
                                className="w-full"
                            />
                                <TextField
                                    id="outlined-size-small"
                                    defaultValue={""}
                                    size="small"
                                    placeholder="Họ tên đầy đủ"
                                />
                            <FormControl 
                                sx={{ minWidth: 200 }}
                                className="col-span-2 w-full" 
                                size="small"
                            >
                                <InputLabel id="demo-select-small-label">Vị trí</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    label="Vị trí"
                                    value={""}
                                >
                                    <MenuItem value={"ThuMon"}>Thủ môn</MenuItem>
                                    <MenuItem value={"HauVe"}>Hậu vệ</MenuItem>
                                    <MenuItem value={"TienVe"}>Tiền vệ</MenuItem>
                                    <MenuItem value={"TienDao"}>Tiền đạo</MenuItem>
                                    <MenuItem value={"Khac"}>Khác</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="outlined-size-small"
                                defaultValue={""}
                                size="small"
                                placeholder="Số điện thoại"
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue={""}
                                size="small"
                                placeholder="Tên trên áo"
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue={""}
                                size="small"
                                placeholder="Ngày tháng năm sinh"
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue={""}
                                size="small"
                                placeholder="Địa chỉ Email"
                            />
                    </div>
                </div>
                <div className="flex justify-end mx-4">
                    <div className=" bg-purple-500 p-2 rounded-lg hover:bg-blue-500 hover:cursor-pointer">
                        <FontAwesomeIcon
                                    icon={faSave}
                                    className="mx-2"
                        />Lưu
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 my-10">
                    <CardPlayer />
                    <CardPlayer />
                    <CardPlayer />
                    <CardPlayer />
                    <CardPlayer />


                </div>
            </div>
        </div>
    );
}
export default TeamInfo