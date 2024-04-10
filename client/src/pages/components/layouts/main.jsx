import React from "react";
import Footer from "../footers/Footer";
import Navbar from "../navbars/navbar";
import Fail from "../../components/modal/Fail";
import EditTeam from "../../components/modal/team/Edit";
import Success from '../../components/modal/Success'
import Spinner from '../../components/spinner'
const Main = ({ page }) => {
  const Page = page;
  return (
    <div>
      <Navbar />
      <Fail />
      <Spinner/>
      <EditTeam />
      <Success />
      <div className="max-w-[1200px] mt-0 mx-auto">{<Page />}</div>
      <Footer />
    </div>
  );
};

export default Main;
