import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const tournament = new Schema(
  {
    name: String,
    ownerId: { type: String, require: true },
    timeStart: { type: Date, require: true },
    timeEnd: { type: Date, require: true },
    venue: String,
    phoneNumber: String,
    numberPerTeam: Number,
    registrationDeadline: Date,
    numberTeam: Number,
    pathImage: { type: String, default: "" },
    privacy: { type: String, default: "private" },
    status: { type: String, default: "inactive" },
    formatTour: {
      type: String,
      enum: ["League", "Knockout", "Hybrid"],
      required: true,
      default: "League",
    },
    // Add format-specific information based on formatTour:
    formatDetails: {
      // Define properties for combined format
      numberOfRounds: Number,
      win: Number,
      loss: Number,
      draw: Number,
      amountTable: Number,
      advancingTeam: Number,
    },
    team: [{ type: String }], // lưu danh sách id cầu team thi đấu thay vì ref
    rounds: [{ type: String }],
  },
  { timestamps: true }
);

const Tournament = connect.model("tournament", tournament);
export default Tournament;
