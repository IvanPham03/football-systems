import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const tournament = new Schema(
  {
    name: String,
    timeStart: Date,
    timeEnd: Date,
    team: [
      {
        type: Schema.Types.ObjectId,
        ref: "team",
      },
    ],
  },
  { timestamps: true }
);

const Tournament = connect.model("tournament", tournament);
export default Tournament;
