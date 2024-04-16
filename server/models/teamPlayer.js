import { Schema } from "mongoose";
import connect from "../config/db.config.js";

const teamPlayer = new Schema(
  {
    name: { type: String, required: true },
    ownerId: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    email: { type: String, default: "" },
    timeActive: { type: String, default: "" },
    areaActive: { type: String, default: "" },
    contact: { type: String, default: "" },
    pathImg: { type: String, default: "" },
    age: { type: String, default: "" },
    rank: { type: Number, default: 0 },
    players: [
      {
        name: { type: String, required: true },
        JerseyNumber: { type: Number, default: "" },
        phoneNumber: { type: String, required: true },
        email: { type: String, default: "" },
        position: { type: String, default: "" },
        dob: { type: Date, required: true },
        cards: [
          {
            match: String,
            yellowCards: { type: Number, default: 0 },
            redCards: { type: Number, default: 0 },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const TeamPlayer = connect.model("teamplayer", teamPlayer);
export default TeamPlayer;
