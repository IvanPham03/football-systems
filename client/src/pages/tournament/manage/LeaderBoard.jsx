import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import TableRank from "./TableRank";

const LeaderBoard = () => {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <div className="h-[1000px]">
      <div className="flex justify-between my-10">
        <button>
          <FontAwesomeIcon icon={faDownload} /> <span>Tải về</span>
        </button>
        <span className="flex gap-2">
          <span className="px-2 bg-orange-500 rounded-md">T</span>
          <span className="px-2 bg-blue-500 rounded-md">H</span>
          <span className="px-2 bg-green-500 rounded-md">T</span>
          <span>= Thắng - Hòa - Thua</span>
        </span>
      </div>
      <div>
        <TableRank className="bg-red-500" />
      </div>
      <div className="border rounded-md border-gray-700 p-2">
        <p className="font-medium">Quy tắc xếp hạng</p>
        <p>1. Tổng số trận đã thi đấu.</p>

        <p>2. Số trận thắng.</p>

        <p>3. Số trận hòa.</p>

        <p>4. Số trận thua.</p>

        <p>5. Tổng số thẻ vàng.</p>

        <p>6. Tổng số thẻ đỏ.</p>

        <p>
          7. Nếu những quy tắc trên vẫn không phân định được thứ hạng, BTC giải
          sẽ thực hiện phân hạng theo cách thủ công.
        </p>
      </div>
    </div>
  );
};

export default LeaderBoard;
