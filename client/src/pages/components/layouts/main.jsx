import React from "react";
import Footer from "../footers/Footer";
import Navbar from "../navbars/navbar";
const Main = ({ page }) => {
  const Page = page;
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mt-0 mx-auto">{<Page />}</div>
      <Footer />
    </div>
  );
};

export default Main;
