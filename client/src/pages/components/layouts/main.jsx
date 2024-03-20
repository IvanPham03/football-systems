import React from "react";
import { Footer, Navbar } from "../..";
import { useSelector } from "react-redux";
import Home from "../../home";
import League from "../../league";
import CreateTournament from "../../tournament/CreateTournament";
import FindTournament from "../../tournament/FindTournament";
import Team from "../../team";
const Main = () => {
  const layout = useSelector((state) => state.ui.view);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mt-10 mx-auto">
      {layout === "homeClient" && <Home />}
      {layout === "league" && <League />}
      {layout === "CreateTournament" && <CreateTournament />}
      {layout === "FindTournament" && <FindTournament />}
      {layout === "team" && <Team />}</div>
      <Footer />
    </div>
  );
};

export default Main;
