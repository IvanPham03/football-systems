import React, { useState } from "react";
import bg from "../../assets/soccer-balloon-camp-monochrome-scene-generative-ai.jpg";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../config/AxiosInstance.js";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [repassword, setrepassword] = useState();
  const [email, setemail] = useState();
  const [error, seterror] = useState();

  const handleClickSubmit = async () => {
    try {
      const emailIsValid = validateEmail(email);
      const passwordIsValid = validatePassword(password);
      if (emailIsValid && passwordIsValid && name) {
        if (password === repassword) {
          const rs = await AxiosInstance.post("/auth/signup", {
            name: name,
            password: password,
            email: email,
          });
          if (rs.status.ok) {
            navigate("/");
          } else {
            seterror("Đăng ký không thành công!");
          }
        } else {
          seterror("Mật khẩu không khớp!");
        }
        // Form submission or other actions
      } else {
        // Display error messages
        seterror("Vui lòng kiểm tra lại thông tin");
      }
    } catch (error) {
      seterror("Đăng ký không thành công!");
    }
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    // Minimum 8 characters, at least one letter and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };
  return (
    <div
      className="w-screen flex justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(50px)",
      }}
    >
      <div className="bg-gray-800bg-transparent flex flex-col h-screen items-center justify-center py-10 max-w-[500px] xl:w-[500px]">
        <div className="max-w-[500px] w-full mx-auto rounded-lg">
          <div className="my-4 flex justify-center" role="tooltip">
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
            Đăng ký
          </h2>
          <div className="flex flex-col text-gray-200 py-2">
            <label>Họ tên</label>
            <input
              className="rounded-lg mt-2 p-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col text-gray-200 py-2">
            <label>Email</label>
            <input
              className="rounded-lg mt-2 p-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="text"
              onChange={(e) => {
                setemail(e.target.value);
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
              }}
            />
          </div>
          \<p className="text-red-500">{error}</p>
          <div className="flex flex-col text-gray-200 py-2 ">
            <label>Nhập lại mật khẩu</label>
            <input
              className="p-2 rounded-lg mt-2 bg-transparent focus:outline-none border-solid border border-gray-200"
              type="password"
              onChange={(e) => {
                setrepassword(e.target.value);
              }}
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
            Đăng ký
          </button>
        </div>
        <p className="text-gray-200">
          Bạn đã có tài khoản?{" "}
          <span
            className="text-red-500 hover:opacity-50 hover:cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Đăng nhập tại đây
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
