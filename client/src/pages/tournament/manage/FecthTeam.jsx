import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import AxiosInstance from "../../../config/AxiosInstance.js";
export const FetchTeam = ({ id, winner }) => {
  const [team, setTeam] = useState();
  console.log(winner);
  console.log(id);
  useEffect(() => {
    const fecth = async () => {
      try {
        if (id !== undefined) {
          let res = await AxiosInstance.get(`/team-player/${id}`);
          if (res) {
            setTeam(res.data);
           
          }
        }
      } catch (error) {
        console.log("team:::" + error);
      }
    };
    fecth();
  }, [id]);
  return (
    <p
      className={`flex items-center gap-2 h-10 ${
        winner === id? "scale-110 text-red-500" : ""
      }`}
    >
      <img src={logo} alt="logo" className="w-5 h-5 object-cover" />
      <span>{team?.name || "____"}</span>
    </p>
  );
};
export default FetchTeam;
