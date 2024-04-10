import React, { useState } from "react";
import bg from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../.../../../config/AxiosInstance.js";
import { useDispatch } from 'react-redux';
import { login } from '../../redux-toolkit/slices/sessionSlice.js';
const Login = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState();

  const handleClickSubmit = async () => {
    // Basic validation (improve based on your specific requirements)
    if (!email || !password) {
      seterror("Email hoặc mật khẩu không hợp lệ!");
    } else {
      let res = await AxiosInstance.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
      if (res.status) {
        dispatch(login({token: res.data[0]?.accesstoken, name: res.data[0]?.name, role: res.data[0]?.role}))
        if (res.data[0]?.role === 'admin') {
         console.log('====================================');
         console.log(res.data[0]?.role);
         console.log('====================================');
          navigate("/admin");
        }
        else {
          navigate('/')
        }
      } else {
        seterror("Email hoặc mật khẩu không chính xác!");
      }
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(50px)",
      }}
    >
      <div className="bg-gray-800bg-transparent h-screen flex flex-col items-center justify-center max-w-[500px] xl:w-[500px]">
        <div className="max-w-[500px] w-full mx-auto rounded-lg">
          <div className="my-10 flex justify-center" role="tooltip">
            <div className=" p-6rounded-full hover:opacity-50 transition-all hover:cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-28 object-cover  hover:opacity-50 transition-all hover:cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
          <h2 className="text-3xl dark:text-white font-bold text-center px-2">
            Đăng nhập
          </h2>
          <div className="flex flex-col text-gray-200 py-2">
            <label>Email</label>
            <input
              className="rounded-lg mt-2 p-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="text"
              onChange={(e) => {
                setemail(e.target.value);
                seterror("");
              }}
            />
          </div>
          <div className="flex flex-col text-gray-200 py-2 ">
            <label>Mật khẩu</label>
            <input
              className="p-2 rounded-lg mt-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
                seterror("");
              }}
            />
          </div>
          <p className="text-red-500">{error}</p>
          <div className="flex justify-between text-gray-200 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Lưu mật khẩu
            </p>
            <p className="hover:opacity-50 hover:cursor-pointer">
              Quên mật khẩu
            </p>
          </div>
          <button
            className="w-full my-5 py-2 bg-gray-500 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg"
            onClick={() => {
              handleClickSubmit();
            }}
          >
            Đăng nhập
          </button>
        </div>
        <p className="text-gray-200">
          Bạn chưa có tài khoản?{" "}
          <span
            className="text-red-500 hover:opacity-50 hover:cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Đăng ký tại đây
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
