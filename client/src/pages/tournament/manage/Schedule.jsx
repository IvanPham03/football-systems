import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Divider from "@mui/material/Divider";
import TableRound from "./TableRound";
import AxiosInstance from "../../../config/AxiosInstance.js";
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { useParams } from "react-router-dom";
const Shedule = ({ round, match }) => {
  const [keyRound, setKeyRound] = useState([
    { name: "1/128", value: undefined },
    { name: "1/64", value: undefined },
    { name: "1/32", value: undefined },
    { name: "1/16", value: undefined },
    { name: "Tứ kết", value: undefined },
    { name: "Bán kết", value: undefined },
    { name: "Chung kết", value: undefined },
  ]);

  const {id} = useParams()
  const [currentSelectRound, setCurrentSelectRound] = useState(null);

  const handleExportFile = async () => {
    try {
      let res = await AxiosInstance.get(`/schedule/exportFile/${id}`, {
        responseType: "arraybuffer", // Specify arraybuffer for binary data
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }, // Set correct Content-Type for XLSX
      });
      // Convert data to desired format (e.g., XLSX)
       if (res) {
        const filename = "schedule.xlsx"; // Customize the filename as needed
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }); // Ensure correct MIME type
        const fileURL = URL.createObjectURL(blob);

        // Trigger browser download using a link (recommended)
        const downloadLink = document.createElement("a");
        downloadLink.href = fileURL;
        downloadLink.download = filename;
        downloadLink.click();

        URL.revokeObjectURL(fileURL);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // sort tại theo thứ tự
  useEffect(() => {
    if (round !== null) {
      keyRound.forEach((e) => {
        round.forEach((r) => {
          if (r.name === e.name) {
            e.value = r;
          }
        });
      });
    }
  }, [round, keyRound]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-10">
      <Divider />
      <div className="flex justify-between my-4">
        <p>
          Có {round && round.length} vòng đấu và {match && match.length} trận
          đấu.
        </p>
        <button
          className="h-5 w-5 hover:opacity-50 transition-all"
          onClick={() => handleExportFile()}
        >
          <FontAwesomeIcon icon={faDownload} className="h-full w-full" />
        </button>
      </div>
      <Divider />
      <div className="flex gap-4 items-center my-10">
        <p>Vòng</p>
        <button
          className="rounded-full bg-blue-400 shadow-md w-[70px] h-[70px] border text-gray-700 font-medium"
          onClick={(e) => setCurrentSelectRound(null)}
        >
          Tất cả
        </button>
        {keyRound &&
          keyRound.map((r) => {
            return r.value !== undefined ? (
              <button
                className="rounded-full bg-blue-400 shadow-md w-[70px] h-[70px] border text-gray-700 font-medium"
                key={r.name}
                onClick={(e) => setCurrentSelectRound(r.value._id)}
              >
                {r.value.name}
              </button>
            ) : (
              ""
            );
          })}
      </div>
      {currentSelectRound === null &&
        match &&
        keyRound.map((k) => {
          return k.value !== undefined ? (
            <TableRound
              round={k.value._id}
              match={match}
              keyRound={keyRound}
              key={k.name}
            />
          ) : (
            ""
          );
        })}
      {currentSelectRound !== null && match && (
        <TableRound
          round={currentSelectRound}
          match={match}
          keyRound={keyRound}
          key={currentSelectRound}
        />
      )}
    </div>
  );
};

export default Shedule;
