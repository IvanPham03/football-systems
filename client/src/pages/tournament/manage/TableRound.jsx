import React, { useEffect, useState } from "react";
import FetchTeam from "./FecthTeam";
import { useNavigate } from "react-router-dom";
const TableRound = ({ round, match, keyRound }) => {
  const [table, setTable] = useState();
  const [roundName, setRoundName] = useState();
  const navigate = useNavigate();

  console.log(table);
  useEffect(() => {
    if (match !== null) {
      const temp = match.filter((e) => {
        return e.round_Id === round;
      });
      const teampSortted = temp.sort((a, b) => {
        // a - b > 0 => a lớn hơn b
        // a - b < 0 => b lơn hơn a
        return a.ordinalNumber - b.ordinalNumber;
      });
      setTable(teampSortted);
    }
    if (keyRound !== null) {
      keyRound.forEach((element) => {
        if (element.value?._id === round) {
          setRoundName(element.name);
        }
      });
    }
  }, []);

  return (
    <div className="text-center border rounded-tl-md rounded-tr-md mt-5">
      <p className="font-bold text-2xl bg-gray-500 rounded-tl-md rounded-tr-md py-3 text-white">
        Vòng {roundName ? roundName : ""}
      </p>
      <div>
        {table &&
          table.map((e) => {
            return (
              <div
                className="even:bg-gray-100 odd:bg-white flex w-full items-center"
                key={e._id}
                onClick={() => navigate(`/match/detail/${e._id}`)}
              >
                <p className="rounded-full bg-blue-200 w-6 h-6 ml-2">
                  {e.ordinalNumber}
                </p>
                <div className="flex grow justify-center gap-4 items-center py-2 -ml-6">
                  <FetchTeam id={e.teamA} winner={e.winner} />
                  <p className="px-8 py-2 bg-blue-200 rounded-md shadow">
                    {e.date || "Chưa có lịch đấu"}
                  </p>
                  <FetchTeam id={e.teamB} winner={e.winner}/>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TableRound;
