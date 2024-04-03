import { faEye, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setView } from "../../../redux-toolkit/slices/uiSlice.js";


const Card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ui = useSelector(state=>state.ui.view)
  console.log(ui);
  const handleClick = (type) => {
    // console.log("====================================");
    // console.log(type);
    // console.log("====================================");
    dispatch(setView(type)); 

    navigate("/info")
  };
  return (
    // <div >
    <div onClick={()=>handleClick("TeamInfo")}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg" >
        <img
          className="w-full"
          src="https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"
          alt="img test"
        />
        <div className="flex justify-center items-center -mt-[45px]">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt=""
            className="w-[90px] h-[90px] object-cover shadow-2xl rounded-md"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Yagami S Leaguet</div>
          <p className="text-gray-700 text-base">
            <span>Chia Bảng Đấu ║</span>
            <span>Bóng Đá Sân 7 ║</span>
            <span>{tournament.venue}</span>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FontAwesomeIcon icon={faPeopleGroup} /> <span>32</span>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FontAwesomeIcon icon={faEye} /> <span>32</span>
          </span>
          <div className="my-10">
            <div className="w-full bg-gray-200 rounded-md h-[15px]">
              <div
                className="bg-blue-500  w-full text-center text-[10px] font-medium leading-none text-primary-100 overflow-hidden rounded-md h-[15px]"
                style={{ width: "60%" }}
              ></div>
              <div className="text-[10px] flex justify-center -mt-[15px] overflow-hidden">
                60/100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
