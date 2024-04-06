import React from "react";
import Footer from "../footers/footer";
import Navbar from "../navbars/navbar";
import Fail from "../../components/modal/Fail";
import { useSelector } from "react-redux";
const Main = ({ page }) => {
  const Page = page;
  const fail = useSelector((state) => state.ui.modalFail);
  return (
    <div>
      <Navbar />
      {fail && <Fail />}
      <div className="max-w-[1200px] mt-0 mx-auto">{<Page />}</div>
      <Footer />
    </div>
  );
};

export default Main;
