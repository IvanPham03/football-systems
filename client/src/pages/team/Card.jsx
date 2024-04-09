import React from "react";
import Divider from "@mui/material/Divider";
import imgteam from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { setView } from "../../redux-toolkit/slices/uiSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Card = ({ team }) => {
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
  const handleClick = (type) => {
    console.log("====================================");
    console.log(type);
    console.log("====================================");
    dispatch(setView(type));
    // setView(type)
    // navigate(`/team-details/${team._id}`)
    navigate(`details/${team._id}`)
    // navigate(`details?teamId=${team._id}`)
  };
  return (
    <div className="max-w-[250px] flex flex-col border rounded-md p-3 shadow-md text-center">
      <div>
        <img
          src={imgteam}
          alt="img-team"
          className="object-cover rounded-md mb-3"
        />
        <Divider />
        <p className="my-2 text-green-500 font-medium hover:scale-110 hover:cursor-pointer hover:text-red-500 hover:text-bold transition-all" 
          onClick={() => handleClick("TeamInfo")}>{team.name}</p>
        <Divider />
        <p className="my-2">{levelMapping[team.level]}</p>
        <Divider />
      </div>
      {
        // số lượng thành viên trong đội
      }
      <div className="mt-0 mx-auto">
        <p className="my-2">Thành viên</p>
        <div className="flex gap-2">
          {/* {
            team && team.player.length > 0 {
              return <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
              <FontAwesomeIcon icon={faUser} />;
            }
          } */}
          <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
            <p>+5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;