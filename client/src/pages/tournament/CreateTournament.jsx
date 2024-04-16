import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AxiosInstance from "../../config/AxiosInstance.js";
import ListTeam from "./ListTeam.jsx";
import Format from "./formatTournaments";
import Card from "../team/Card.jsx";
import { useSelector } from "react-redux";
import {
  addSuccessModal,
  removeSpinner,
} from "../../redux-toolkit/slices/uiSlice.js";
import { setUpdate } from "../../redux-toolkit/slices/modalEditTeamSlice.js";
import logo from "../../assets/logo/logo.png";
export default function CreateTournament() {
  const updateTeam = useSelector((state) => state.modalEditTeam.updateClick);
  const nameRedux = useSelector((state) => state.modalEditTeam.name);
  const playersRedux = useSelector((state) => state.modalEditTeam.players);
  const emailRedux = useSelector((state) => state.modalEditTeam.email);
  const contactRedux = useSelector((state) => state.modalEditTeam.contact);
  const indexRedux = useSelector((state) => state.modalEditTeam.index);
  const dispatch = useDispatch();
  const phoneNumberRedux = useSelector(
    (state) => state.modalEditTeam.phoneNumber
  );
  const ageRedux = useSelector((state) => state.modalEditTeam.age);
  const [privacy, setprivacy] = useState("private");
  const [amountPerTeam, setamountPerTeam] = useState(5); // số lượng mỗi đội
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [nameTour, setnameTour] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [venue, setvenue] = useState("");
  const [formatTour, setformatTour] = useState("Knockout");
  const [amountTeam, setamountTeam] = useState(5); // số lượng mỗi đội
  const [registrationDeadline, setRegistrationDeadline] = useState(new Date());
  const [dataDetails, setDataDetails] = useState("");
  const [teamPlayers, setTeamPlayers] = useState(); //
  const [fileContent, setFileContent] = useState("");
  // truyền props lấy data từ file
  const handlePropPlayer = (data) => {
    let res = handleFormatData(data);
    setTeamPlayers(res);
  };
  const handleSubmit = async () => {
    if (
      nameTour &&
      startDate &&
      endDate &&
      phoneNumber &&
      venue &&
      formatTour &&
      privacy
    ) {
      try {
        let res = await AxiosInstance.post("/team-player/create", {
          name: nameTour,
          timeStart: startDate,
          timeEnd: endDate,
          venue: venue,
          phoneNumber: phoneNumber,
          numberPerTeam: amountPerTeam,
          numberTeam: amountTeam,
          pathImage: "",
          formatTour: formatTour,
          privacy: privacy,
          data: teamPlayers,
          registrationDeadline: registrationDeadline,
          dataDetails: dataDetails,
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // handle format data from file
  const handleFormatData = (data) => {
    const res = data.map((e) => {
      const player = e.players.split(",");
      const details = player.map((e) => {
        // tên - sđt - email - số áo - vị trí - ngày sinh
        const detail = e.split("-");
        // dateString = "02/12/2023"; parse
        const dob = moment(detail[5], "DD/MM/YYYY").toDate();

        return {
          name: detail[0],
          phoneNumber: detail[1],
          email: detail[2],
          JerseyNumber: detail[3],
          position: detail[4],
          dob: dob,
        };
      });
      return {
        name: e.nameteam,
        players: details,
        contact: e.contact,
        phoneNumber: e.phonenumber,
        email: e.email,
        age: e.age,
      };
    });
    return res;
  };

 
  //  update team click save
  if (updateTeam) {
    // handleFormatData
    console.log("change");
    console.log(teamPlayers[indexRedux]);
    teamPlayers[indexRedux] = {
      ...teamPlayers[indexRedux],
      name: nameRedux,
      contact: contactRedux,
      email: emailRedux,
      phoneNumber: phoneNumberRedux,
      age: ageRedux,
    };
    setTimeout(() => {
      dispatch(removeSpinner());
      dispatch(addSuccessModal());
    }, 3000);
    dispatch(setUpdate(false));
  }

  // tryền props lấy format tour
  const handleFormatTour = (dataDetails) => {
    setDataDetails(dataDetails);
    console.log(dataDetails);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Tạo giải</h2>
          <p className="my-3">
            Vui lòng nhập thông tin hợp lệ cho các trường được yêu cầu{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>
        <div>
          {" "}
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
            Hướng dẫn
          </button>
        </div>
      </div>
      <Divider />
      <div className="my-10 flex justify-between items-center">
        <div className="mt-0 mx-auto w-1/5 flex flex-col items-centererit">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzV7rP57gl8FkWOyNKYRaDXptXufeYO0ix0_MACg9BF1N3plZm1_bmlF-CzRMGGP569A&usqp=CAU"
            alt="logo tournament"
            className="w-56 h-56 object-cover"
          />
        </div>
        <div className="w-2/3 flex  flex-col gap-3">
          <TextField
            label="Tên giải đấu"
            variant="standard"
            className="mt-3"
            onChange={(e) => {
              setnameTour(e.target.value);
            }}
          />
          <div className="flex justify-between gap-10">
            <TextField
              label="Số điện thoại"
              variant="standard"
              className="mt-3 grow"
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
            <TextField
              label="Email"
              variant="standard"
              value={email}
              className="mt-3 grow"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <FormControl sx={{ minWidth: 120, mt: 3 }} size="small">
            <InputLabel id="demo-select-small-label">Chế độ</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={privacy}
              label="Chế độ"
              onChange={(e) => {
                setprivacy(e.target.value);
              }}
            >
              <MenuItem value={"private"}>Riêng tư</MenuItem>
              <MenuItem value={"public"}>Công khai</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Địa điểm"
            variant="standard"
            className="mt-3"
            onChange={(e) => {
              setvenue(e.target.value);
            }}
          />
          <div className="flex justify-between my-2">
            <p>Thời gian giải dấu:</p>
            <div className="flex justify-between gap-2">
              <div>
                <span>Từ: </span>{" "}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div>
                <span>đến: </span>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between ">
            <span className="flex items-center gap-2 grow">
              <p>Cho phép người chơi tham gia</p>
              <input type="checkbox" className="h-4 w-4" />
            </span>
            <div className="">
              <span>Hạn đăng ký: </span>
              <DatePicker
                selected={registrationDeadline}
                onChange={(date) => setRegistrationDeadline(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="my-10">
        <h3 className="text-xl">Hình thức thi đấu</h3>
        <div className="flex justify-between items-center  border p-4 rounded-md mt-4">
          <div
            className={`mt-0 mx-auto w-1/5 flex transition-all flex-col items-center hover:cursor-pointer ${
              formatTour === "Knockout" ? "scale-110" : ""
            }`}
            onClick={() => {
              setformatTour("Knockout");
            }}
          >
            <img
              src={logo}
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Đấu loại trực tiếp</p>
          </div>
          <div
            className={`mt-0 mx-auto w-1/5 flex transition-all flex-col items-center hover:cursor-pointer ${
              formatTour === "League" ? "scale-110" : ""
            }`}
            onClick={() => {
              setformatTour("League");
            }}
          >
            <img
              src={logo}
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Đấu vòng tròn</p>
          </div>
          <div
            className={`mt-0 mx-auto w-1/5 flex transition-all flex-col items-center hover:cursor-pointer ${
              formatTour === "Hybrid" ? "scale-110" : ""
            }`}
            onClick={() => {
              setformatTour("Hybrid");
            }}
          >
            <img
              src={logo}
              alt="logo tournament"
              className="w-32 h-32 object-cover mt-4"
            />
            <p className="text-center py-2">Đấu kết hợp</p>
          </div>
        </div>
      </div>
      <Divider />
      <Format type={formatTour} handleFormatTour={handleFormatTour} />
      <div className="my-10 flex gap-4 justify-between items-end">
        <div className=" grow">
          <TextField
            label="Số lượng đội"
            variant="standard"
            value={amountTeam}
            className="mt-3 w-full"
            onChange={(e) => {
              setamountTeam(e.target.value);
            }}
          />
        </div>
        <div className="">
          <p>Số lượng người thi đấu trên sân của mỗi đội.</p>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={amountPerTeam}
            label="Số lượng người thi đấu trên sân của mỗi đội."
            variant="standard"
            onChange={(e) => {
              setamountPerTeam(e.target.value);
            }}
            className="w-full"
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={11}>11</MenuItem>
          </Select>
        </div>
        <p className="bg-red-500 text-white py-1 px-2 rounded-md">
          Đối với cấu hình này thì số lượng trận đấu của giải là:{" "}
          <span className="font-bold">100</span>{" "}
        </p>
      </div>

      <Divider />
      <ListTeam handlePropPlayer={handlePropPlayer} />
      <div className="grid grid-cols-4 gap-4 justify-items-center my-4">
        {teamPlayers &&
          teamPlayers.map((e, i) => {
            return <Card key={i} data={e} index={i} />;
          })}
      </div>
      <Divider />
      <div className="my-10 flex justify-center items-center ">
        <button
          className="bg-gray-500 text-white rounded-md py-3 px-8 hover:bg-red-500 transition"
          onClick={() => {
            handleSubmit();
          }}
        >
          Tạo giải
        </button>
      </div>
    </div>
  );
}
