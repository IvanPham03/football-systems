import React from "react";
import { useSelector } from "react-redux";
import CreateTeam from "./CreateTeam";
import CreateTeamFormation from "./CreateTeamFormation";
import FindTeam from "./FindTeam";

const Index = () => {
  const layout = useSelector((state) => state.ui.view);
  return (
    <div className="px-2 sm:px-6 lg:px-8 mt-10 mx-auto">
      {layout === "CreateTeam" && <CreateTeam />}
      {layout === "CreateTeamFormation" && <CreateTeamFormation />}
      {layout === "FindTeam" && <FindTeam />}
      {layout !== "CreateTeam" &&
        layout !== "CreateTeamFormation" &&
        layout !== "FindTeam" && <CreateTeam />}
    </div>
  );
};

export default Index;
