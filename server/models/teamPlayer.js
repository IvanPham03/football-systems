import { Schema } from "mongoose";
import connect from "../config/db.config.js";

const teamPlayer = new Schema(
  {
    name: {type: String, required: true},
    ownerId: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    email: { type: String, default: "" },
    timeActive: { type: String, default: "" },
    areaActive: { type: String, default: "" },
    contact: { type: String, default: "" },
    pathImg: { type: String, default: "" },
    age: { type: String, default: "" },
    players: [
      {
        name: { type: String, required: true },
        JerseyNumber: { type: Number, default: "" },
        phoneNumber: { type: String, required: true },
        email: { type: String, default: "" },
        position: { type: String, default: "" },
        dob: { type: Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

const TeamPlayer = connect.model("teamplayer", teamPlayer);
export default TeamPlayer;
