import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TableRank = ({ ranks }) => {
  const [roundName, setRoundName] = useState();
  const navigate = useNavigate();
  return (
    <div className="my-10">
      <table className="w-full text-left rtl:text-right ">
        <thead className="">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Tên đội
            </th>
            <th scope="col" className="px-6 py-3">
              Số trận
            </th>
            <th scope="col" className="px-6 py-3 flex gap-1">
              <span className="px-2 bg-orange-500 rounded-md">T</span> /
              <span className="px-2 bg-blue-500 rounded-md">H</span> /
              <span className="px-2 bg-green-500 rounded-md">T</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Hiệu số
            </th>
            <th scope="col" className="px-6 py-3 flex gap-2">
              <span className="px-2 bg-red-500 rounded-md text-red-500">H</span>{" "}
              /
              <span className="px-2 bg-yellow-500 rounded-md text-yellow-500">
                T
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="even:bg-gray-100 odd:bg-white ">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRank;
