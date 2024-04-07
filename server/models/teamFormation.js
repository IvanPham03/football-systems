import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const teamFormation = new Schema(
  {
    teamName: String,
    formationName: String,
    number: number,
    formation: String,
    policy: String,
    pitch: String,
    // imagePlayer: String,
    team: {type: Schema.Types.ObjectId, ref: "team"}
  },
  { timestamps: true }
);


const TeamFormation = connect.model("teamFormation", teamFormation);
export default TeamFormation;
