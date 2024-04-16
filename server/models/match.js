import { Schema } from "mongoose";
import connect from "../config/db.config.js";

const match = new Schema(
  {
    round_Id: { type: String, required: true },
    tournamentId: { type: String, required: true },
    teamA: { type: String },
    teamB: { type: String },
    scoreA: { type: Number, default: 0 },
    scoreB: { type: Number, default: 0 },
    yellowCardsA: { type: Number, default: 0 },
    yellowCardsB: { type: Number, default: 0 },
    redCardsA: { type: Number, default: 0 },
    redCardsB: { type: Number, default: 0 },
    winner: { type: String, default: "_" },
    finnish: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    location: String,
    ordinalNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Match = connect.model("match", match);
export default Match;
