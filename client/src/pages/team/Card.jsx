import React, { useEffect, useRef, useState } from "react";
import Divider from "@mui/material/Divider";
import imgteam from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  setModalEditTeam,
  update,
} from "../../redux-toolkit/slices/modalEditTeamSlice";
const Card = ({ data, index }) => {
  const dispatch = useDispatch();
  const [numIconsToShow, setNumIconsToShow] = useState(3);
  const container = useRef(null);
  const icon = useRef(null);
  const handleClickCard = (index) => {
    dispatch(setModalEditTeam());
    dispatch(
      update({
        name: data.name,
        players: data.players,
        contact: data.contact,
        phoneNumber: data.phoneNumber,
        email: data.email,
        age: data.age,
        index: index
      })
    );
    document.body.classList.add("overflow-hidden");
  };
  useEffect(() => {
    const updateIconCount = () => {
      const containerWidth = container.current?.offsetWidth;
      const iconWidth = icon.current?.offsetWidth;
      const maxIcons = Math.floor(containerWidth / iconWidth);
      setNumIconsToShow(Math.min(maxIcons, 3)); // Ensure max of 3 icons
    };
    updateIconCount(); // Call initially for proper rendering
  }, []);

  return (
    <div className="max-w-[250px] flex flex-col border rounded-md p-3 text-center shadow-2xl">
      <div>
        <img
          src={imgteam}
          alt="img-team"
          className="object-cover rounded-md mb-3"
        />
        <Divider />
        <p
          className="my-2 hover:scale-110 hover:cursor-pointer hover:text-red-500 hover:text-bold transition-all"
          onClick={() => handleClickCard(index)}
        >
          {data.name}
        </p>
        <Divider />
      </div>
      {
        // số lượng thành viên trong đội
      }
      <div className="mt-0 mx-auto">
        <p className="my-2">Thành viên</p>
        <div className="flex gap-2" ref={container}>
          {Array(numIconsToShow)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="rounded-full border w-10 h-10  flex items-center justify-center bg-gray-100 shadow-md"
                ref={icon}
              >
                <FontAwesomeIcon icon={faUser} />
              </div>
            ))}
          {numIconsToShow < data.players.length && ( // Only show +n if less than number of team
            <div className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 shadow-md">
              <p>+{data.players.length - numIconsToShow}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
