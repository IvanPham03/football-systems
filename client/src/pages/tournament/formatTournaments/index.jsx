import React from "react";
import League from "./League";
import Hybrid from "./Hybrid";
const Index = ({ type, handleFormatTour }) => {
  return (
    <div>
      {type === "League" && <League handleFormatTour={handleFormatTour} />}
      {type === "Hybrid" && <Hybrid handleFormatTour={handleFormatTour} />}
    </div>
  );
};

export default Index;
