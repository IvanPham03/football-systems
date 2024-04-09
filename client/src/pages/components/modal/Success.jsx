import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import "./success.css";
import { removeSuccessModal } from "../../../redux-toolkit/slices/uiSlice";
const Fail = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.ui.successModal);
  const nodeRef = useRef(null);
  const buttonClose = () => {
    dispatch(removeSuccessModal());
    // Cho phép scroll khi modal ẩn đi
    document.body.classList.remove("overflow-hidden");
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
        <div className="relative p-4 w-full max-w-md m-auto z-52 mt-40 bg-white flex gap-5 flex-col rounded-md justify-center items-center">
          <div className="success-animation">
            <svg
              className="checkmark "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <button
            className="block mx-auto py-2 px-6 bg-slate-700 text-white hover:bg-red-500 rounded-md"
            onClick={() => buttonClose()}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Fail;
