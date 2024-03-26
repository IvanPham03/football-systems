import { Schema } from "mongoose";
import connect from "../config/db.config.js";

const team = new Schema(
  {
    name: String,
    player: [{ type: Schema.Types.ObjectId, ref: "player" }],
  },
  { timestamps: true }
);

const Team = connect.model("team", team);
export default Team;
