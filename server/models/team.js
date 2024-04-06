import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const team = new Schema(
  {
    name: String,
    ownerId: {type: String, required: true},
    phoneNumber: {type: String, default: ''},
    email: {type: String, default: ''},
    timeActive: {type: String, default: ''},
    areaActive:{type: String, default: ''},
    ownerName: {type: String, default: ''},
    player: [{ type: String }] // lưu danh sách id cầu thủ 
  },
  { timestamps: true }
);
function arrayLimit(val) {
  return val.length <= 3;
}

const Team = connect.model("team", team);
export default Team;
