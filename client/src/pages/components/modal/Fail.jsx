import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { removeModalFail } from "../../../redux-toolkit/slices/uiSlice";
import './index.css'
const Fail = () => {
  const dispatch = useDispatch();
  const view = useSelector(state => state.ui.modalFail);
  const text = useSelector(state => state.ui.data);
  const nodeRef = useRef(null);
  const buttonClose = () => {
    dispatch(removeModalFail());
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
          <div className="relative p-4 w-full max-w-md m-auto z-52 mt-40">
            {/* Modal content */}
            <div className="relative bg-white roundedLg shadow-md rounded-md">
              <div className="p-4 md:p-5 text-center">
                {/* Modal body content */}
                <svg
                  className="mx-auto mb-4 text-red-500 w-12 h-12 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 textLg font-normal text-red-500">
                 {text}
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className=" rounded-md text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium roundedLg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={() => buttonClose()}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
  );
};

export default Fail;
