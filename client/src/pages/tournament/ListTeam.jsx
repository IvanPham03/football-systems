import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import {
  addModalFail,
  addSpinner,
  removeSpinner,
} from "../../redux-toolkit/slices/uiSlice";
import AxiosInstance from "../../config/AxiosInstance.js";
const ListTeam = ({ handlePropPlayer }) => {
  const inputRef = useRef();
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const handleReadFile = (file, callback) => {
    // Hủy thao tác đọc file trước (nếu có)
    const reader = new FileReader();
    if (reader && reader.readyState === 1) {
      reader.abort();
    }
    reader.onload = (event) => {
      try {
        //reader không có định nghĩa sẵn cho cách xử lý sự kiện onload do đó phải viết truoc reader
        const arrayBuffer = event.target.result;

        const workbook = XLSX.read(arrayBuffer, { type: "array" }); //Dòng này sử dụng hàm XLSX.read để phân tích nội dung của arrayBuffer như một bảng tính Excel.
        // Kiểm tra định dạng file
        if (workbook.Workbook === undefined) {
          document.body.classList.add("overflow-hidden");
          dispatch(addModalFail("Định dạng file không hợp lệ"));
          console.error("File không hợp lệ");
          return;
        }
        // Lặp qua từng hàng trong worksheet đầu tiên
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        let i = 0;
        let flag = true;
        for (; i < jsonData.length; i++) {
          if (
            jsonData[i].nameteam &&
            jsonData[i].players &&
            jsonData[i].phonenumber &&
            jsonData[i].age &&
            jsonData[i].contact &&
            jsonData[i].email
          ) {
            // loop qua xem dung dinh dang khog
            // tên-sđt-emaill-số áo-vị trí-ngày sinh
            let players = jsonData[i].players.split(",");
            players.forEach((e) => {
              let temp = e.split("-");
              if (!temp.length === 6) {
                document.body.classList.add("overflow-hidden");
                dispatch(
                  addModalFail("Cấu trúc không hợp lệ, vui lòng kiểm tra lại.")
                );
                return; // Thoát khỏi vòng lặp for
              }
            });
          } else {
            // Chặn scroll khi modal hiển thị
            document.body.classList.add("overflow-hidden");
            dispatch(
              addModalFail("Cấu trúc không hợp lệ, vui lòng kiểm tra lại.")
            );
            console.log("Cấu trúc không hợp lệ, vui lòng kiểm tra lại");
            flag = false;
            break; // Thoát khỏi vòng lặp for
          }
        }
        if (flag) {
          setFile(file.name);
          callback(jsonData);
        }
      } catch (error) {
        // không đọc được là quăng lỗi luộn, không nói nhiều
        document.body.classList.add("overflow-hidden");
        dispatch(addModalFail("File không hợp lệ."));
      }
    };
    reader.readAsArrayBuffer(file);
    dispatch(removeSpinner());
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
    dispatch(addSpinner());
    setTimeout(() => {
      handleReadFile(fileUploaded, handlePropPlayer);
      hiddenFileInput.current.value = null;
    }, 3000);
    // xoá file hiện tại để nếu người dùng click cùng 1 file 2 lần thì nó vẫn đọc
  };

  const handleGetFile = async () => {
    try {
      let res = await AxiosInstance.get("/team-player/download-file", {
        responseType: "arraybuffer", // Specify arraybuffer for binary data
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }, // Set correct Content-Type for XLSX
      });
      if (res) {
        const filename = "sample.xlsx"; // Customize the filename as needed
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
            <span className="ml-2">{file}</span>
          </div>
          <p onClick={() => handleGetFile()}>Tải file dữ liệu mẫu</p>
        </div>
      </div>
    </div>
  );
};

export default ListTeam;
