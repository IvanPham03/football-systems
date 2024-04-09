import React from "react";
import { useSelector } from "react-redux";
// import CreateTeam from "./CreateTeam";
// import CreateTeamFormation from "./CreateTeamFormation";
// import FindTeam from "./FindTeam";
import TeamInfo from "./TeamInfo";
const Index = () => {
  const layout = useSelector((state) => state.ui.view);
  return (
    <div className="px-2 sm:px-6 lg:px-8 mt-0 mx-auto">
      {layout === "TeamInfo" && <TeamInfo/>}
      
      {layout !== "TeamInfo" && <TeamInfo />}
    </div>
  );
};

export default Index;
