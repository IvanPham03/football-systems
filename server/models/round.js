import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const round = new Schema(
  {
    name: { type: String, required: true },
    matches: [{ type: String }], // lưu id
    number: { type: Number, required: true },
    tournament: { type: String, required: true },
  },
  { timestamps: true }
);

const Round = connect.model("round", round);
export default Round;
