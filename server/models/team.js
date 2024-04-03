import { Schema } from "mongoose";
import connect from "../config/db.config.js";

const team = new Schema(
  {
    name: String,
    // logo: {
    //   data: ArrayBuffer,
    //   contentType: String
    // },
    logo:{
      type:String,
      default:""
    },
    age: Number,
    level: String,
    email: String,
    phone: String,
    area: String,
    // uniform: {
    //   data: ArrayBuffer,
    //   contentType: String
    // },
    uniform:{
      type:String,
      default:""
    },
    numOfMembers: Number,
    introduce: String,
    player: [{ type: Schema.Types.ObjectId, ref: "player" }],
    teamFormation: [{ type: Schema.Types.ObjectId, ref: "teamFormation" }],
    coach: {type: Schema.Types.ObjectId, ref: "coach"}

  },
  { timestamps: true }
);

const Team = connect.model("team", team);
export default Team;
