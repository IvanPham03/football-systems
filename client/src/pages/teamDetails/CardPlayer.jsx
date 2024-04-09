import React from "react";
import Divider from "@mui/material/Divider";
import imgteam from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import imgplayer from "../../assets/logo/player.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { setView } from "../../redux-toolkit/slices/uiSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";



const CardPlayer = ({ team }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const ui = useSelector(state=>state.ui.view)
  // console.log(ui);
  const levelMapping = {
    professional : "Chuyên nghiệp",
    'semi-professional' : "Bán chuyên nghiệp",
    high : "Cao cấp",
    intermediate : "Trung cấp",
    funny : "Vui",
    diff : "Khác",
  }

  return (
    <div className="max-w-[250px] flex flex-col border border-green-400 rounded-md pt-3 bg-white shadow-md text-center hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1">
        <div>
            <div className="w-3/4 h-9 mb-4 bg-orange-400  rounded-r-full flex items-center justify-center text-white font-bold">
                <p>Vận động viên</p>
            </div>
            <div className="flex items-center justify-center">
                <img
                src={imgplayer}
                alt="img-team"
                className=" rounded-full mb-3 h-40 w-40 object-cover border"
                />
            </div>

            <Divider />
            <p className="my-2 text-green-500 font-medium hover:scale-110 hover:cursor-pointer hover:text-red-500 hover:text-bold transition-all" >
                Thang Nguyen
            </p>
            {/* <p className="my-2">{levelMapping[team.level]}</p> */}
            <p className="my-2">Số áo: 100</p>
            <Divider />

        </div>
        <div className="bg-green-400 h-10 w-full flex items-center justify-center">
            <FontAwesomeIcon
                icon={faArrowRight}
                className="mx-2 hover:text-white hover:translate-x-3 text-xl"
            />
        </div>
    </div>
  );
};

export default CardPlayer;