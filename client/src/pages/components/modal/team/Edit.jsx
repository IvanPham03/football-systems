import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faCircleUser,
  faXmark,
  faEnvelope,
  faPhoneVolume,
  faUsers,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  setModalEditTeam,
  setUpdate,
  update,
} from "../../../../redux-toolkit/slices/modalEditTeamSlice";
import { addSpinner } from "../../../../redux-toolkit/slices/uiSlice";
const Edit = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.modalEditTeam.modal);
  const name = useSelector((state) => state.modalEditTeam.name);
  const players = useSelector((state) => state.modalEditTeam.players);
  const email = useSelector((state) => state.modalEditTeam.email);
  const contact = useSelector((state) => state.modalEditTeam.contact);
  const phoneNumber = useSelector((state) => state.modalEditTeam.phoneNumber);
  const age = useSelector((state) => state.modalEditTeam.age);
  const index = useSelector((state) => state.modalEditTeam.index);
  const nodeRef = useRef(null);
  const [nameNew, setnameNew] = useState();
  const [playersNew, setplayersNew] = useState();
  const [emailNew, setemailNew] = useState();
  const [contactNew, setcontactNew] = useState();
  const [phoneNumberNew, setphoneNumberNew] = useState();
  const [ageNew, setageNew] = useState();
  const [btnShow, setBtnShow] = useState(true);
  const buttonClose = () => {
    dispatch(setModalEditTeam({ name: "", players: [] }));
    // Cho phép scroll khi modal ẩn đi
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    setnameNew(name);
    setplayersNew(players.length);
    setemailNew(email);
    setcontactNew(contact);
    setphoneNumberNew(phoneNumber);
    setageNew(age);
    setBtnShow(true);
  }, [name, players, email, contact, phoneNumber, age]);

  const handleSave = () => {
    document.body.classList.add("overflow-hidden");
    buttonClose();
    dispatch(addSpinner());
    if (
      name !== nameNew ||
      contact !== contactNew ||
      players !== playersNew ||
      phoneNumber !== phoneNumberNew ||
      email !== emailNew ||
      age !== ageNew
    ) {
      dispatch(
        update({
          name: nameNew,
          contact: contactNew,
          players: playersNew,
          phoneNumber: phoneNumberNew,
          email: emailNew,
          age: ageNew,
          index: index,
        })
      );
      dispatch(setUpdate(true));
    }
  };
  return (
    <CSSTransition
      in={view} // Điều khiển hiệu ứng dựa trên state
      timeout={300} // Thời gian animation (tùy chỉnh)
      classNames="alert" // Class chứa animation
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="fixed top-0 right-0 left-0 bottom-0 z-50 overflow-hidden justify-center items-center w-full h-full flex bg-black-rgba"
      >
        <div className="bg-gray-700 w-1/2 text-white p-4 rounded-md relative -top-14 shadow-2xl border border-gray-500">
          <div className="relative flex justify-end h-6 w-full mx-4 -my-4">
            <FontAwesomeIcon
              icon={faXmark}
              className="h-full hover:cursor-pointer hover:text-red-500 p-4"
              onClick={() => buttonClose()}
            />
          </div>
          <p className="text-4xl p-4">{nameNew}</p>
          <div className="my-2 flex justify-between gap-4">
            <span className="flex items-center w-1/3">
              <FontAwesomeIcon className="w-1/4" icon={faCircleUser} /> Người
              liên hệ:{" "}
            </span>{" "}
            <input
              type="text"
              value={contactNew}
              className="bg-transparent outline-none border-none grow"
              onChange={(e) => {
                if (contact !== e.target.value) {
                  setBtnShow(false);
                }
                setcontactNew(e.target.value);
              }}
            />
          </div>
          <div className="my-2 flex justify-between gap-4">
            <span className="flex items-center w-1/3">
              <FontAwesomeIcon className="w-1/4" icon={faPhoneVolume} /> Số điện
              thoại:{" "}
            </span>{" "}
            <input
              type="text"
              value={phoneNumberNew}
              className="bg-transparent outline-none border-none grow"
              onChange={(e) => {
                if (phoneNumber !== e.target.value) {
                  setBtnShow(false);
                }
                setphoneNumberNew(e.target.value);
              }}
            />
          </div>
          <div className="my-2 flex justify-between gap-4">
            <span className="flex items-center w-1/3">
              <FontAwesomeIcon className="w-1/4" icon={faEnvelope} /> Email:{" "}
            </span>{" "}
            <input
              type="text"
              value={emailNew}
              className="bg-transparent outline-none border-none grow"
              onChange={(e) => {
                if (email !== e.target.value) {
                  setBtnShow(false);
                }
                setemailNew(e.target.value);
              }}
            />
          </div>
          <div className="my-2 flex justify-between gap-4">
            <span className="flex items-center w-1/3">
              <FontAwesomeIcon className="w-1/4" icon={faUsers} /> Thành viên:{" "}
            </span>{" "}
            <input
              type="text"
              value={playersNew}
              className="bg-transparent outline-none border-none grow"
            />
          </div>
          <div className="my-2 flex justify-between gap-4">
            <span className="flex items-center w-1/3">
              <FontAwesomeIcon className="w-1/4" icon={faCakeCandles} /> Độ
              tuổi:{" "}
            </span>{" "}
            <input
              type="text"
              value={ageNew}
              className="bg-transparent outline-none border-none grow"
              onChange={(e) => {
                if (ageNew !== e.target.value) {
                  setBtnShow(false);
                }
                setageNew(e.target.value);
              }}
            />
          </div>
          <p className="my-4 px-4 font-bold flex gap-8 items-center">
            <span> Danh sách thành viên </span>
            <svg className="animate-pulse w-6 h-6">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="hover:cursor-pointer hover:text-red-500 transition-all"
              />
            </svg>
          </p>
          <div className="p-1">
            <button
              disabled={btnShow}
              onClick={() => handleSave()}
              className={`my-2 mx-auto block rounded-md bg-gray-200 px-4 py-1 text-gray-400 opacity-75 ${
                btnShow === true
                  ? ""
                  : "hover:bg-red-500 hover:text-white text-white bg-gray-500 "
              } transition-all`}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Edit;
