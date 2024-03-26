import React from "react";
import bg from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(50px)",
      }}
    >
      <div className="bg-gray-800bg-transparent h-full flex flex-col items-center justify-center">
        <form className="max-w-[500px] w-full mx-auto rounded-lg  p-8 px-8">
          <h2 className="text-5xl dark:text-white font-bold text-center p-2">
            Đăng nhập
          </h2>
          <div className="flex flex-col text-gray-200 py-2">
            <label>Email</label>
            <input
              className="rounded-lg mt-2 p-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-200 py-2 ">
            <label>Mật khẩu</label>
            <input
              className="p-2 rounded-lg mt-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-200 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Lưu mật khẩu
            </p>
            <p className="hover:opacity-50 hover:cursor-pointer">
              Quên mật khẩu
            </p>
          </div>
          <button className="w-full my-5 py-2 bg-gray-500 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg">
            Đăng nhập
          </button>
        </form>
        <p className="text-gray-200">
          Bạn chưa có tài khoản?{" "}
          <span className="text-red-500 hover:opacity-50 hover:cursor-pointer">
            Đăng ký tại đây
          </span>
        </p>
        <div className="my-10" role="tooltip">
          <FontAwesomeIcon icon={faArrowLeft} className="text-3xl text-white border-2 border-solid p-3 rounded-full hover:opacity-50 transition-all hover:cursor-pointer" onClick={()=>{
            navigate('/')
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
