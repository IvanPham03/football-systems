import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const teamFormation = new Schema(
  {
    teamName: String,
    formationName: String,
    number: Number,
    formation: String,
    policy: String,
    pitch: String,
    // imagePlayer: String,
    // team: {type: Schema.Types.ObjectId, ref: "team"}
    players: [{ type : String,}],
    team : { type : String}
  },
  { timestamps: true }
);


const TeamFormation = connect.model("teamFormation", teamFormation);
export default TeamFormation;
