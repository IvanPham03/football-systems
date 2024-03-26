import React from "react";
import { useSelector } from "react-redux";
import CreateTournament from "./CreateTournament";
import FindTournament from './FindTournament';

const Index = () => {
  const layout = useSelector((state) => state.ui.view);
  return (
    <div className="px-2 sm:px-6 lg:px-8 mt-10 mx-auto">
      {layout === "FindTournament" && <FindTournament />}
      {layout === "CreateTournament" && <CreateTournament />}
      {layout !== "FindTournament" && layout !== "CreateTournament" && <FindTournament />}
    </div>
  );
};

export default Index;
