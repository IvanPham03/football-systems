import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import Card from "../team/Card";
import * as XLSX from "xlsx";
import { setModalFail } from "../../redux-toolkit/slices/uiSlice";
const ListTeam = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const handleReadFile = (file) => {
    // Hủy thao tác đọc file trước (nếu có)
    const reader = new FileReader();
    if (reader && reader.readyState === 1) {
      reader.abort();
    }
    setFile(file);
    reader.onload = (event) => {
      //reader không có định nghĩa sẵn cho cách xử lý sự kiện onload do đó phải viết truoc reader
      const arrayBuffer = event.target.result;
      const workbook = XLSX.read(arrayBuffer, { type: "array" }); //Dòng này sử dụng hàm XLSX.read để phân tích nội dung của arrayBuffer như một bảng tính Excel.
      // Lặp qua từng hàng trong worksheet đầu tiên
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
      jsonData.forEach((element) => {
        if (element.nameteam && element.players) {
          // loop qua xem dung dinh dang khog
          // tên-sđt-emaill-số áo-vị trí-ngày sinh
          let players = element.players.split(",");
          players.forEach((e) => {
            let temp = e.split("-");
            if (!temp.length === 6) {
              document.body.classList.add("overflow-hidden");
              dispatch(setModalFail());
              return;
            }
          });
        } else {
          // Chặn scroll khi modal hiển thị
          document.body.classList.add("overflow-hidden");
          dispatch(setModalFail());
          return;
        }
      });
    };
    reader.readAsArrayBuffer(file);

    // Reset trạng thái file sau khi xử lý xong
    setFile(null);
  };
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleReadFile(fileUploaded);
    hiddenFileInput.current.value = null; // xoá file hiện tại để nếu người dùng click cùng 1 file 2 lần thì nó vẫn đọc
  };
  return (
    <div>
      <div className="flex justify-between items-center h-10">
        <p>Danh sách đội</p>
        <div className="flex gap-6">
          {" "}
          <FontAwesomeIcon icon={faPlus} className="h-5" />
          <div>
            <FontAwesomeIcon
              icon={faFileImport}
              className="h-5 hover:opacity-50 hover:cursor-pointer"
              ref={inputRef}
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="file"
              onChange={handleChange}
              ref={hiddenFileInput}
              style={{ display: "none" }} // Make the file input element invisible
            />
          </div>
          <p>Tải file dữ liệu mẫu</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center my-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ListTeam;
